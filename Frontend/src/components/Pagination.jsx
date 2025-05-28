import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex flex-wrap gap-2">
      <button
        className="px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded border text-sm sm:text-base ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
