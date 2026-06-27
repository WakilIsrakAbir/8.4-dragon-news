import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '@/assets/user.png'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-8 max-w-10/12 mx-auto'>
      <div className=''></div>
      <div>
        <ul className='flex gap-10'>
        <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/about"}>About</NavLink></li>
        <li><NavLink href={"/career"}>Career</NavLink></li>
      </ul>
      </div>
      <div className='flex justify-center items-center gap-4'>
        <Image src={user} alt='user' width={40} height={40}></Image>
        <Link href="/login"><button className='btn btn-secondary'>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar