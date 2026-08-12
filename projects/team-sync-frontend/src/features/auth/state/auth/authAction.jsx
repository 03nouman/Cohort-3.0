import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    let response = await axiosInstance.post("/auth/login", credentials);
    console.log("response", response);
    return response.data;

    try {
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
