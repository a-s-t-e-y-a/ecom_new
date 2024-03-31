"use client";
import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import ShapeDialogBox from "@/Components/Dialog/ShapeDialogBox";
import Loader from "@/Components/Loader";
import AdminLayout from "@/Layout/AdminLayout";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IoShapesOutline } from "react-icons/io5";
import Image from "next/image";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const Shape = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  // const shapesData = useSelector((state)=> state.shape)
  const { data, isLoading, isError } = useGetAllShape();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <>Error ...</>;
  }

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<ShapeDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Add Shape" icon={<IoShapesOutline />} />
          </div>
          <div className="mt-10 flex items-center gap-5 flex-wrap overflow-scroll scrollbar-hide">
            {data &&
              data.map((shape, index) => (
                <div
                  key={index}
                  className="border rounded-md shadow-md px-5 py-2 inline-flex flex-col items-center gap-2 bg-gray-100"
                >
                  <Image
                    src={
                      "https://akkukachasma.s3.amazonaws.com/shape/" +
                      shape?.image
                    }
                    className="w-44 h-auto mix-blend-multiply"
                    width={100}
                    height={100}
                    alt="image"
                  />
                  <div className="flex items-center gap-5">
                    <span className="text-base tracking-wide font-semibold text-gray-700">
                      {shape.name}
                    </span>
                    <span className="text-sm text-red-500 cursor-pointer">
                      <DeleteOutlineIcon className="text-base" />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default Shape;
