import { useQuery } from "@tanstack/react-query";
import {
  getAllProductByCategory,
  getAllProductsApi,
  getProductCategoriesApi,
} from "../api/productApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [search]);

  let { data, isPending, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductsApi(debounceSearch),
  });
  // console.log("products data...", data);

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductCategoriesApi,
  });
};

export const useAllProductByCategory = () => {
  let [category, setCategory] = useState(null);
  console.log("category", category);

  let { data } = useQuery({
    queryKey: ["productByCategory", category],
    queryFn: () => getAllProductByCategory(category),
  });
  return {
    data,
    category,
    setCategory,
  };
};
