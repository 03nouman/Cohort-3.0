import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { useAllCategories } from "../../hooks/useProductHook";

const ProductFilters = ({ search, setSearch }) => {
  let { data, isPending, eror } = useAllCategories();

  if (isPending) return <h1>loading categories</h1>;
  return (
    <div className="mb-6 rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Search Section */}
        <div className="flex flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="h-11 w-full rounded-lg border border-gray-700 bg-gray-950 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>

          <button
            type="button"
            className="ml-2 h-11 rounded-lg bg-red-600 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Search
          </button>
        </div>

        {/* Category Section */}
        <div className="relative w-full md:w-56">
          <select
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
            className="h-11 w-full cursor-pointer appearance-none rounded-lg border border-gray-700 bg-gray-950 px-4 pr-10 text-sm text-gray-300 outline-none transition-all duration-200 focus:border-red-600 focus:ring-1 focus:ring-red-600"
          >
            <option value="">All Categories</option>

            {data &&
              data.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>

          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
