import Link from 'next/link'
import React from 'react'
import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <div className='flex justify-between items-center text-gray-700 bg-white m-5 p-4 rounded-xl  border-2 border-slate-300'>
      <Link href='/'><h1 className='font-bold'>Money Maple  </h1></Link>
      <HeaderMenu/>
    </div>
  )
}

export default Header