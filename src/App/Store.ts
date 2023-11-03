import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/Todos/todoSlice";
export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});
