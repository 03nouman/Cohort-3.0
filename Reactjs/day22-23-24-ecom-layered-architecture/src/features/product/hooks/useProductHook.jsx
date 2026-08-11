import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getAllProductByCategory,
  getAllProductsApi,
  getProductCategoriesApi,
} from "../api/productApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [search]);

  let { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", debounceSearch, page],
    queryFn: () => getAllProductsApi(debounceSearch, page),
    placeholderData: keepPreviousData,
  });
  // console.log("products data...", data);
  let totalPages = Math.ceil(data?.total / 10);

  return {
    data,
    isPending,
    error,
    isPlaceholderData,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
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
