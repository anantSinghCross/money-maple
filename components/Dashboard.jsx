import React from 'react'
import TransactionTable from './transactions/TransactionTable';
import { getTotalExpense, getTotalIncome } from '@/lib/utils';

function  Dashboard({ transactions }) {
  /* 
    {
      id: 'xaYoPhRxxancADVFSY0o',
      description: 'This is my rent transaction',
      type: 'expense',
      expenseName: 'Monthly Rent',
      currency: 'USD',
      category: 'rent',
      amount: '4500',
      paymentMethod: 'cash',
      dot: '2024-08-22'
    }
  
  */
  console.log(transactions);

  const totalExpenses = getTotalExpense(transactions);
  const totalIncome = getTotalIncome(transactions);
  const netIncome = totalIncome - totalExpenses;

  return (
    <>
      <h3 className='text-2xl text-slate-600 font-semibold pb-4'>Dashboard</h3>
      <div className='flex flex-col md:flex-row gap-4 w-full justify-center'>
        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Total Income</h4>
          <span className='font-mono text-emerald-400 text-3xl'>+{totalExpenses}</span>
        </div>

        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Total Expenses</h4>
          <span className='font-mono text-rose-400 text-3xl'>-{totalIncome}</span>
        </div>

        <div className='flex-grow p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
          <h4 className='text-slate-500'>Net Income</h4>
          <span className='font-mono text-slate-500 text-3xl'>{netIncome}</span>
        </div>
      </div>
      
      <div className='my-10 p-5 rounded-2xl bg-white shadow-xl shadow-slate-200'>
        <h4 className=' text-slate-500 font-semibold text-lg my-5'>Recent Transactions</h4>
        <TransactionTable transactions={transactions}/>
      </div>
    </>
  )
}

export default Dashboard