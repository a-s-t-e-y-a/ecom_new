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
const Enquiry = () => {
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
      query.invalidateQueries({ queryKey: ["api/enquiry"] });
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

      <div onClick={handleOpen} className="ml-4 mb-4">
        <IconButton label="Enquiry" icon={<RiCustomerService2Line />} />
      </div>
      <div className="mt-10 grid grid-cols-2 items-center gap-5 w-full">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <TryAtHomeItem services={item?.services} />
            </div>
          ))}
      </div>
    </AdminLayout>
  );
};

export default Enquiry;
