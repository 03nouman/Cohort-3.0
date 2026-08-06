import { axiosInstance } from "../config/axiosInstance";

export const getAllProductsApi = async () => {
  console.log("api calling...");

  try {
    let res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
