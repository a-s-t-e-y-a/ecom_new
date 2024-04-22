import React from "react";

function DeletePoPUPDialog({ payload, Deletefunction, Closefunction }) {
  return (
    <div className=" bg-gray-50 shadow-lg p-10 rounded relative">
      <h3 className=" text-xl font-normal mb-3">
        You want to Delete &nbsp;
        <em className="font-semibold">
          '{payload?.name || payload?.product_model_name || payload?.heading}'
        </em>
      </h3>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            Deletefunction(
              payload?.id || payload?.p_id || payload?.products_categories_id
            );
            Closefunction();
          }}
          className=" bg-blue-600 w-full py-2 text-white  rounded shadow-md"
        >
          Yes
        </button>
        <button
          onClick={Closefunction}
          className=" bg-blue-600 w-full py-2 text-white  rounded shadow-md"
        >
          No
        </button>
        <button
          onClick={Closefunction}
          className=" absolute top-3 right-4 font-semibold text-lg  text-gray-500 hover:text-black hover:bg-slate-500 p-1 px-2 rounded"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default DeletePoPUPDialog;
