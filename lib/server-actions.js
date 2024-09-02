'use server'

import { addDoc, collection, getDocs, query, setDoc, where } from "@firebase/firestore";
import { COLLECTIONS } from "./config";
import { db } from "@/firebase";
import { hash } from "bcrypt";
import { areValidCreds } from "./utils";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function registerUser(prevState, formData){
  // console.log('1', prevState);
  // console.log('2', formData);

  const email = formData.get('email')
  const password = formData.get('password')
  const firstName = formData.get('first-name')
  const lastName = formData.get('last-name')
  const creds = {
    firstName,
    lastName,
    email,
    password
  }
  if(!areValidCreds(creds)){
    return {
      error: 'There was some problem creating your account.'
    }
  } else {
    //find whether the email is already registered
    const userCollection = collection(db, COLLECTIONS.USERS);
    const q = query(userCollection, where('email', '==', email));
    const userSnapshot = await getDocs(q);
    const users = []
    userSnapshot.forEach((item) => {users.push({})})
    console.log(users);
    if(users.length > 0){
      return {
        error: 'Email is already registered.'
      }
    }
    //create a user
    const hashedPassword = await hash(password, 10);
    const userRef = await addDoc(userCollection, {
      username: email.split('@')[0],
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    //generate a jwt
    const token = sign({
      email,
      userId: userRef.id
    }, process.env.NEXT_PUBLIC_JWT_SECRET);
    
    //set jwt as a cookie
    cookies().set({
      name: 'token',
      value: token
    })
  }
}