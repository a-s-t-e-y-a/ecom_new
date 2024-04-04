"use client";
import IconButton from "@/Components/Admin/IconButton";
import LensDetailDialogBox from "@/Components/Dialog/LensDetailDialogBox";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { TbEdit } from "react-icons/tb";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdOutlineLensBlur } from "react-icons/md";
import { useSelector } from "react-redux";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcAbout } from "react-icons/fc";
import useGetAllLensDetails from "@/utils/queries/useLensDetail";
import { useMutation } from "@tanstack/react-query";
import deleteLensDetails from "@/utils/mutations/uselensDeatil";
import { toast } from "react-toastify";
const LensDetail = () => {
  const lensDetailData = useSelector((state) => state.lensDetail);

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);

  const { data, refetch } = useGetAllLensDetails();
  const [get, setget] = useState(false);
  const { mutate } = useMutation({
    mutationFn: deleteLensDetails,
    onSuccess: () => {
      toast("Lens Details Deleted Successfully");
    },
    onError: (err) => {
      toast(err.message);
    },
  });
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, refetch]);
  console.log(data, "sas");
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateData(items);
  }
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(!open);
  const deleteHandelr = (id) => {
    mutate(id);
  };
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<LensDetailDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div>
            <span onClick={handleOpen}>
              <IconButton
                label="Add Lens Detail"
                icon={<MdOutlineLensBlur />}
              />
            </span>
          </div>
          <div className="mt-10 flex items-center gap-3 flex-wrap w-full">
            <div className="w-full border rounded-md shadow-md px-5 py-3 flex items-center justify-between bg-gray-50">
              <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 tracking-wider">
                  Lens Heading
                </span>
              </div>

              <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 tracking-wider">
                  Power Type
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 tracking-wider">
                  Price
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 tracking-wider">
                  Action
                </span>
              </div>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="data">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-full border rounded-md shadow-md px-5 py-2 flex flex-col items-center justify-between bg-gray-50 gap-5"
                  >
                    {data &&
                      data?.data?.map((item, index) => {
                        return (
                          <Draggable
                            key={index}
                            draggableId={item}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="w-full flex items-center justify-between border-b py-1"
                              >
                                <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                  <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                    Lens Heading
                                  </span>
                                  <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                    {item?.heading}
                                  </span>
                                </div>

                                <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                  <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                    Power Type
                                  </span>
                                  <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                    {item?.power_type}
                                  </span>
                                </div>
                                <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                  <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                    Price
                                  </span>
                                  <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                    {item?.price}
                                  </span>
                                </div>
                                <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                  <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                    Action
                                  </span>
                                  <span className="flex items-center gap-3 font-semibold text-base -mt-4 z-5">
                                    <span
                                      className="text-sm text-red-500 cursor-pointer"
                                      onClick={() => deleteHandelr(item?.id)}
                                    >
                                      <DeleteOutlineIcon className="text-base" />
                                    </span>
                                    <span
                                      className="text-sm text-sky-500 cursor-pointer"
                                      onClick={() => handleOpen()}
                                    >
                                      <TbEdit className="text-base" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default LensDetail;
