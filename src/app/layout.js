import {Manrope} from 'next/font/google'
import './globals.css'
import Hero from './components/Hero'
import Contact from './components/Contact'

const manrope = Manrope({ subsets: ['latin'] })


export const metadata = {
  title: 'PITON',
  description: 'PITON Technology Intern',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <div><Hero /></div>
        <div>{children}</div>
        <div className="mt-40"> <Contact/></div>
         
         
        
      </body>
    </html>
  )
}
