import React from 'react'

function Button({children, onClick}) {
  return (
    <button className=' p-2 px-4 border rounded-md text-sm font-semibold' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button