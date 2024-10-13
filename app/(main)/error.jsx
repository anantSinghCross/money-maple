'use client'
import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className='flex justify-center items-center p-10 text-rose-500'>
      <div className='p-10'>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
