import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    updateExpense: (state, action) => {
      const indexOfCurrentExpense = state.expenses.indexOf(
        (expense) => (expense.id = action.payload.expense.id)
      );
      state.expenses[indexOfCurrentExpense] = {
        id: action.payload.expense.id,
        description: action.payload.description,
        amount: action.payload.action,
      };
    },
    deleteExpense: (state, action) => {
      state.expenses.filter((expense) => expense.id !== action.payload.id);
    },
    addExpense: (state, action) => state.expenses.push(action.payload.expense),
  },
});

export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
