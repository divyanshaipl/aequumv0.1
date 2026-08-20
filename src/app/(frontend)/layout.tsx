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
    default: 'Aequum | Operating Infrastructure for the Next Service Economy',
    template: '%s | Aequum',
  },
  description:
    'Aequum is building an AI-assisted engagement operating system for agencies, consultancies and specialist service firms, connecting people, scope, delivery, approvals and commercial context around each client engagement.',
  applicationName: 'Aequum',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Aequum | Build the team. Run the engagement. Get paid. Learn.',
    description:
      'Operating infrastructure for service businesses that assemble people, partners and AI around client outcomes.',
    type: 'website',
    siteName: 'Aequum',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  colorScheme: 'light',
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  await headers()

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
