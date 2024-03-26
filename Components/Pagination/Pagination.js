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
          <li className=" p-2 md:px-4  rounded-s-lg border border-gray-300 ">
            <button
              href="#"
              className="  leading-tight text-gray-500 bg-white   hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => perviousHandler()}
            >
              Previous
            </button>
          </li>

          <li className=" p-2 md:px-4   border rounded-e-lg border-gray-300">
            <button
              href="#"
              className=" leading-tight text-gray-500 bg-white   hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
