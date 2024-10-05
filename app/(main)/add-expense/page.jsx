import { verify } from "jsonwebtoken";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import AddEditTransaction from "@/components/transactions/AddEditTransaction";

export const metadata = {
  title: "Add Expense - Money Maple🍁",
  description: "Generated by create next app",
};

function AddExpensePage() {
  const token = cookies().get("token");
  if (!token) {
    redirect("/login");
  }

  let { userId } = verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET);

  return <AddEditTransaction userId={userId} />;
}

export default AddExpensePage;
