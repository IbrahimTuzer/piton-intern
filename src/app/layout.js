import { Inter } from 'next/font/google'
import './globals.css'
import Hero from './components/Hero'
import Contact from './components/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Piton',
  description: 'Piton Arge Tec. Intern',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Hero />
         {children}
         <Contact/>
      </body>
    </html>
  )
}
