import "./NewExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      {/* Title */}
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
      {/* amount */}
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.1"step="0.01" />
        </div>
      </div>
      {/* Date */}
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31"step="0.01" />
        </div>
        <div className="name-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
      
    </form>
  );
};
export default ExpenseForm;
