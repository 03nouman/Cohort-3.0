import React from "react";

const ProductsCard = ({ product, onDelete }) => {
  return (
    <div className="group w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
            ★ 4.5
          </div>

          <span className="text-sm text-gray-500">(125 Reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${(product.price + 25).toFixed(2)}
          </span>

          <span className="text-sm font-semibold text-green-600">20% OFF</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 rounded-xl bg-yellow-400 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500">
            Add to Cart
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="rounded-xl border border-red-500 px-4 text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
