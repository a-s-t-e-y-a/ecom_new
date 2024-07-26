import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import UserSideBar from "@/Components/SideBar/UserSideBar";
import { BsPlus } from "react-icons/bs";
import FormDialog from "@/Components/Dialog/FormDialog";
import { HiPencil } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import useGetAllAddress from "@/utils/queries/useGetAllAddress";
import { useMutation, useQueryClient } from "react-query";
import useDeleteAddress from "@/utils/mutations/useDeleteAddress";

const Addressbooks = () => {
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState({});
  const handleOpen = () => setOpen(!open);
  const { data, isLoading } = useGetAllAddress();
  const { mutate } = useDeleteAddress();

  const deleteAddress = (id) => {
    mutate(id);
  };

  return (
    <div className="w-[95%] h-screen mx-auto text-gray-700  flex flex-col">
      {/* Header  */}
      <div className="flex gap-5 h-1/6 pt-10">
        <Avatar
          src="/favicon.ico"
          alt="avatar"
          variant="circular"
          className="w-11 h-11"
        />
        <div>
          <h1 className="font-semibold tracking-wider text-2xl">
            Akku ka chashma
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-5 h-5/6 pt-2">
        <div className="h-full">
          <UserSideBar />
        </div>
        <div className="h-full w-full">
          <h1 className="font-semibold text-xl tracking-wide">
            {" "}
            Saved Address
          </h1>

          <span className="block py-4">
            <hr />
          </span>

          <button
            onClick={handleOpen}
            className="flex items-center gap-1 border bg-gray-200 px-3 py-1 rounded-md text-indigo-800 font-semibold transition duration-300 transform active:scale-95 ease-in-out"
          >
            <span className="text-xl font-bold">
              <BsPlus />
            </span>
            <span className="text-sm">Add New Address </span>
          </button>

          <div className="w-full">
            <FormDialog
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              edit={editable}
            />
          </div>
          <section className="w-full h-[30rem] overflow-y-auto scrollbar-default border rounded-lg px-4 my-4">
            {/* Save Address  */}
            {data?.map((info, index) => (
              <div
                key={index}
                className=" relative w-[70%] text-sm mt-5 border p-2 rounded-md space-y-2 pl-5"
              >
                <div className="space-y-1">
                  <p>{info.first_name + " " + info.last_name}</p>
                  <p>{info.address}</p>
                  <p className="flex items-center gap-3">
                    <span>{info.city}</span>
                    <span>{info.state}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span>{info.pinCode}</span>
                    <span>{info.country}</span>
                  </p>
                </div>
                <div className="absolute top-2 right-2 text-lg text-gray-700 font-semibold gap-1 flex items-center">
                  <span
                    onClick={() => {
                      setOpen(!open);
                      setEditable(info);
                    }}
                  >
                    <HiPencil />
                  </span>
                  <span>
                    <button onClick={() => deleteAddress(info.id)}>
                      <MdDeleteForever />
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Addressbooks;
