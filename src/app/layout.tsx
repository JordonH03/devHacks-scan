'use client'

import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
