import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/cartContextProvider'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ponte Games',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-zinc-900">
      <CartContextProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </CartContextProvider>
    </html>
  )
}
