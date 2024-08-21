import React from 'react'

function DashboardPage() {
  return (
    <section className='p-5'>
      <h3 className='text-2xl font-semibold pb-4'>Dashboard</h3>
      <div className='flex gap-2 w-full justify-center'>
        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Total Income</h4>
          <span className='font-mono text-emerald-500 text-3xl'>+11,234</span>
        </div>

        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Total Expenses</h4>
          <span className='font-mono text-red-500 text-3xl'>-11,234</span>
        </div>

        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Net Income</h4>
          <span className='font-mono text-slate-600 text-3xl'>+11,234</span>
        </div>
      </div>

    </section>
  )
}

export default DashboardPage