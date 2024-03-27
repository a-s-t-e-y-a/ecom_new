import React from "react";

const Pagination = ({ pages, curr }) => {
  // move Pervious Handler Function
  const perviousHandler = () => {
    if (curr > 1) {
      pages(curr - 1);
    }
  };
  //Move Next handler Function
  const Nexthandler = () => {
    pages(curr + 1);
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className=" flex text-base justify-center items-center ">
          <li className=" p-2 md:px-4 rounded-s-lg border border-gray-300 bg-gray-800">
            <button
              href="#"
              className="leading-tight text-gray-200 "
              onClick={() => perviousHandler()}
            >
              Previous
            </button>
          </li>

          <li className=" p-2 md:px-4 border rounded-e-lg border-gray-300 bg-gray-800">
            <button
              href="#"
              className="leading-tight text-gray-200 "
              onClick={() => Nexthandler()}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
