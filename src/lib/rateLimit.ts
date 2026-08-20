import { createHmac } from 'node:crypto'

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 8

function fingerprint(value: string): string {
  const secret = process.env.RATE_LIMIT_SALT || process.env.PAYLOAD_SECRET
  if (!secret) return 'missing-secret'
  return createHmac('sha256', secret).update(value).digest('hex')
}

export function checkBurstLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now()
  const key = fingerprint(ip || 'unknown')
  const current = buckets.get(key)

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  current.count += 1
  buckets.set(key, current)

  if (current.count > MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) }
  }

  // Opportunistic cleanup so a warm function does not retain stale buckets forever.
  if (buckets.size > 2_000) {
    for (const [bucketKey, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(bucketKey)
    }
  }

  return { allowed: true, retryAfter: 0 }
}
