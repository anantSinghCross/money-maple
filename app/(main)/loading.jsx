import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const LoadingRoot = () => {
  return (
    <div className='flex justify-center items-center p-10 text-rose-500'>
      <div className='p-10'>
        <CgSpinner className='animate-spin' size={35}/>
      </div>
    </div>
  )
}

export default LoadingRoot