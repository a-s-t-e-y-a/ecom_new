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
const LensDetail = () => {
  const lensDetailData = useSelector((state) => state.lensDetail);

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [logged, setlogged] = useState(false);
  const [data, updateData] = useState(lensDetailData);

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);


  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateData(items);
  }
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
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
                  Product Categories Name
                </span>
              </div>
              <div className="text-base tracking-wide font-semibold flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400 tracking-wider">
                  Product Brand Name
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
                    {data.map((item, index) => {
                      return (
                        <Draggable key={index} draggableId={item} index={index}>
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
                                  {item.LensHeading}
                                </span>
                              </div>
                              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                  Product Categories Name
                                </span>
                                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                  {item.ProductCategoriesName[0]}
                                </span>
                              </div>
                              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                  Product Brand Name
                                </span>
                                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                  {item.ProductBrandName[0]}
                                </span>
                              </div>
                              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                  Power Type
                                </span>
                                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                  {item.PowerType}
                                </span>
                              </div>
                              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                  Price
                                </span>
                                <span className="text-gray-600 font-semibold text-sm -mt-4 z-5">
                                  {item.Price}
                                </span>
                              </div>
                              <div className="text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3">
                                <span className="text-xs text-gray-400 tracking-wider opacity-0">
                                  Action
                                </span>
                                <span className="flex items-center gap-3 font-semibold text-base -mt-4 z-5">
                                  <span className="text-sm text-red-500 cursor-pointer">
                                    <DeleteOutlineIcon className="text-base" />
                                  </span>
                                  <span className="text-sm text-sky-500 cursor-pointer">
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
