import { useQuery } from "@tanstack/react-query";
import { getAllProductApi } from "../api/productApi";

export const useAllProduct = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductApi,
  });
  console.log("products data", data);

  return (data, isPending, error);
};
