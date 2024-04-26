import React, { useState, useEffect } from "react";

const Pagination = ({ setpage, curr, total }) => {
  const [Page, setPage] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Update Page state when curr or total changes
    updatePageNumbers();
  }, [curr, total]);

  const updatePageNumbers = () => {
    const maxPagesToShow = 5;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    let startPage = curr - halfMaxPages;
    startPage = Math.max(0, startPage); // Ensure startPage is not negative

    let endPage = startPage + maxPagesToShow - 1;
    if (endPage >= total) {
      endPage = total - 1;
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }

    const newPageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      newPageNumbers.push(i + 1);
    }

    setPage(newPageNumbers);
  };

  const perviousHandler = () => {
    if (curr > 1) {
      setpage(curr - 1);
    }
  };

  const nexthandler = () => {
    console.log(curr, "current", total);
    if (curr < total) {
      setpage(curr + 1);
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
                curr === v ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => {
                setpage(v);
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
