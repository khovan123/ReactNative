import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";

const store = configureStore({
  expensesTracker: expensesReducer,
});
