import React from 'react'

function Button({children, onClick}) {
  return (
    <button className=' p-2 px-4 rounded-md text-sm font-semibold hover:bg-red-50 hover:text-red-500' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button