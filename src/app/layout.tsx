import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
            <div className="text-text dark:text-darkText w-screen h-screen">
              {children}
            </div>
        </body>
      </html>
    </ViewTransitions>
  )
}