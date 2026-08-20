import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Inter, Sora } from 'next/font/google'
import type { ReactNode } from 'react'

import './styles.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Aequum — Operating Infrastructure for Service Businesses',
    template: '%s | Aequum',
  },
  description:
    'Aequum is building the operating layer that connects clients, talent, work, contracts, workflows and commercial operations for modern service businesses.',
  applicationName: 'Aequum',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Aequum — Run your service business as one connected system',
    description:
      'Operating infrastructure for modern agencies, consultancies, studios and distributed service teams.',
    type: 'website',
    siteName: 'Aequum',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  colorScheme: 'light',
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  // Reading headers opts the route into dynamic rendering so Next can apply the request CSP nonce.
  await headers()

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
