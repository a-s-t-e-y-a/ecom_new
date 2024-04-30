import React from "react";
import { TbEdit } from "react-icons/tb";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BlogItem = ({ value }) => {
  return (
    <div className="">
      <div className="shadow-md  rounded-lg h-[450px] border-2">
        <div className="">
          <img
            className="rounded object-cover h-[300px] rounded-t-md"
            src={value?.image}
            alt="content"
          />
        </div>
        <div className="mt-6 p-3">
          <h2 className="text-lg text-gray-900 font-bold mb-3 ">
            {value?.heading}
          </h2>
          <div className="flex flex-row justify-between">
            <h3 className="text-gray-500 text-xs  mb-1  tracking-wide">
              {value?.created_on}
            </h3>
            <button
              onClick={() => {
                setOpen(true);
                setedit(value);
              }}
              className=" text-blue-500"
            >
              <TbEdit size={20} />
            </button>
            <button
              onClick={(e) => {
                Deletehandeler(e, value);
              }}
              className=" text-red-500"
            >
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
