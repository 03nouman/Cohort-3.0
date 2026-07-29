import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const counterSlice = createSlice({
  name: "counter",
  //this is the state for holding data.
  initialState: {
    count: 0,
  },
  //here are the actions for updating states.
  reducers: {
    increment: (state, action) => {
      console.log("This is action: ", action);

      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

console.log("counter-slice: ", counterSlice);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
