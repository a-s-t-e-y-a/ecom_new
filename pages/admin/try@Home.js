import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import AddIcon from "@mui/icons-material/Add";
import { HiOutlineHome } from "react-icons/hi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "@/Components/Dialog/Modal";
import TryHome from "@/Components/Dialog/try@homeDialog";
import TryAtHomeItem from "@/Components/Admin/Try@HomeItem";
import useGetAllTryAtHome from "@/utils/queries/useTryAtHomeGetAll";
import DeleteTryAtHome from "@/utils/mutations/useDeleteTryAtHome";
import { useMutation } from "@tanstack/react-query";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const TryAtHome = () => {
  // const router = useRouter();
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);
  // const onHide = () => setOpen(false);
  // const [logged, setlogged] = useState(false);
  // const [value, setValue] = useState("");
  // const { data, refetch } = useGetAllTryAtHome();
  // const items = [
  //   {
  //     services:"home Services",
  //   },
  // ];
  // useEffect(() => {
  //   if (IsAuth("admin_info")) {
  //     setlogged(true);
  //   } else {
  //     router.replace("login");
  //   }
  // }, [router,refetch]);
  // if (logged) {
  const { data, refetch } = useGetAllTryAtHome();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const [get, setget] = useState(false);

  useEffect(() => {
    refetch();
  }, [get, refetch]);
  const { mutate } = useMutation({
    mutationFn: DeleteTryAtHome,
    onSuccess: (data) => {
      toast.success("Deleted successully");
      query.invalidateQueries({ queryKey: ["api/try_home"] });
      setget(!get);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return (
    <AdminLayout>
      <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<TryHome onCancel={onHide} refecth={setget} token={get} />}
      </Modal>

      <div>
        {/* {data &&
            data.map((item, index) => (
              <div key={index}>
                <TryAtHomeItem
                services={item?.services}
              />
              </div>
            ))} */}
        <div onClick={handleOpen} className="ml-4 mb-4">
          <IconButton label="Try@Home" icon={<HiOutlineHome />} />
        </div>
        <div className="mt-10 mx-4 flex items-center gap-5 flex-wrap">
            {data &&
              data.map((color, index) => (
                <div
                  key={color?.id}
                  className="border rounded-md shadow-md px-5 py-2 inline-flex items-center gap-2 bg-gray-100"
                >
                  <span className="text-base tracking-wide font-semibold text-gray-700">
                    {color?.name}
                  </span>
                  <button
                    onClick={() => Deletehandeler(color)}
                    className="text-sm text-red-500 cursor-pointer"
                  >
                    <DeleteOutlineIcon className="text-base" />
                  </button>
                </div>
              ))}
          </div>
      </div>
    </AdminLayout>
  );
};

export default TryAtHome;
