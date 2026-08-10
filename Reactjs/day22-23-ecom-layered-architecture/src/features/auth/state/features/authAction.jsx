import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosIntance } from "../../../../config/axiosInstance";

export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await axiosIntance.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("login successfull");
      return res.data;
    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkAPi) => {
    let token = localStorage.getItem("accessToken");
    try {
      //   console.log("hydrateuseraction triggered");

      let res = await axiosIntance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log("response from hydration api", res);
      return res.data;
    } catch (error) {
      toast.error("unAuthorised user please login");
      return thunkApi.rejectWithValue("unAuthorised user please login");
    }
  },
);
