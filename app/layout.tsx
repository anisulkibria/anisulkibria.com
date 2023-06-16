import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './nav'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anisul Kibria | Next.JS Developer',
  description: 'Anisul Kibria | Next.JS Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 xl:p-24 pt-24">
        <Header/>
        {children}
        <Nav/>
        </main>
      </body>
    </html>
  )
}
