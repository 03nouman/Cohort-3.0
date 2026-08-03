import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import userReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userReducer,
  },
});
