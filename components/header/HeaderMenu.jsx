'use client'

import Link from "next/link";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <button className="flex justify-center items-center text-rose-300 hover:text-rose-400" onClick={() => setShowMenu(p => !p)}>
        <CgMenuGridO size={30}/>
      </button>
      {
        showMenu && (
          <menu className="flex flex-col rounded-lg absolute right-0 gap-2 items-center bg-white p-2 border z-50">
            <Link className="text-sm hover:bg-slate-100 px-4 py-2 rounded-md w-full text-nowrap" href="/login" onClick={() => setShowMenu(p => !p)}>
              Login
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-4 py-2 rounded-md w-full text-nowrap" href="/dashboard" onClick={() => setShowMenu(p => !p)}>
              Dashboard
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-4 py-2 rounded-md w-full text-nowrap" href="/all-transactions" onClick={() => setShowMenu(p => !p)}>
              All Transactions
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-4 py-2 rounded-md w-full text-nowrap" href="/about" onClick={() => setShowMenu(p => !p)}>
              About
            </Link>
          </menu>
        )
      }
    </div>
  );
}

export default HeaderMenu;
