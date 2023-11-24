import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Poppins({ subsets: ['latin'], weight: ["400", "500"] })

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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
