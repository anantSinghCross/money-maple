'use client'
import React from 'react'
import { useFormStatus } from "react-dom";

const StatusElement = ({children, fallback}) => {
  const {pending} = useFormStatus();
  return (
    <div>
      {pending ? (
        fallback
      ) : (
        children
      )}
    </div>
  )
}

export default StatusElement