'use server'

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "@firebase/firestore";
import { db } from "./firebase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { COLLECTIONS } from "./lib/config";
import { getDataFromQuerySnapshot } from "./lib/utils";

export async function addExpense(uid, trxnId, formData){
  const transactionDetails = {
    expenseName: formData.get('expenseName'),
    currency: formData.get('currency'),
    amount: formData.get('amount'),
    type: formData.get('type'),
    dot: formData.get('dot'),
    category: formData.get('category'),
    description: formData.get('description'),
    paymentMethod: formData.get('payment-method'),
    uid
  };

  const transactionCollection = collection(db, COLLECTIONS.TRANSACTIONS);
  trxnId ? await setDoc(doc(db, COLLECTIONS.TRANSACTIONS, trxnId), transactionDetails) : await addDoc(transactionCollection, transactionDetails);
  revalidatePath('/', 'layout');
  redirect('/all-transactions');
}

export async function deleteExpense(trxnId){
  const token = cookies().get("token");
  if (!token) {
    redirect("/login");
  }
  let { email, userId } = verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET);
  let usersSnapshot = await getDocs(
    query(collection(db, COLLECTIONS.USERS), where("email", "==", email))
  );
  let users = getDataFromQuerySnapshot(usersSnapshot);
  if (users.length === 0) {
    throw new Error("User not found!");
  }
  const user = users[0];
  let transactionSnapshot = await getDoc(doc(db, COLLECTIONS.TRANSACTIONS, trxnId));
  let reqTransaction = {
    id: transactionSnapshot.id,
    ...transactionSnapshot.data()
  }
  if(reqTransaction.uid !== user.id){
    throw new Error("Transaction does not belong to the user or this transaction/user does not exist.");
  }
  return await deleteDoc(doc(db, COLLECTIONS.TRANSACTIONS, reqTransaction.id));
}

export async function fetchTransaction(trxnId){
  const tSnapshot = await getDoc(doc(db, COLLECTIONS.TRANSACTIONS, trxnId));
  if(!tSnapshot.exists()){
    return null;
  }
  return {
    id: tSnapshot.id,
    ...tSnapshot.data(),
  }
}