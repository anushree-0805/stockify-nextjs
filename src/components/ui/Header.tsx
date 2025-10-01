import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navitems from '../Navitems'
import Userdropdown from '../Userdropdown'
const Header = () => {
  return (
   <header className='sticky top-0 header'>
    <div className='header-wrapper container'>
       <Link href="/"> <Image src="/public/assets/images/logo2.png" alt="Logo" width={32} height={32} /></Link>
       
       <nav className='hidden sm:block'>
        <Navitems />
        
       </nav>
       <Userdropdown />
    </div>

   </header>
  )
}

export default Header
