import React, { useState } from "react";
import "./expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const AllExpense = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");
  const storeYear = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onSelectedYear={storeYear} />
          {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
          {/* alternative or clean method*/}
          {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          <ExpenseChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};
export default AllExpense;
