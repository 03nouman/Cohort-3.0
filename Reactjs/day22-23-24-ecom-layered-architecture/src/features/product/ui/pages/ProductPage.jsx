import React, { useEffect } from "react";
import { axiosIntance } from "../../../../config/axiosInstance";
import { getAllProductsApi } from "../../api/productApi";
import {
  useAllProduct,
  useAllProductByCategory,
} from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilter";
import Pagination from "../components/Pagination";

const ProductPage = () => {
  let {
    // data,
    allProducts,
    isPending,
    error,
    search,
    setSearch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    // isPlaceholderData,
    // page,
    // setPage,
    // totalPages,
  } = useAllProduct();

  let {
    data: productByCategory,
    category,
    setCategory,
  } = useAllProductByCategory();

  if (isPending) return <h1>Loading product...</h1>;
  if (error) return "Something went wrong";

  return (
    <div className="flex flex-col gap-4">
      <div>
        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div
        // style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {productByCategory?.products.length
          ? allProducts &&
            productByCategory?.products?.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))
          : allProducts &&
            allProducts?.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
      </div>
      <div className="flex justify-center items-center">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="text-2xl text-red-600 font-medium cursor-pointer"
          >
            {isFetchingNextPage ? "Loading" : " Load more..."}
          </button>
        )}
      </div>
      {/* <Pagination
        currentPage={page}
        totalPages={data.totalPages}
        onPrevious={() => setPage((prev) => prev - 1)}
        onNext={() => setPage((prev) => prev + 1)}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default ProductPage;
