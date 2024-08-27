import AllTransactions from '@/components/transactions/AllTransactions';
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

  return (
    <AllTransactions transactions={transactions} />
  )
}

export default AllTransactionsPage