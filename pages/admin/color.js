import IconButton from "@/Components/Admin/IconButton";
import Modal from "@/Components/Dialog/Modal";
import ColorDialogBox from "@/Components/Dialog/ColorDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import useGetAllColor from "@/utils/queries/useColorGetAll";
import Loader from "@/Components/Loader";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const Color = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
            router.replace("login");
");

    }
  }, [router]);
  const { data, isLoading } = useGetAllColor();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  if (isLoading) {
    return <Loader />;
  }
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<ColorDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Add Color" icon={<IoColorPaletteOutline />} />
          </div>
          <div className="mt-10 flex items-center gap-5 flex-wrap">
            {data &&
              data.map((color, index) => (
                <div
                  key={index}
                  className="border rounded-md shadow-md px-5 py-2 inline-flex items-center gap-2 bg-gray-100"
                >
                  <span className="text-base tracking-wide font-semibold text-gray-700">
                    {color.name}
                  </span>
                  <span className="text-sm text-red-500 cursor-pointer">
                    <DeleteOutlineIcon className="text-base" />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default Color;
