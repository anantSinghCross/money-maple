import AllTransactions from '@/components/transactions/AllTransactions';
import { db } from '@/firebase'
import { COLLECTIONS } from '@/lib/config';
import { collection, getDocs, query, where } from '@firebase/firestore'
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

async function AllTransactionsPage() {
  const token = cookies().get('token');
  if(!token){
    redirect('/login');
  }
  let {email, userId} = verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET);
  const userq = query(collection(db, COLLECTIONS.USERS), where('email', '==', email));
  const userSnapshot = await getDocs(userq);
  const users = [];
  userSnapshot.forEach(user => {
    users.push({
      id: user.id,
      ...user.data()
    })
  })
  if(users.length ===0){
    throw new Error('User not found');
  }

  const userRequired = users[0];
  let q = query(collection(db, COLLECTIONS.TRANSACTIONS), where('uid', '==', userRequired.id));
  
  const transactionSnapshot = await getDocs(q);
  const transactions = [];
  transactionSnapshot.forEach(doc => {
    transactions.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return (
    <AllTransactions transactions={transactions} />
  )
}

export default AllTransactionsPage