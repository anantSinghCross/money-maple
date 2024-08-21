import Header from '@/components/header'
import React from 'react'

function MainLayout({children}) {
  return (
    <div className='bg-slate-100'>
      <Header/>
      {children}
    </div>
  )
}

export default MainLayout