import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const AllExpense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const storeYear = (selectedYear) => {
    setSelectedYear(setSelectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelectedYear={storeYear} />

     {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
      </Card>
    </div>
  );
};
export default AllExpense;
