import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'

function Header() {
  return (
    <div className='flex justify-between items-center text-gray-700 bg-white m-5 p-5 rounded-lg shadow-lg'>
      <Link href='/'><h1 className='font-bold'>Money Maple 🍁</h1></Link> 
      <menu className='flex gap-4 items-center text'>
        <Link href='/login'><Button>Login</Button></Link>
        <Link href='/about'> <Button>About</Button></Link>
      </menu>
    </div>
  )
}

export default Header