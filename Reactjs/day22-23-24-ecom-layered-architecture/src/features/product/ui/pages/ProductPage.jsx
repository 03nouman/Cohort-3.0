import React, { useEffect } from "react";
import { axiosIntance } from "../../../../config/axiosInstance";
import { getAllProductsApi } from "../../api/productApi";
import { useAllProduct } from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilter";

const ProductPage = () => {
  let { data, isPending, error, search, setSearch } = useAllProduct();

  if (isPending) return <h1>Loading product...</h1>;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <ProductFilters search={search} setSearch={setSearch} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.products.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
