import { Pages } from "@mui/icons-material";
import React, { useState } from "react";

const Pagination = ({ pages, curr, total }) => {
  const [Page, setPage] = useState([...Array(5).keys()]);
  // move Pervious Handler Function
  const perviousHandler = () => {
    if (curr > 1) {
      pages(curr - 1);
    }
    // dynamic array

    if (curr == Page[0] && Page[Page?.length - 1] > 5) {
      const arr = [];
      for (let index = curr - 1; index >= curr - 5; index--) {
        arr.push(index);
      }

      setPage(arr.reverse());
    }
  };
  //Move Next handler Function
  const Nexthandler = () => {
    // dynamic array

    if (curr == Page[Page.length - 1] && Page[Page.length - 1] <= total) {
      const arr = [];
      for (let index = curr + 1; index <= curr + 5; index++) {
        arr.push(index);
      }

      setPage(arr);
    } else {
      pages(curr + 1);
    }
  };
  return (
    <>
      <div aria-label="Page navigation example">
        <ul className=" flex text-base justify-center  ">
          <li className=" p-2 md:px-4 rounded-s-lg border border-gray-300 bg-gray-800">
            <button
              href="#"
              className="leading-tight text-gray-200 "
              onClick={() => perviousHandler()}
            >
              Previous
            </button>
          </li>

          {Page?.map((v, i) => {
            return (
              <li
                key={i}
                className=" border-2  border-s-0 text-center flex items-center px-4 cursor-pointer "
                onClick={() => pages(v + 1)}
              >
                {v + 1}
              </li>
            );
          })}

          <li className=" p-2 md:px-4 border rounded-e-lg border-gray-300 bg-gray-800">
            <button
              className="leading-tight text-gray-200 "
              onClick={() => Nexthandler()}
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
