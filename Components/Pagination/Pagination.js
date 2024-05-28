import React, { useState, useEffect } from "react";

const Pagination = ({ pages, curr, total }) => {
  const [Page, setPage] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Update Page state when curr or total changes
    updatePageNumbers();
  }, [curr, total]);

  const updatePageNumbers = () => {
    const pageSize = 15; // Number of products per page
    const maxPagesToShow = 5; // Maximum number of pages to show at once
    const totalPages = Math.ceil(total / pageSize); // Calculate total number of pages

    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    let startPage = curr - halfMaxPages;
    startPage = Math.max(1, startPage); // Ensure startPage is at least 1

    let endPage = startPage + maxPagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const newPageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      newPageNumbers.push(i);
    }

    setPage(newPageNumbers);
  };

  const perviousHandler = () => {
    if (curr > 1) {
      pages(curr - 1);
    }
  };

  const nexthandler = () => {
    if (curr < total) {
      pages(curr + 1);
    }
  };

  return (
    <>
      <div aria-label="Page navigation example">
        <ul className="flex text-base justify-center">
          <li className="p-2 md:px-4 rounded-s-lg border border-gray-300 bg-gray-800">
            <button
              href="#"
              className="leading-tight text-gray-200"
              onClick={perviousHandler}
            >
              Previous
            </button>
          </li>

          {Page.map((v, i) => (
            <li
              key={i}
              className={`border-2 border-s-0 text-center flex items-center px-4 cursor-pointer ${
                curr === v || Page>0 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => {
                pages(v);
                setSelectedIndex(i);
              }}
            >
              {v}
            </li>
          ))}

          <li className="p-2 md:px-4 border rounded-e-lg border-gray-300 bg-gray-800">
            <button
              className="leading-tight text-gray-200"
              onClick={nexthandler}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
