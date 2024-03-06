import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpeneseOutput";
import { useSelector } from "react-redux";
function AllExpenses() {
  const expenses = useSelector((state) => state.expensesTracker.expenses);
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPriodName="Total"
      fallbackText="No registered expenses found!"
    />
  );
}
export default AllExpenses;
const styles = StyleSheet.create({});
