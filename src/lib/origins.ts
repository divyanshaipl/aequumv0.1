const normalizeOrigin = (value: string) => value.trim().replace(/\/$/, '')

export function getAllowedOrigins(): string[] {
  const origins = new Set<string>()

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL
  if (siteURL) origins.add(normalizeOrigin(siteURL))

  const configured = process.env.ALLOWED_ORIGINS
  if (configured) {
    configured
      .split(',')
      .map(normalizeOrigin)
      .filter(Boolean)
      .forEach((origin) => origins.add(origin))
  }

  const vercelURL = process.env.VERCEL_URL
  if (vercelURL) origins.add(`https://${normalizeOrigin(vercelURL)}`)

  if (process.env.NODE_ENV !== 'production') {
    origins.add('http://localhost:3000')
    origins.add('http://127.0.0.1:3000')
  }

  return [...origins]
}

export function getServerURL(): string {
  return normalizeOrigin(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  )
}
