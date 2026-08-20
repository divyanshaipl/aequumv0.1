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
    default: 'Aequum | Operating System for Modern Service Businesses',
    template: '%s | Aequum',
  },
  description:
    'Aequum is building an AI-assisted operating platform for agencies, consultancies and specialist service firms, connecting team assembly, scope, delivery, approvals and commercial operations around the client engagement.',
  applicationName: 'Aequum',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Aequum | From client opportunity to delivered, paid project',
    description:
      'One connected engagement workflow across team assembly, scope, contracts, delivery, approvals, invoicing and payments.',
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
