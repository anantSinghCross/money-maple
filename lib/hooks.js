import { useState } from "react";
import { getAllTransactionCategories, TRANSACTION } from "./utils";

export function useFilters(transactions){
  const [maxDate, setMaxDate] = useState(new Date().toJSON().split('T')[0]);
  const [minDate, setMinDate] = useState(() => {
    let dateArray = new Date().toJSON().split('T')[0].split('-');
    dateArray.pop();
    dateArray.push('01');
    return dateArray.join('-')
  });
  const [transactionTypes, setTransactionTypes] = useState([TRANSACTION.INCOME, TRANSACTION.EXPENSE]);
  const allCategories = getAllTransactionCategories(transactions);
  const [activeCategories, setActiveCategories] = useState(allCategories);

  return {
    maxDate,
    minDate,
    transactionTypes,
    activeCategories,

    setMinDate,
    setMaxDate,
    setTransactionTypes,
    setActiveCategories
  }
}