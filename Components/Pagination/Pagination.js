import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div aria-label="Page navigation example">
      <ul className="flex text-base justify-center">
        <li className="p-2 md:px-4 rounded-s-lg border border-gray-300 bg-gray-800">
          <button
            className="leading-tight text-gray-200"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li
              key={page}
              className={`border-2 border-s-0 text-center flex items-center px-4 cursor-pointer ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </li>
          );
        })}

        <li className="p-2 md:px-4 border rounded-e-lg border-gray-300 bg-gray-800">
          <button
            className="leading-tight text-gray-200"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
