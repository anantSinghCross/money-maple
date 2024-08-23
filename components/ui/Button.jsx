'use client'

import React from 'react'
import {useFormStatus} from 'react-dom'

function Button({children, onClick, primary, className}) {
  const {pending} = useFormStatus()
  return (
    <button disabled={pending} className=' p-2 px-4 rounded-md text-sm font-semibold bg-rose-400 text-white hover:bg-rose-500' onClick={onClick}>
      {
        !pending ? children : 'Saving...'
      }
    </button>
  )
}

export default Button