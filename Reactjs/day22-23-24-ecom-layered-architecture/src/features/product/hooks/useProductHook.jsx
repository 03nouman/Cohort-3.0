import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
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
  let limit = 40;

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [search]);

  // ---------> below block of code for fetching products,searching and pagination
  // let { data, isPending, error, isPlaceholderData } = useQuery({
  //   queryKey: ["products", debounceSearch, page],
  //   queryFn: () => getAllProductsApi(debounceSearch, page),
  //   placeholderData: keepPreviousData,
  // });
  // let totalPages = Math.ceil(data?.total / 10);

  // ---------> below block of code for fetching products,searching and infinite scroll

  let {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", debounceSearch],
    queryFn: ({ pageParam }) =>
      getAllProductsApi(debounceSearch, pageParam, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allpage) => {
      let loadedData = allpage.length * limit;

      if (loadedData < lastPage.total) {
        return loadedData;
      } else {
        return undefined;
      }
    },
  });

  let allProducts = data?.pages?.flatMap((val) => val?.products) ?? [];
  // console.log("allProducts", allProducts);

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
    fetchNextPage,
    allProducts,
    hasNextPage,
    isFetchingNextPage,
    // isPlaceholderData,
    // page,
    // setPage,
    // totalPages,
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
