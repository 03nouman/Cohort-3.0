import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "../api/productApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsApi,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  let filterProducts = (searchParam) => {
    let filteredData = data?.filter((product) =>
      product.title.toLowerCase().includes(searchParam.toLowerCase()),
    );

    if (filteredData) {
      setFilteredProducts(filteredData);
    }

    console.log(filteredData);
  };

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);
  return { data, isPending, error, filterProducts, filteredProducts };
};

export const useProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProducts = async () => {
    try {
      let response = await getAllProductsApi();
      setProductsData(response);
      setFilteredProducts(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  let filterProducts = (searchParam) => {
    let filteredData = productsData?.filter((product) =>
      product.title.toLowerCase().includes(searchParam.toLowerCase()),
    );
    if (filteredData) {
      console.log("entered in if block");
      setFilteredProducts(filteredData);
    }
    console.log("filteredProducts", filteredProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    productsData,
    filteredProducts,
    isLoading,
    getProducts,
    setFilteredProducts,
    filterProducts,
  };
};
