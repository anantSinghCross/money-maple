import Dashboard from '@/components/Dashboard'
import { db } from '@/firebase'
import { COLLECTIONS } from '@/lib/config'
import { collection, getDocs, query } from '@firebase/firestore'
import React from 'react'

async function DashboardPage() {
  const q = query(collection(db, COLLECTIONS.TRANSACTIONS))
  const transactionSnapshot = await getDocs(q);
  const transactions = [];
  transactionSnapshot.forEach(doc => {
    transactions.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return (
    <section className='p-5'>
      <Dashboard transactions={transactions}/>
    </section>
  )
}

export default DashboardPage