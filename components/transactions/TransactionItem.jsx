import React from 'react'

function TransactionItem({transaction}) {
  let { expenseName, amount, currency, dot, category, paymentMethod, type } = transaction;
  if(expenseName === '' || expenseName === null || expenseName === undefined){
    expenseName = 'Unknown';
  }
  const amountColor = type === 'expense' ? 'text-rose-600 bg-rose-50 group-hover:bg-rose-100' : 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100';
  const sign = type === 'expense' ? '-' : '+';
  const date = new Date(dot).toDateString();
  return (
    <tr className='group border-b-2 border-slate-100 transition-all hover:bg-slate-50'>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{expenseName}</td>
      <td className={`text-nowrap p-4 font-mono text-sm text-end`}><span className={`px-2 py-1 rounded ${amountColor} transition-all`}>{`${sign} ${amount}`}</span></td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{currency}</td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{date}</td>
      <td className='text-nowrap p-4 text-sm text-slate-600'><span className={`px-2 py-1 rounded bg-slate-100 group-hover:bg-slate-200 transition-all`}>{category}</span></td>
      <td className='text-nowrap p-4 text-sm text-slate-600'>{paymentMethod}</td>
    </tr>
  )
}

export default TransactionItem