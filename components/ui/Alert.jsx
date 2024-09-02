import React from 'react'

function Alert({children, variant='info'}) {
  const variants = {
    info: 'text-sm p-2 my-2 bg-blue-50 text-blue-500 rounded',
    warning: 'text-sm p-2 my-2 bg-yellow-50 text-yellow-500 rounded',
    neutral: 'text-sm p-2 my-2 bg-slate-50 text-slate-500 rounded',
    error: 'text-sm p-2 my-2 bg-red-50 text-red-500 rounded',
  }
  return (
    <div className={variants[variant]}>
      <p>{children}</p>
    </div>
  )
}

export default Alert