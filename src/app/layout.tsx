import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://akinde-peter.vercel.app'),
  title: 'Akinde Peter - Frontend Developer & Sustainability Expert',
  description: 'Portfolio of Akinde Peter, showcasing expertise in frontend development and sustainable construction practices.',
  keywords: 'frontend developer, sustainability expert, React, Next.js, green building, LEED, construction technology',
  authors: [{ name: 'Akinde Peter' }],
  openGraph: {
    title: 'Akinde Peter - Frontend Developer & Sustainability Expert',
    description: 'Portfolio showcasing cutting-edge web development and sustainable construction expertise.',
    type: 'website',
    url: 'https://akinde-peter.vercel.app',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akinde Peter Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akinde Peter - Frontend Developer & Sustainability Expert',
    description: 'Portfolio showcasing cutting-edge web development and sustainable construction expertise.',
    images: ['/images/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2C3E50',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
