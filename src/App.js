import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2020, 7, 20) },
  { id: 'e2', title: 'TV', amount: 430.00, date: new Date(2021, 7, 20) },
  { id: 'e3', title: 'Litter', amount: 14.00, date: new Date(2022, 7, 20) },
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2>Expenses!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
