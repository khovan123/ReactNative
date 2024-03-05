import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpeneseOutput";

function RecentExpense() {
  return <ExpensesOutput expensesPriodName="Last 7 Days" />;
}
export default RecentExpense;
const styles = StyleSheet.create({});
