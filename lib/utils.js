/* 
  {
    id: 'xaYoPhRxxancADVFSY0o',
    description: 'This is my rent transaction',
    type: 'expense',
    expenseName: 'Monthly Rent',
    currency: 'USD',
    category: 'rent',
    amount: '4500',
    paymentMethod: 'cash',
    dot: '2024-08-22'
  }

*/
export const TRANSACTION = {
  EXPENSE: "expense",
  INCOME: "income",
};

export function getTotalExpense(transactions) {
  const totalExpense = transactions.reduce((accum, trxn) => {
    if (trxn.type === TRANSACTION.EXPENSE) {
      accum += +trxn.amount;
    }
    return accum;
  }, 0);
  return totalExpense;
}

export function getTotalIncome(transactions) {
  const totalExpense = transactions.reduce((accum, trxn) => {
    if (trxn.type === TRANSACTION.INCOME) {
      accum += +trxn.amount;
    }
    return accum;
  }, 0);
  return totalExpense;
}

export function getAllTransactionCategories(transactions) {
  return transactions.reduce((accum, trxn) => {
    if (!accum.find((item) => item === trxn.category)) {
      accum.push(trxn.category);
    }
    return accum;
  }, []);
}

export function applyFilters(transactions, minDate, maxDate, transactionTypes, categories) {
  const filteredTransactions = transactions.filter((trxn) => {
    const dotObj = new Date(trxn.dot);
    const minDateObj = new Date(minDate);
    const maxDateObj = new Date(maxDate);
    return (
      dotObj - minDateObj >= 0 &&
      dotObj - maxDateObj <= 0 &&
      transactionTypes.includes(trxn.type) &&
      categories.includes(trxn.category)
    );
  });
  // default sorting on the basis of DoT
  return applySorting(filteredTransactions);
}

export function applySorting(transactions) {
  return [...transactions].sort((a, b) => {
    const aDot = new Date(a.dot);
    const bDot = new Date(b.dot);
    return aDot - bDot;
  })
}

export function areValidCreds(creds) {
  //email
  //paswword
  return true;
}

export function getDataFromQuerySnapshot(snapshot) {
  let result = [];
  snapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return result;
}

export function formatNumber(value) {
  
}
