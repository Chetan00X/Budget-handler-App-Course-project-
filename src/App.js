import React, { useState } from "react";
import AllExpense from "./components/Expense/AllExpense";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //    {},
  //  React.createElement("h2", {},"Let's get started!"),
  //  React.createElement(AllExpense,{items: expenses})
  //   );
  // this is just  the syntactic sugar
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <AllExpense items={expenses} />
    </div>
  );
};
export default App;
