import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";

export const store = configureStore({
  reducer: {
    expensesTracker: expensesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
