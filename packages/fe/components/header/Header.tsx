/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../icon/Icon'

export const Header = () => {
  return (
    <header className="container border-b border-b-gray-200 flex items-center justify-between">
      <Link href={'/'}>
        <img
          src="/logo2x.png"
          alt="Logo edunaco"
          width={307}
          height={44}
        />
      </Link>
      <nav className='flex items-center'>
        <ul className='flex items-center'>
          <Link href='/skoly'><li className=''>Školy</li></Link>
          <Link href='/skoly'><li className='text-blue ml-13.5'>Informace</li></Link>
          {/* <Link href='/skoly'><li className='text-blue ml-13.5'>Materiály</li></Link> */}
          {/* <Link href='/skoly'><li className='text-blue ml-13.5'>Komunita</li></Link> */}
          <Link href='/blog'><li className='text-blue ml-13.5'>Blog</li></Link>
          <Link href='/o-nas'><li className='text-blue ml-13.5'>O nás</li></Link>
        </ul>
        <div className='w-[1px] bg-blue mx-12 h-5 opacity-40'></div>
        <ul className='flex items-center'>
          <Link href='/skoly'><li className=''><Icon icon="heart" height='22px' width='24px' /></li></Link>
          <Link href='/skoly'><li className='ml-10'><Icon icon="magnifier" height='22px' width='24px' /></li></Link>
          <Link href='/skoly'><li className='ml-10'><Icon icon="person" height='22px' width='24px' /></li></Link>
        </ul>
      </nav>
    </header>
  )
}