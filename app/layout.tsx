import Head from './components/Head';
import Foot from './components/Foot';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/flaticon-set.css';
import './css/magnific-popup.css';
import './css/animate.css';
import './css/bootsnav.css';
import './globals.css'
import './css/responsive.css';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anisul Kibria | Next.js Developer',
  description: 'Anisul Kibria | React, Next.js, Node.js, MongoDB Full-stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <Head />
        {children}
        <Foot />
        </main>
      </body>
    </html>
  )
}
