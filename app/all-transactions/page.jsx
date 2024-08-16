import TransactionTable from '@/components/transactions/TransactionTable';
import { db } from '@/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'
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

  return (
    <section className='flex flex-col items-center'>
      <h3 className='p-2'>Transaction History</h3>
      <TransactionTable transactions={transactions}/>
    </section>
  )
}

export default AllTransactionsPage