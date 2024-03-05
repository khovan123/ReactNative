import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EXPENSES } from "../data/DUMMY_EXPENSES";

function ExpensesOutput({ expenses, expensesPriodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPriodName}
      />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
