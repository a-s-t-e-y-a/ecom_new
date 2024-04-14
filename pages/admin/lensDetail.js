import IconButton from "@/Components/Admin/IconButton";
import LensDetailDialogBox from "@/Components/Dialog/LensDetailDialogBox";
import Modal from "@/Components/Dialog/Modal";
import AdminLayout from "@/Layout/AdminLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { TbEdit } from "react-icons/tb";

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
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const LensDetail = () => {
  const lensDetailData = useSelector((state) => state.lensDetail);

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);
  const [data, setData] = useState([]);
  const { data: Detail, refetch } = useGetAllLensDetails();
  const [get, setget] = useState(false);

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    if (Detail) {
      setData(Detail?.data);
    }
    refetch();
  }, [router, refetch, get, Detail]);
  const { mutate } = useMutation({
    mutationFn: deleteLensDetails,
    onSuccess: () => {
      toast.success("Lens Details Deleted Successfully");
      setget(!get);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  }
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(!open);
  const deleteHandelr = (id) => {
    mutate(id);
  };
  if (logged) {
    return (
      <AdminLayout>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
            {
              <LensDetailDialogBox
                onCancel={onHide}
                refetch={setget}
                token={get}
              />
            }
          </Modal>
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
          </div>

          <Droppable droppableId={`${Math.random()}`}>
            {(provided) => (
              <div
                className="  overflow-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data &&
                  data.map(
                    (item, index) => (
                      console.log(item),
                      (
                        <Draggable
                          key={item?.id}
                          draggableId={`${item?.id}`}
                          index={index}
                          className=" "
                        >
                          {(provided) => (
                            <div
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              className=" grid grid-cols-4 gap-[20%] text-center justify-between bg-slate-200 border rounded-md shadow-lg my-2 p-3"
                            >
                              <p className=" w-full">{item?.heading}</p>
                              <p>{item?.power_type}</p>
                              <p>{item?.price}</p>
                              <div className=" flex items-center justify-end">
                                <button
                                  onClick={() => deleteHandelr(item?.id)}
                                  className=" text-red-500 me-1"
                                >
                                  <DeleteOutlineIcon />
                                </button>
                                <button
                                  onClick={() => handleOpen()}
                                  className=" text-blue-500 me-2 text-lg"
                                >
                                  <TbEdit />
                                </button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      )
                    )
                  )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </AdminLayout>
    );
  }
};
export default LensDetail;
