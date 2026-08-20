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
    'Aequum is building one operating system for agencies, consultancies and specialist service firms to move client work from opportunity to team, scope, delivery, approvals and billing without rebuilding context across tools.',
  applicationName: 'Aequum',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.svg',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Aequum | Build the team. Run the engagement. Get paid. Learn.',
    description:
      'Operating infrastructure for service businesses assembling internal teams, specialists, partners and AI around client outcomes.',
    type: 'website',
    siteName: 'Aequum',
    images: [
      {
        url: '/og-aequum.png',
        width: 1200,
        height: 630,
        alt: 'Aequum operating infrastructure for the next service economy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aequum | Operating Infrastructure for the Next Service Economy',
    description:
      'One operating context for client engagements across people, work and commercial operations.',
    images: ['/og-aequum.png'],
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
