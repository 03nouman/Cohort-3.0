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

  if (isPending)
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-950">
        <p className="text-sm font-medium text-gray-400">Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-950">
        <p className="text-sm font-medium text-red-500">Something went wrong</p>
      </div>
    );

  return (
    <div className="flex h-[calc(100vh-4rem)] min-h-0 flex-col gap-1 overflow-hidden bg-gray-950">
      {/* Filters */}
      <div className="shrink-0">
        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Product Section */}
      <section className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
        {/* Section Header */}
        <div className="z-20 flex shrink-0 items-center justify-between border-b border-gray-800 bg-gray-900/95 px-4 py-3 backdrop-blur-sm sm:px-5">
          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Products
            </h2>

            <p className="text-xs text-gray-500">
              Discover something you'll love
            </p>
          </div>

          <div className="rounded-full border border-gray-700 bg-gray-950 px-3 py-1 text-xs text-gray-400">
            {category ? category : "All Products"}
          </div>
        </div>

        {/* Scrollable Product Display */}
        <div
          // style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
          className="custom-scrollbar min-h-0 flex-1 overflow-y-auto p-4 sm:p-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </div>

        {/* Floating Load More */}
        {hasNextPage && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 flex justify-center bg-gradient-to from-gray-900 via-gray-900/95 to-transparent px-4 pb-4 pt-10">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="pointer-events-auto flex min-w-32 items-center justify-center gap-2 rounded-lg border border-gray-700 bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isFetchingNextPage ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </section>

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
