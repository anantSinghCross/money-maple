import TransactionTable from '@/components/transactions/TransactionTable';
import { db } from '@/firebase'
import { collection, getDocs, query } from '@firebase/firestore'
import React from 'react'

async function AllTransactionsPage() {
  const q = query(collection(db, 'transactions'))
  const snapshot = await getDocs(q);
  const transactions = [];
  snapshot.forEach(doc => {
    transactions.push({
      id: doc.id,
      ... doc.data()
    })
  })
  // TODO: extract a client component to use useFilters hook
  // const {minDate, maxDate, categories, transactionTypes} = useFilters(transactions);
  // console.log(minDate, maxDate, categories, transactionTypes);

  return (
    <section className='flex flex-col items-center m-5 my-10 p-5 rounded-xl bg-white shadow-xl shadow-slate-200'>
      <h3 className='my-4 w-full font-semibold text-xl text-slate-500'>Transaction History</h3>
      <TransactionTable transactions={transactions}/>
    </section>
  )
}

export default AllTransactionsPage