import { View, TextInput, StyleSheet } from "react-native";
import Input from "./Input";
function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;
