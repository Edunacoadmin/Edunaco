import { Header } from '@/components/header/Header'
import './globals.css'

import { Reenie_Beanie } from '@next/font/google'
import localFont from '@next/font/local'


const reenie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie',
})

const satoshi = localFont({
  src: '../public/fonts/SatoshiVariable.woff2',
  variable: '--font-satoshi',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`h-full bg-yellow ${reenie.variable} ${satoshi.variable} text-blue`}>
      <head />
      <body className='p-2.5 sm:p-5 h-full'>
        <div className='bg-white shadow-page'>
          <div className='grid grid-rows-page'>
            <Header></Header>
            {children}
          </div>
        </div>
        <footer className='pt-5 pb-6 text-center text-sm leading-9'>
          &copy; Edunaco 2023 | Ochrana osobních údajů | Nastavení cookies | Mapa stránek
        </footer>
      </body>
    </html>
  )
}
