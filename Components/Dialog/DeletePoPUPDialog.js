import React from "react";

function DeletePoPUPDialog({ payload, Deletefunction, Closefunction }) {
  return (
    <div className=" bg-gray-200 p-3 rounded">
      <h3 className=" text-xl font-semibold mb-3">
        You want to Delete {payload?.name}
      </h3>
      <div className=" flex gap-2">
        <button
          onClick={() => {
            Deletefunction(payload?.id);
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
      </div>
    </div>
  );
}

export default DeletePoPUPDialog;
