import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/flaticon-set.css';
import './css/magnific-popup.css';
import './css/animate.css';
import './css/bootsnav.css';
import './globals.css'
import './css/responsive.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Inter } from 'next/font/google'

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
        <main>
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
