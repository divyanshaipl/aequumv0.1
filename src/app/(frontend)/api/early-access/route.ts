import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import { leadSchema } from '@/lib/leadSchema'
import { getAllowedOrigins } from '@/lib/origins'
import { checkBurstLimit } from '@/lib/rateLimit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 8 * 1024
const MIN_FORM_TIME_MS = 1_500
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000

function secureJSON(body: unknown, status = 200, extraHeaders: HeadersInit = {}) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  })
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return secureJSON({ message: 'Unsupported request.' }, 415)
  }

  const contentLength = Number(request.headers.get('content-length') || '0')
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return secureJSON({ message: 'Request is too large.' }, 413)
  }

  const origin = request.headers.get('origin')
  const allowedOrigins = getAllowedOrigins()
  if (process.env.NODE_ENV === 'production' && (!origin || !allowedOrigins.includes(origin))) {
    return secureJSON({ message: 'Request origin is not allowed.' }, 403)
  }

  const limiter = checkBurstLimit(getClientIP(request))
  if (!limiter.allowed) {
    return secureJSON(
      { message: 'Too many attempts. Please try again later.' },
      429,
      { 'Retry-After': String(limiter.retryAfter) },
    )
  }

  let raw: unknown
  try {
    const text = await request.text()
    if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) {
      return secureJSON({ message: 'Request is too large.' }, 413)
    }
    raw = JSON.parse(text)
  } catch {
    return secureJSON({ message: 'Invalid request.' }, 400)
  }

  const parsed = leadSchema.safeParse(raw)
  if (!parsed.success) {
    return secureJSON({ message: 'Please check the form fields and try again.' }, 400)
  }

  const lead = parsed.data

  // Honeypot: return the same outward success response so bots do not learn the trap.
  if (lead.website) {
    return secureJSON({ message: "Thanks — we've received your request." })
  }

  const elapsed = Date.now() - lead.startedAt
  if (elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return secureJSON({ message: 'Please reload the page and submit the form again.' }, 400)
  }

  const payload = await getPayload({ config: configPromise })

  try {
    const existing = await payload.find({
      collection: 'early-access-leads',
      where: { email: { equals: lead.email } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'early-access-leads',
        overrideAccess: true,
        data: {
          name: lead.name,
          email: lead.email,
          company: lead.company,
          businessType: lead.businessType,
          challenge: lead.challenge,
          consent: lead.consent,
          source: lead.source,
          utmSource: lead.utmSource,
          utmMedium: lead.utmMedium,
          utmCampaign: lead.utmCampaign,
        },
      })
    }

    // Identical response for new and existing emails prevents account/list enumeration.
    return secureJSON({ message: "You're on the list. We'll reach out as Aequum opens early access." })
  } catch (error) {
    // Deliberately avoid logging user-submitted form contents or database details.
    console.error('Early-access submission failed:', error instanceof Error ? error.name : 'UnknownError')
    return secureJSON({ message: 'We could not save your request right now. Please try again.' }, 500)
  }
}
