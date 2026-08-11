import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="flex h-10 items-center gap-1 rounded-lg border border-gray-700 bg-gray-900 px-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-700 disabled:hover:bg-gray-900"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Current Page */}
      <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-red-600 px-3 text-sm font-semibold text-white shadow-sm">
        {`${currentPage} / ${totalPages}`}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex h-10 items-center gap-1 rounded-lg border border-gray-700 bg-gray-900 px-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-700 disabled:hover:bg-gray-900"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
