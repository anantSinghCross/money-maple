'use client'

import React from 'react'
import {useFormStatus} from 'react-dom'

const variants = {
  primary: 'p-2 px-4 rounded-md text-sm font-semibold bg-rose-400 text-white hover:bg-rose-500',
  secondary: 'p-2 px-4 rounded-md text-sm font-semibold hover:text-rose-400 text-slate-500 hover:bg-rose-50',
}

function Button({children, onClick, variant='primary', className, pendingLabel='Saving...'}) {

  const {pending} = useFormStatus()
  return (
    <button disabled={pending} className={`${variants[variant]} ${className}`} onClick={onClick}>
      {
        !pending ? children : pendingLabel
      }
    </button>
  )
}

export default Button