import IconButton from "@/Components/Admin/IconButton";
import AdminLayout from "@/Layout/AdminLayout";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "@/Components/Dialog/Modal";
import TryHome from "@/Components/Dialog/try@homeDialog";
import TryAtHomeItem from "@/Components/Admin/Try@HomeItem";
import useGetAllTryAtHome from "@/utils/queries/useTryAtHomeGetAll";
import DeleteTryAtHome from "@/utils/mutations/useDeleteTryAtHome";
import { useMutation } from "@tanstack/react-query";
import { RiCustomerService2Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Textarea } from "@material-tailwind/react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { IsAuth } from "@/utils/IsAuth";
const Enquiry = () => {
  const { data, refetch } = useGetAllTryAtHome();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [logged, setlogged] = useState(false);
  const onHide = () => setOpen(false);
  const [get, setget] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  const onSubmit = (data) => {
    mutate(data);
  };
  if(logged) {
  return (
    <AdminLayout>
      {/* <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
        {<TryHome onCancel={onHide} refecth={setget} token={get} />}
      </Modal> */}

      <div onClick={handleOpen} className="ml-4 mb-4">
        <IconButton label="Enquiry" icon={<RiCustomerService2Line />} />
      </div>
      {/* <div className="mt-10 grid grid-cols-2 items-center gap-5 w-full">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <TryAtHomeItem services={item?.services} />
            </div>
          ))}
      </div> */}
      <div className="mt-6 mx-4 flex items-center gap-3 flex-wrap w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <QuillEditor {...field} onChange={field.onChange} />
                )}
              /> */}
              
            <Textarea
              label="Enquiry"
              className="w-[600px]"
              
            />
          
              <button
                type="submit"
                className=" bg-blue-500 rounded shadow w-40 text-center text-white my-4"
              >
                ADD <AddIcon />
              </button>
            </form>
          </div>
    </AdminLayout>
  );
}
};

export default Enquiry;
