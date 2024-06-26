import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import PowerTypesDialogBox from "@/Components/Dialog/PowerTypesDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import useGetAllPowerType from "@/utils/queries/usePowerType";
import { useMutation } from "@tanstack/react-query";
import query from "@/utils/queryClinet";
import toast from "react-hot-toast";
import DeletePowerType from "@/utils/mutations/useDeletePowerType";
import { GiPowerRing } from "react-icons/gi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

const PowerTypes = () => {
  const { data, refetch } = useGetAllPowerType();

  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  const [get, setget] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [get, refetch]);
  const { mutate } = useMutation({
    mutationFn: DeletePowerType,
    onSuccess: (data) => {
      toast.success("Deleted successully");
      query.invalidateQueries({ queryKey: ["api/PowerType"] });
      setget(!get);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {
            <PowerTypesDialogBox
              onCancel={onHide}
              refecth={setget}
              token={get}
            />
          }
        </Modal>

        <div>
          <div onClick={handleOpen} className="ml-4">
            <IconButton label="Add Power Types" icon={<GiPowerRing />} />
          </div>
          <div className="mt-10 mx-4 grid grid-cols-2 items-center gap-5 w-[1250px]">
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <PowerType
                  data={item}
                  mutate={mutate}
                />
                </div>
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default PowerTypes;
