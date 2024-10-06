import React from 'react'
import TransactionItem from './TransactionItem'
import { applySorting } from '../../lib/utils'

function TransactionTable({ transactions, numberOfRecords }) {
  const sortedTransactions = applySorting(transactions);
  return (
    <>
    {
      (!sortedTransactions || sortedTransactions.length===0) ? (
        <div className='bg-slate-50 p-1 px-2 rounded-md text-sm text-slate-400'>
          No transactions to show. Try changing your filter.
        </div>
      ) : (
        <div className=' overflow-x-auto mt-3'>
          <table className='rounded-t-lg border border-slate-100 overflow-clip bg-white w-full'>
            <thead>
            <tr className=" bg-slate-100 text-slate-600 ">
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">Name</th>
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">Amount</th>
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">Currency</th>
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">DoT</th>
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">Category</th>
              <th className="text-nowrap border-r-2 border-white p-3 text-sm">Payment Method</th>
              <th className="text-nowrap  border-white p-3 text-sm">Actions</th>
            </tr>
            </thead>
            <tbody>
              {
                sortedTransactions.map((item, i) => {
                  if((numberOfRecords && i<numberOfRecords) || !numberOfRecords){
                    return <TransactionItem key={item.id} transaction={item} />
                  }
                })
              }
            </tbody>
          </table>
        </div>
      )
    }
    </>
  )
}

export default TransactionTable