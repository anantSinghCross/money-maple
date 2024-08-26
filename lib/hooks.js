import { useState } from "react";
import { getAllTransactionCategories, TRANSACTION } from "./utils";

export function useFilters(transactions){
  const [maxDate, setMaxDate] = useState(new Date().toJSON().split('T')[0]);
  const [minDate, setMinDate] = useState(() => {
    const dateArray = new Date().toJSON().split('T')[0].split('-');
    dateArray.pop();
    dateArray.push('1');
    return dateArray.join('-')
  });
  const [transactionTypes, setTransactionTypes] = useState([TRANSACTION.INCOME, TRANSACTION.EXPENSE]);
  const [categories, setCategories] = useState(() => {
    return getAllTransactionCategories(transactions);
  });

  return {
    maxDate,
    minDate,
    transactionTypes,
    categories,

    setMinDate,
    setMaxDate,
    setTransactionTypes,
    setCategories
  }
}