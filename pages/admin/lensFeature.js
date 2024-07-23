import IconButton from "@/Components/Admin/IconButton";
import PowerType from "@/Components/Admin/PowerType";
import Modal from "@/Components/Dialog/Modal";
import LensFeatureDialogBox from "@/Components/Dialog/LensFeatureDialogBox";
import AdminLayout from "@/Layout/AdminLayout";
import { GiMicroscopeLens } from "react-icons/gi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import useGetAllLensFeature from "@/utils/queries/useLensFeature";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import query from "@/utils/queryClinet";
import DeleteLensFeature from "@/utils/mutations/useDeletelensFeature";
const LensFeature = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);
  const [get, setget] = useState(false);

  const { data, refetch } = useGetAllLensFeature();
  const { mutate } = useMutation({
    mutationFn: DeleteLensFeature,
    onSuccess: (data) => {
      toast.success("Deleted successully");
      setget(!get);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
    refetch();
  }, [router, mutate, refetch, get]);

  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);
  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {
            <LensFeatureDialogBox
              onCancel={onHide}
              refetch={setget}
              token={get}
            />
          }
        </Modal>
        <div>
          <div className="ml-4"
            onClick={() => {
              handleOpen();
            }}
          >
            <IconButton label="Add Lens Features" icon={<GiMicroscopeLens />} />
          </div>
          <div className="mx-4 grid grid-cols-2 items-center gap-8 w-[1250px] h-[750px] pt-4 overflow-y-scroll">
            {data &&
              data.map((value, index) => (
                <PowerType key={index} data={value} mutate={mutate} />
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default LensFeature;
