import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Imperium Online Chess Hub',
  description: 'Track live league standings, tournaments, and player performance in real time.',
  openGraph: {
    title: 'Imperium Online Chess Hub',
    description: 'Track live league standings, tournaments, and player performance in real time.',
    url: 'https://imperium-chess-hub.vercel.app',
    siteName: 'Imperium Online Chess Hub',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Imperium Online Chess Hub',
    description: 'Track live league standings, tournaments, and player performance in real time.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
