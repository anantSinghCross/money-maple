'use server'

import { addDoc, collection } from "@firebase/firestore";
import { db } from "./firebase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addExpense(formData){
  const transactionDetails = {
    expenseName: formData.get('expenseName'),
    currency: formData.get('currency'),
    amount: formData.get('amount'),
    type: formData.get('type'),
    dot: formData.get('dot'),
    category: formData.get('category'),
    description: formData.get('description'),
    paymentMethod: formData.get('payment-method')
  };

  const transactionCollection = collection(db, 'transactions');
  await addDoc(transactionCollection, transactionDetails);
  revalidatePath('/', 'layout');
  redirect('/all-transactions')
  return {
    message: 'Transaction successfully added'
  }
}