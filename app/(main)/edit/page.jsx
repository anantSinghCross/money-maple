import AddEditTransaction from '@/components/transactions/AddEditTransaction'
import { fetchTransaction } from '@/server-actions';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

const EditTransactionPage = async ({searchParams}) => {
  const token = cookies().get("token");
  if (!token) {
    redirect("/login");
  }
  let { userId } = verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET);
  
  // fetch the trxn details from the server action
  const trxnId = searchParams?.trxnId;
  if(!trxnId){
    throw new Error('Missing important search params')
  }

  const trxnData = await fetchTransaction(trxnId);

  return (
    <AddEditTransaction userId={userId} editProps={{...trxnData}} />
  )
}

export default EditTransactionPage