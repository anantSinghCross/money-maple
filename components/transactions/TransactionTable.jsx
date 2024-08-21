import React from 'react'
import TransactionItem from './TransactionItem'

function TransactionTable({ transactions }) {
  return (
    <div>
      <table className='m-5 rounded-md border border-slate-100 overflow-clip bg-white'>
        <thead>
        <tr class=" bg-slate-100 text-slate-600 border-2 border-slate-100">
          <th class="text-nowrap border-r-2 border-white p-3 px-4 text-sm">Name</th>
          <th class="text-nowrap border-r-2 border-white p-3 px-4 text-sm">Amount</th>
          <th class="text-nowrap border-r-2 border-white p-3 px-4 text-sm">Currency</th>
          <th class="text-nowrap border-r-2 border-white p-3 px-4 text-sm">DoT</th>
          <th class="text-nowrap border-r-2 border-white p-3 px-4 text-sm">Category</th>
          <th class="text-nowrap  border-white p-3 px-4 text-sm">Payment Method</th>
        </tr>
        </thead>
        <tbody>
          {
            transactions.map(item => <TransactionItem key={item.id} transaction={item} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable