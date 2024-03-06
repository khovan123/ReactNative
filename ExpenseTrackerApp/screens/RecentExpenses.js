import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpeneseOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
function RecentExpense() {
  const expenses = useSelector((state) => state.expensesTracker.expenses);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPriodName="Last 7 Days"
      fallbackText="No registered expenses found!"
    />
  );
}
export default RecentExpense;
const styles = StyleSheet.create({});
