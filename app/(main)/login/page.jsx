import Header from "@/components/header";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="rounded-2xl p-5 shadow-xl shadow-slate-200 bg-white">
          <h3 className="p-5 text-lg font-semibold text-center text-rose-400">Login</h3>

          <div className="flex flex-col mb-2">
            <label className="text-sm py-1 text-slate-600" htmlFor="email">Email</label>
            <input className=" p-2 rounded border outline-rose-400 shadow-inner" type="text" id="email" />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-sm py-1 text-slate-600"  htmlFor="pwd">Password</label>
            <input className=" p-2 rounded border outline-rose-400 shadow-inner" type="password" id="pwd" />
          </div>

          <div className="flex gap-2 items-center py-2 justify-end">
            <Button className='mt-2'>Login</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
