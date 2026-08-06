import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { getAllProductsApi } from "../api/productApi";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useProductApi, useProducts } from "../hooks/productHooks";
import Filters from "../components/Filters";

const ShopPage = () => {
  console.log("shop page rendering...");

  let { filteredProducts, isLoading, filterProducts } = useProducts();

  console.log("filteredProducts", filteredProducts);

  return (
    <div>
      <div className="flex flex-col gap-8 min-h-screen bg-zinc-950 p-8">
        <Filters filterProducts={filterProducts} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : filteredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
