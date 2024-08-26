import React from 'react'

function AboutPage() {
  return (
    <section className='flex justify-center items-center'>
      <div className='m-5 sm:m-10 border-2 rounded-3xl p-5 sm:p-10 px-8 sm:px-16 border-slate-300'>
        <h2 className='text-2xl text-slate-600 font-semibold my-4'>About Money Maple 🍁</h2>
        <h3 className='text-xl text-slate-500 font-semibold my-2'>Welcome to Money Maple 🍁</h3>
        <p className=' text-slate-600 mb-8'>
          Hi there! I’m the sole developer behind Money Maple, and I built this app with a simple goal in mind: to help people like you take control of their finances without the hassle and complexity that usually comes with budgeting tools. Whether you’re tracking your daily expenses or mapping out your savings goals, Money Maple 🍁 is designed to make the process as smooth and intuitive as possible.
        </p>
        
        <h3 className='text-xl text-slate-500 font-semibold my-2'>Why I Built Money Maple</h3>
        <p className=' text-slate-600 mb-8'>
          As someone who’s passionate about coding and personal finance, I wanted to create something that could benefit both worlds. I realized that so many of us struggle with tracking our money effectively, and the tools out there often feel overwhelming or over-engineered. That’s why I decided to build Money Maple 🍁 — a minimalist, user-friendly app that puts the focus back on simplicity and clarity.
        </p>

      </div>
    </section>
  )
}

export default AboutPage