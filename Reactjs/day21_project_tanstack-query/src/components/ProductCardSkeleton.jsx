const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="flex h-60 items-center justify-center bg-zinc-800 p-6">
        <div className="h-44 w-40 rounded-lg bg-zinc-700"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-zinc-700"></div>
        <div className="h-5 w-1/2 rounded bg-zinc-700"></div>

        {/* Price & Quantity */}
        <div className="flex items-center justify-between">
          <div className="h-7 w-20 rounded bg-zinc-700"></div>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-zinc-700"></div>
            <div className="h-5 w-6 rounded bg-zinc-700"></div>
            <div className="h-8 w-8 rounded-md bg-zinc-700"></div>
          </div>
        </div>

        {/* Button */}
        <div className="h-12 w-full rounded-lg bg-zinc-700"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
