import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteExpense,
  updateExpense,
  addExpense,
} from "../store/redux/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
function ManageExpense({ route, navigation }) {
  const editedExpenseID = route.params?.expenseId;
  const isEditting = !!editedExpenseID;
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesTracker.expenses);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Editting Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

  function deleteExpenseHandler() {
    dispatch(deleteExpense({ id: editedExpenseID }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditting) {
      dispatch(
        updateExpense({
          id: editedExpenseID,
          description: "Test",
          amount: 33.3,
          date: "19-8-2023",
        })
      );
    } else {
      dispatch(
        addExpense({
          description: "Test",
          amount: 33.3,
          date: "19-8-2023",
        })
      );
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button mode={"flat"} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditting ? "Update" : "Add"}
        </Button>
      </View>
      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
