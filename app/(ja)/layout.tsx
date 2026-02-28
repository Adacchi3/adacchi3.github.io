import type { Metadata } from 'next'
import { Providers } from '../providers'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Adacchi3 Portfolio',
  description: 'This page is a part of Adacchi3 Portfolio.',
  openGraph: {
    type: 'website',
    description: 'This page is a part of Adacchi3 Portfolio.',
  },
  twitter: {
    card: 'summary',
    creator: 'ayata_taguchi',
    description: 'This page is a part of Adacchi3 Portfolio.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
