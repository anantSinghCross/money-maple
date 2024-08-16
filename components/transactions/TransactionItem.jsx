import React from 'react'

function TransactionItem({transaction}) {
  let { expenseName, amount, currency, dot, category, paymentMethod, type } = transaction;
  if(expenseName === '' || expenseName === null || expenseName === undefined){
    expenseName = 'Unknown';
  }
  const amountColor = type === 'expense' ? 'text-red-600 bg-red-50 ' : 'text-emerald-600 bg-emerald-50';
  const sign = type === 'expense' ? '-' : '+';
  const date = new Date(dot).toDateString();
  return (
    <tr className='border-l-2 border-b-2 border-r-2 border-slate-100 transition-all hover:bg-slate-100'>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{expenseName}</td>
      <td className={`text-nowrap p-4 font-mono text-sm text-end`}><span className={`px-2 py-1 rounded ${amountColor}`}>{`${sign} ${amount}`}</span></td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{currency}</td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{date}</td>
      <td className='text-nowrap p-4 text-sm text-slate-600'><span className={`px-2 py-1 rounded bg-slate-100`}>{category}</span></td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{paymentMethod}</td>
    </tr>
  )
}

export default TransactionItem