import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const {
    title,
    thumbnail,
    category,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
  } = product;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-800">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
          -{discountPercentage.toFixed(0)}%
        </span>

        {/* Availability */}
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium ${
            availabilityStatus === "In Stock"
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {availabilityStatus}
        </span>
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-red-500">
          {category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-white">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-medium text-gray-300">{rating}</span>

          <span className="text-xs text-gray-500">/ 5</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            ${price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-500 line-through">
            ${(price / (1 - discountPercentage / 100)).toFixed(2)}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
