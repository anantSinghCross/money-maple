import Header from "@/components/header";
import Button from "@/components/ui/Button";
import { addExpense } from "@/server-actions";
import { verify } from "jsonwebtoken";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

function AddExpensePage() {
  const token = cookies().get("token");
  if (!token) {
    redirect("/login");
  }

  let { userId } = verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET);

  return (
    <section>
      <form
        action={addExpense.bind(null, userId)}
        className="m-10 mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-xl shadow-slate-200"
      >
        <h2 className="mb-4 text-center text-lg font-semibold text-rose-400">
          Add New Transaction
        </h2>

        <div className="mb-4 w-full">
          <label htmlFor="expenseName" className="mb-2 block text-sm font-medium text-gray-500">
            Expense Name<span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            name="expenseName"
            placeholder="Petrol, Groceries, etc"
            className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <div className="mb-4 flex gap-2">
          <div className="">
            <label htmlFor="currency" className="mb-2 block text-sm font-medium text-gray-500">
              Currency<span className="text-orange-500">*</span>
            </label>
            <select
              name="currency"
              className="rounded-md border border-gray-300 p-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium text-gray-500">
              Amount<span className="text-orange-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-500">
            Date of Transaction<span className="text-orange-500">*</span>
          </label>
          <input
            type="date"
            name="dot"
            className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-500">
            Category<span className="text-orange-500">*</span>
          </label>
          <select
            name="category"
            className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-500">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-500">
            Type of Transaction<span className="text-orange-500">*</span>
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                defaultChecked
                type="radio"
                name="type"
                value="expense"
                className="form-radio text-rose-500 focus:ring-orange-500"
              />
              <span className="ml-2">Expense</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="income"
                className="form-radio text-rose-500 focus:ring-orange-500"
              />
              <span className="ml-2">Income</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="payment-method" className="mb-2 block text-sm font-medium text-gray-500">
            Payment Method<span className="text-orange-500">*</span>
          </label>
          <select
            name="payment-method"
            className="w-full rounded-md shadow-inner border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="cash">Cash</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="text-center">
          <Button className="w-full rounded-md shadow-inner bg-rose-400 px-2 py-2 font-semibold text-white hover:bg-rose-500 transition-all">
            Add Transaction
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddExpensePage;
