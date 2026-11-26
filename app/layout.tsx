import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jatin Kumar — Full Stack Developer',
  description: 'Portfolio of Jatin Kumar, a full stack developer and Computer Science Engineering student building thoughtful digital products with Java, Spring Boot, and React.',
  generator: 'Next.js',
  openGraph: {
    title: 'Jatin Kumar — Full Stack Developer',
    description: 'Thoughtful digital experiences, one line of code at a time.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jatin Kumar — Full Stack Developer',
    description: 'Thoughtful digital experiences, one line of code at a time.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
