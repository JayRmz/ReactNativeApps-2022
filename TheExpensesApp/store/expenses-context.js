import { Children, createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-18"),
  },
  {
    id: "e2",
    description: "Another pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e3",
    description: "Xbox Controller",
    amount: 75.0,
    date: new Date("2022-09-11"),
  },
  {
    id: "e4",
    description: "Food",
    amount: 159.99,
    date: new Date("2022-09-10"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-18"),
  },
  {
    id: "e6",
    description: "Another pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e7",
    description: "Xbox Controller",
    amount: 75.0,
    date: new Date("2022-09-11"),
  },
  {
    id: "e8",
    description: "Food",
    amount: 159.99,
    date: new Date("2022-09-10"),
  },
  {
    id: "e9",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-18"),
  },
  {
    id: "e10",
    description: "Another pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e11",
    description: "Xbox Controller",
    amount: 75.0,
    date: new Date("2022-09-11"),
  },
  {
    id: "e12",
    description: "Food",
    amount: 159.99,
    date: new Date("2022-09-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
