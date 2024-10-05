'use client'

import Link from "next/link";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { TbInfoSquare } from "react-icons/tb";

function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <button className="flex justify-center items-center text-rose-300 hover:text-rose-400" onClick={() => setShowMenu(p => !p)}>
        <CgMenuGridO size={30}/>
      </button>
      {
        showMenu && (
          <menu className="flex flex-col rounded-xl absolute text-slate-500 right-0 gap-2 items-center bg-white p-2 border-2 border-slate-50 z-50 shadow-xl">
            <Link className="text-sm hover:bg-slate-100 px-2 py-2 rounded-md w-full text-nowrap" href="/login" onClick={() => setShowMenu(p => !p)}>
              <div className="flex gap-2 items-center">
                <BiLogIn size={17}/>
                <p>Login</p>  
              </div>
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-2 py-2 rounded-md w-full text-nowrap" href="/profile" onClick={() => setShowMenu(p => !p)}>
              <div className="flex gap-2 items-center">
                <CgProfile size={17}/>
                <p>My Profile</p>  
              </div>
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-2 py-2 rounded-md w-full text-nowrap" href="/dashboard" onClick={() => setShowMenu(p => !p)}>
              <div className="flex gap-2 items-center">
                <LuLayoutDashboard size={17}/>
                <p>Dashboard</p>  
              </div>
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-2 py-2 rounded-md w-full text-nowrap" href="/all-transactions" onClick={() => setShowMenu(p => !p)}>
              <div className="flex gap-2 items-center">
                <GrTransaction size={17}/>
                <p>Transactions</p>  
              </div>
            </Link>
            <Link className="text-sm hover:bg-slate-100 px-2 py-2 rounded-md w-full text-nowrap" href="/about" onClick={() => setShowMenu(p => !p)}>
              <div className="flex gap-2 items-center">
                <TbInfoSquare size={17}/>
                <p>About</p>  
              </div>
            </Link>
          </menu>
        )
      }
    </div>
  );
}

export default HeaderMenu;
