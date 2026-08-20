import { z } from 'zod'
import { cleanText, normalizeEmail } from './text'

const clean = (max: number) =>
  z
    .string()
    .max(max)
    .transform(cleanText)

export const leadSchema = z.object({
  name: clean(80).optional().default(''),
  email: z.string().email().max(254).transform(normalizeEmail),
  company: clean(120).optional().default(''),
  businessType: z
    .enum(['agency', 'consultancy', 'studio', 'independent', 'professional-services', 'other'])
    .optional()
    .default('other'),
  challenge: clean(500).optional().default(''),
  consent: z.literal(true),
  website: z.string().max(0).optional().default(''),
  startedAt: z.number().int().positive(),
  source: clean(80).optional().default('website'),
  utmSource: clean(100).optional().default(''),
  utmMedium: clean(100).optional().default(''),
  utmCampaign: clean(100).optional().default(''),
})

export type LeadInput = z.infer<typeof leadSchema>
