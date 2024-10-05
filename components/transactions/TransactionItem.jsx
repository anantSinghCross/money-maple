"use client";
import React from "react";
import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { deleteExpense } from "@/server-actions";

function TransactionItem({ transaction }) {
  const router = useRouter();
  let { expenseName, amount, currency, dot, category, paymentMethod, type } = transaction;
  if (expenseName === "" || expenseName === null || expenseName === undefined) {
    expenseName = "Unknown";
  }
  const amountColor =
    type === "expense"
      ? "text-rose-600 bg-rose-50 group-hover:bg-rose-100"
      : "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100";
  const sign = type === "expense" ? "-" : "+";
  const date = new Date(dot).toDateString();
  const paymentMethodString = paymentMethod.split('-').map(item => {return `${item[0].toUpperCase()}${item.slice(1)}`}).join(' ')

  return (
    <tr className="group border-b-2 border-slate-100 transition-all hover:bg-slate-50">
      <td className="text-nowrap p-4 text-sm text-slate-600">{expenseName}</td>
      <td className={`text-nowrap p-4 font-mono text-sm text-end`}>
        <span
          className={`px-2 py-1 rounded ${amountColor} transition-all`}
        >{`${sign} ${amount}`}</span>
      </td>
      <td className="text-nowrap p-4 text-sm text-slate-600">{currency}</td>
      <td className="text-nowrap p-4 text-sm text-slate-600">{date}</td>
      <td className="text-nowrap p-4 text-sm text-slate-600">
        <span
          className={`px-2 py-1 rounded bg-slate-100 group-hover:bg-slate-200 transition-all`}
        >{`${category[0].toUpperCase()}${category.slice(1)}`}</span>
      </td>
      <td className="text-nowrap p-4 text-sm text-slate-600">{paymentMethodString}</td>
      <td className="text-center">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-1 hover:bg-blue-100 hover:text-blue-500 rounded text-blue-400 border-2 border-transparent hover:border-white"
            onClick={() => {
              router.push(`/edit?trxnId=${transaction.id}`);
            }}
          >
            <RiEditLine size={17} />
          </button>
          <button
            className="p-1 hover:bg-red-100 hover:text-red-500 rounded text-rose-400 border-2 border-transparent hover:border-white"
            onClick={async () => {
              await deleteExpense(transaction.id);
              router.refresh();
            }}
          >
            <MdDeleteOutline size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TransactionItem;
