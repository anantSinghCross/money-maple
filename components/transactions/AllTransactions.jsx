"use client";

import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import { useFilters } from "@/lib/hooks";
import Button from "../ui/Button";
import { LuListFilter } from "react-icons/lu";
import { applyFilters, getAllTransactionCategories } from "@/lib/utils";

function AllTransactions({ transactions }) {
  const allCategories = getAllTransactionCategories(transactions);
  const [openFilters, setOpenFilters] = useState(false);
  const {
    minDate,
    maxDate,
    activeCategories,
    transactionTypes,
    setTransactionTypes,
    setMinDate,
    setMaxDate,
    setActiveCategories,
  } = useFilters(transactions);
  console.log(minDate, maxDate, activeCategories, transactionTypes);

  const isTypeChecked = (type) => {
    return transactionTypes.includes(type);
  };

  const toggleType = (type) => {
    setTransactionTypes((p) => {
      let n = [...p];
      if (!p.includes(type)) {
        n.push(type);
      } else {
        n = p.filter((item) => item != type);
      }
      return n;
    });
  };

  const toggleActiveCategories = (e) => {
    let selectedCategories = [];
    const options = e.target.options;
    for (let category of options) {
      if (category.selected) {
        selectedCategories.push(category.value);
      }
    }
    setActiveCategories(selectedCategories);
  };

  const filteredTransactions = applyFilters(
    transactions,
    minDate,
    maxDate,
    transactionTypes,
    activeCategories
  );
  let fromDate = new Date(minDate).toDateString().split(" ").slice(1).join(" ");
  let tillDate = new Date(maxDate).toDateString().split(" ").slice(1).join(" ");
  return (
    <section className="flex flex-col m-5 my-10 mb-28 p-5 rounded-2xl bg-white shadow-xl shadow-slate-200">
      <Button className="fixed bottom-5 right-5 shadow-lg">Add Expense</Button>
      <div className="flex justify-between items-center">
        <span className="flex gap-4 items-baseline">
          <h3 className="my-3 w-full font-semibold text-xl text-slate-500">Transaction History</h3>
          <span className="text-sm sm:text-nowrap text-slate-400">
            Showing records from <span className="bg-slate-100 px-2 py-1 rounded text-slate-500 text-xs">{fromDate}</span> till <span className="bg-slate-100 px-2 py-1 rounded text-slate-500 text-xs">{tillDate}</span>
          </span>
        </span>

        <div className="relative">
          <Button variant="secondary" onClick={() => setOpenFilters((p) => !p)}>
            <span className="flex gap-2 items-center">
              <LuListFilter />
              Filters
            </span>
          </Button>
          {openFilters && (
            <div className="absolute flex flex-col divide-y bg-white rounded-xl shadow-lg m-2 p-5 right-0 text-sm text-slate-600">
              <div className="flex flex-col mb-2">
                <h5 className=" font-bold text-xs text-slate-400 py-3">TYPE</h5>

                <span className="flex gap-2 pb-1 items-center">
                  <input
                    className="w-4 h-4 accent-rose-500"
                    id="type_income"
                    type="checkbox"
                    name="type"
                    value="income"
                    checked={isTypeChecked("income")}
                    onChange={() => toggleType("income")}
                  />
                  <label htmlFor="type_income">Income</label>
                </span>

                <span className="flex gap-2 pb-1 items-center">
                  <input
                    className="w-4 h-4 accent-rose-500"
                    id="type_expense"
                    type="checkbox"
                    name="type"
                    value="expense"
                    checked={isTypeChecked("expense")}
                    onChange={() => toggleType("expense")}
                  />
                  <label htmlFor="type_expense">Expense</label>
                </span>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center text-xs">
                  <h5 className=" font-bold text-xs text-slate-400 py-3">CATEGORIES</h5>
                  {activeCategories && activeCategories.length > 0 && (
                    <span className=" px-2 py-1 bg-rose-50 rounded text-rose-500">
                      {activeCategories.length}
                    </span>
                  )}
                </div>
                <select
                  className="outline-rose-300 rounded w-full overflow-auto text-xs text-slate-700"
                  name="category"
                  id="category"
                  onChange={toggleActiveCategories}
                  multiple
                >
                  {allCategories &&
                    allCategories.length > 0 &&
                    allCategories.map((item) => (
                      <option
                        key={item}
                        className="p-2 m-1 rounded-md accent-rose-500 border"
                        value={item}
                        selected={activeCategories.includes(item)}
                      >
                        {`${item[0].toUpperCase()}${item.slice(1)}`}
                      </option>
                    ))}
                </select>
              </div>

              <div className="py-2 flex flex-col gap-1">
                <h5 className=" font-bold text-xs text-slate-400 py-3">DURATION</h5>

                <span className="pb-1 flex flex-col">
                  <label className=" text-xs" htmlFor="min_date">
                    From
                  </label>
                  <input
                    className="p-1 rounded bg-slate-100"
                    id="min_date"
                    type="date"
                    name="type"
                    defaultValue={minDate}
                    onChange={(e) => setMinDate(e.target.value)}
                  />
                </span>

                <span className="pb-1 flex flex-col">
                  <label className=" text-xs" htmlFor="max_date">
                    Till
                  </label>
                  <input
                    className="p-1 rounded bg-slate-100"
                    id="max_date"
                    type="date"
                    name="type"
                    defaultValue={maxDate}
                    onChange={(e) => setMaxDate(e.target.value)}
                  />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <TransactionTable transactions={filteredTransactions} />
    </section>
  );
}

export default AllTransactions;
