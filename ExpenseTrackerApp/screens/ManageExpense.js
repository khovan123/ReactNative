import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
function ManageExpense({ route, navigation }) {
  const editedExpenseID = route.params?.expenseId;
  const isEditting = !!editedExpenseID;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Editting Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

  function deleteExpenseHandler() {}
  return (
    <View style={styles.container}>
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
