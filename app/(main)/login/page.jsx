'use client'

import Button from "@/components/ui/Button";
import { useFormState } from "react-dom";
import { loginUser } from "@/lib/server-actions";
import React from "react";
import Alert from "@/components/ui/Alert";
import Link from "next/link";

function LoginPage() {
  const [state, loginUserAction] = useFormState(loginUser, null);
  return (
    <section>
      <form action={loginUserAction} className="flex justify-center items-center w-full">
        <div className="rounded-2xl p-5 shadow-xl shadow-slate-200 bg-white w-full mx-5 max-w-md">
          <h3 className="p-5 text-lg font-semibold text-center text-rose-400">Login</h3>

          {
            state?.error && (
              <Alert variant="error">{state.error}</Alert>
            )
          }

          <div className="flex flex-col mb-2">
            <label className="text-sm py-1 text-slate-600" htmlFor="email">Email</label>
            <input name="email" className=" p-2 rounded border outline-rose-400 shadow-inner" type="text" id="email" />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-sm py-1 text-slate-600"  htmlFor="pwd">Password</label>
            <input name="password" className=" p-2 rounded border outline-rose-400 shadow-inner" type="password" id="pwd" />
          </div>

          <div className="flex gap-2 items-center py-2 justify-between">
            <Link className="text-sm font-semibold hover:underline text-rose-500" href='/signup'>Signup</Link>
            <Button className='mt-2' pendingLabel="Logging in">Login</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
