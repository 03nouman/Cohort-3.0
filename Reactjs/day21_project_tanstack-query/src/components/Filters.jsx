import React from "react";
import { useProductApi, useProducts } from "../hooks/productHooks";

const Filters = ({ filterProducts }) => {
  return (
    <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <div className="flex items-end gap-4">
        {/* Search */}
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Search Product
          </label>

          <div className="flex gap-3">
            <input
              onChange={(e) => filterProducts(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-500"
            />

            <button className="rounded-lg bg-yellow-500 px-6 py-3 font-medium text-white transition hover:bg-yellow-600">
              Search
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="w-64">
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Category
          </label>

          <select className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-500">
            <option>All Categories</option>
            <option>Groceries</option>
            <option>Beauty</option>
            <option>Furniture</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
