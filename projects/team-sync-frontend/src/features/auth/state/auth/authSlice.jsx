import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeEmployee: (state, action) => {
      state.employee = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
