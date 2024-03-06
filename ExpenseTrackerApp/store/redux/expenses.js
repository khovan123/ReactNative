import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2024-03-04"),
      },
      {
        id: "e2",
        description: "A pair of trousers",
        amount: 68.89,
        date: new Date("2024-03-01"),
      },
      {
        id: "e3",
        description: "Some bananas",
        amount: 5.32,
        date: new Date("2024-02-27"),
      },
      {
        id: "e4",
        description: "Two books",
        amount: 15.54,
        date: new Date("2024-02-23"),
      },
      {
        id: "e5",
        description: "Some pens",
        amount: 2.28,
        date: new Date("2024-02-25"),
      },
      {
        id: "e6",
        description: "5 kg meat",
        amount: 44.45,
        date: new Date("2024-02-25"),
      },
      {
        id: "e7",
        description: "Porsche Car",
        amount: 607.5,
        date: new Date("2024-02-25"),
      },
      {
        id: "e8",
        description: "Some orange",
        amount: 8.3,
        date: new Date("2024-02-25"),
      },
      {
        id: "e9",
        description: "Some ducks",
        amount: 74.89,
        date: new Date("2024-02-25"),
      },
      {
        id: "e10",
        description: "Legion 5 Laptop",
        amount: 175.3,
        date: new Date("2024-02-25"),
      },
    ],
  },
  reducers: {
    updateExpense: (state, action) => {
      const indexOfUpdateExpense = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.expenses[indexOfUpdateExpense] = {
        ...state.expenses[indexOfUpdateExpense],
        id: action.payload.id,
        description: action.payload.description,
        amount: action.payload.amount,
        date: new Date(action.payload.date),
      };
    },
    deleteExpense: (state, action) => {
      state.expenses.splice(
        state.expenses.findIndex((expense) => expense.id === action.payload.id),
        1
      );
    },
    addExpense: (state, action) =>
      state.expenses.push({
        id: new Date().toString() + Math.random().toString,
        ...action.payload,
      }),
  },
});

export const updateExpense = expensesSlice.actions.updateExpense;
export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export default expensesSlice.reducer;
