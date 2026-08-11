import { axiosIntance } from "../../../config/axiosInstance";

// api call for allproducts,search-query and pagination
// export const getAllProductsApi = async (search, page = 1) => {
//   let url = search
//     ? `/products/search?q=${search}`
//     : `/products?limit=${10}&skip=${page * 10}`;
//   let response = await axiosIntance.get(url);
//   // console.log("response from product api..", response?.data?.products);
//   return response.data;
// };

// -------->APi call for allproducts,search-query and infinite scroll
export const getAllProductsApi = async (search, pageParams, limit) => {
  console.log("page-parm--->", pageParams);

  let url = search
    ? `/products/search?q=${search}`
    : `/products?limit=${limit}&skip=${pageParams}`;
  let response = await axiosIntance.get(url);
  // console.log("response from product api..", response?.data?.products);
  return response.data;
};

export const getProductCategoriesApi = async () => {
  let response = await axiosIntance.get("/products/categories");
  // console.log(response);
  return response.data;
};

export const getAllProductByCategory = async (category) => {
  let response = await axiosIntance.get(`/products/category/${category}`);
  return response.data;
};
