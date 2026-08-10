import { axiosIntance } from "../../../config/axiosInstance";

export const getAllProductsApi = async (search) => {
  let url = search ? `/products/search?q=${search}` : "/products";
  let response = await axiosIntance.get(url);
  // console.log("response from product api..", response);
  return response.data;
};

export const getProductCategoriesApi = async () => {
  let response = await axiosIntance.get("/products/categories");
  // console.log(response);
  return response.data;
};
