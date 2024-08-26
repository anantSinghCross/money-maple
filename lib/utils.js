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
  EXPENSE: 'expense',
  INCOME: 'income'
}

export function getTotalExpense(transactions){
  const totalExpense = transactions.reduce((accum, trxn) => {
    if(trxn.type === TRANSACTION.EXPENSE){
      accum += +trxn.amount;
    }
    return accum;
  }, 0);
  return totalExpense;
}

export function getTotalIncome(transactions){
  const totalExpense = transactions.reduce((accum, trxn) => {
    if(trxn.type === TRANSACTION.INCOME){
      accum += +trxn.amount;
    }
    return accum;
  }, 0);
  return totalExpense;
}

export function getAllTransactionCategories(transactions){
  return transactions.reduce((accum, trxn) => {
    if(!accum.find(item => item === trxn.category)){
      accum.push(trxn.category);
    }
    return accum;
  }, [])
}