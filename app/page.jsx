import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import landingIllustration from '../public/landing.svg'
import chartsIllustration from '../public/charts.svg'
import organizingIllustration from '../public/organizing.svg'
import simpleIllustration from '../public/simple.svg'

function HomePage() {
  return (
    <div className=' flex flex-col'>
      <div className=' bg-gradient-to-t from-red-500 to-red-400 text-white'>
        <div className=' flex justify-between items-center text-gray-700 bg-white m-5 p-5  rounded-lg shadow-lg shadow-red-500'>
          <Link href='/'><h1 className='font-bold'>Money Maple 🍁</h1></Link> 
          <menu className='flex gap-4 items-center text'>
            <Link href='/signup'><Button>Login</Button></Link>
            <Link href='/about'> <Button>About</Button></Link>
          </menu>
        </div>

        <section className=' flex gap-10 m-10 my-20 justify-center'>
          <div>
            <h1 className=' text-2xl font-bold py-5'>
              Welcome to <span className=' bg-red-400 p-2 my-2 rounded-md text-nowrap'>Money Maple 🍁</span>
            </h1>
            <h3 className='text-xl font-semibold py-3'>
              Take Control of Your Finances
            </h3>
            <p className=''>
              Track Expenses, Manage Budgets, and Achieve Your Financial Goals
            </p>
            <Link href='/login'>
              <button className='group my-5 p-5 py-3 rounded-lg bg-white text-red-500 font-bold hover:shadow-lg hover:shadow-red-400 transition-all'>
                Get Started
              </button>
            </Link>
          </div>
          <div className=' p-5 rounded-3xl bg-white shadow-2xl'>
            <Image
              priority
              src={landingIllustration}
              width={450}
            />
          </div>
        </section>

      </div>

      <section className='flex flex-col gap-10 text-gray-700 my-20'>
        <div>
          <h1 className='text-2xl font-bold text-center mt-10'>
            Why Choose Money Maple🍁?
          </h1>
        </div>
        <div className='flex items-stretch gap-4 m-10'>

          <div className='flex flex-col items-center justify-between border-2 rounded-xl shadow-lg p-5 hover:scale-105 transition-all'>
            <div className=''>
              <Image
                priority
                src={simpleIllustration}
                width={250}
              />
            </div>
            <div>
              <h3 className='text-center font-semibold pt-5'>
                Simple & Intuitive
              </h3>
              <p className='text-center p-4'>
                Easily track your spending and income with our user-friendly interface
              </p>
            </div>
          </div>
          
          <div className='flex flex-col items-center justify-between border-2 rounded-xl shadow-lg p-5 hover:scale-105 transition-all'>
            <div className=''>
              <Image
                priority
                src={chartsIllustration}
                width={250}
              />
            </div>
            <div>
              <h3 className='text-center font-semibold pt-5'>
                Detailed Insights
              </h3>
              <p className='text-center p-4'>
                Get detailed reports and analytics to understand your financial habits
              </p>
            </div>
          </div>
          
          <div className='flex flex-col items-center justify-between border-2 rounded-xl shadow-lg p-5 hover:scale-105 transition-all'>
            <div className=''>
              <Image
                priority
                src={organizingIllustration}
                width={250}
              />
            </div>
            <div>
              <h3 className='text-center font-semibold pt-5'>
                Stay Organized
              </h3>
              <p className='text-center p-4'>
                Categorize your expenses and set budgets to keep your finances in check
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center divide-x-2 divide-red-600 gap-5 px-10 py-16 text-white bg-gradient-to-t from-red-500 to-red-400'>
        <div>
          <h1 className='text-2xl text-nowrap font-bold text-center'>
            Key Features ✨ 
          </h1>
        </div>
        <div className=' pl-5'>
          <ul>
            <li className='m-3'>Expense Tracking: Quickly add and manage your expenses and income.</li>
            <li className='m-3'>Budget Management: Set and track your monthly budgets with ease.</li>
            <li className='m-3'>Reports & Analytics: Generate comprehensive reports to analyze your spending.</li>
            <li className='m-3'>Recurring Transactions: Automate your recurring expenses and income.</li>
          </ul>
        </div>
      </section>

      <footer className='py-12 px-10 text-slate-200 bg-slate-600 text-center text-xs font-bold'>
        &copy; 2024 <span className='p-1 bg-white bg-opacity-20 rounded'>Money Maple 🍁</span>. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage