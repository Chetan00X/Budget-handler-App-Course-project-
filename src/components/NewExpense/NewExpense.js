import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm.js";
const NewExpense = (props) => {
  const [isFormVissible, setIsVissibleForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const displayFormHandler = () => {
    setIsVissibleForm(true);
  };
  const cancelHandler = () => {
    setIsVissibleForm(false);
  };

  return (
    <div className="new-expense">
      {!isFormVissible && (
        <button onClick={displayFormHandler}>Add New Expenses</button>
      )}
      {isFormVissible && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
