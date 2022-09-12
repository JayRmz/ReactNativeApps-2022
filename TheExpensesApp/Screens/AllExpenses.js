import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutpout from "../Components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses(props) {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutpout
      expenses={expensesCtx.expenses}
      periodName="Total"
      fallbackText="No Expenses added"
    />
  );
}
