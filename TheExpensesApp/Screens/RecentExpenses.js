import { useContext, useEffect, useState } from "react";
import ExpensesOutpout from "../Components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../Components/UI/ErrorOverlay";
import LoadingOverlay from "../Components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState(false);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);

      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutpout
      expenses={recentExpenses}
      periodName="Last 7 Days"
      fallbackText="No expenses in the last 7 days"
    />
  );
}
