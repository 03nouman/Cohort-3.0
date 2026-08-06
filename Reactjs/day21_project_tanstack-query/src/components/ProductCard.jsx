const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
      {/* Product Image */}
      <div className="bg-zinc-800 p-6 flex items-center justify-center h-60">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-white line-clamp-2">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-400">
            ${product.price}
          </span>

          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded-md bg-zinc-800 text-white hover:bg-zinc-700">
              -
            </button>

            <span className="w-8 text-center text-white">1</span>

            <button className="h-8 w-8 rounded-md bg-zinc-800 text-white hover:bg-zinc-700">
              +
            </button>
          </div>
        </div>

        <button className="mt-5 w-full rounded-lg bg-cyan-500 py-3 font-medium text-white transition hover:bg-cyan-600 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
