import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Closet Application',
  description: 'Your digital Wardrobe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
