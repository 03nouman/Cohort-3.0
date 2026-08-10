import { axiosIntance } from "../../../config/axiosInstance";

export const getAllProductApi = async () => {
  console.log("api calling...");

  try {
    let res = await axiosInstance.get("/products");
    console.log("response", res);

    return res.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
