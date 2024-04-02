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
const LensFeature = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const [open, setOpen] = useState(false);

  const { data } = useGetAllLensFeature();
  // const { mutate } = useMutation({
  //   mutationFn: ,
  //   onSuccess: () => {},
  //   onError: () => {},
  // });
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  const handleOpen = () => setOpen(!open);
  const onHide = () => setOpen(false);

  const handleDelete = (item) => {
    mutate(item.id);
    window.location.reload();
  };

  if (logged) {
    return (
      <AdminLayout>
        <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
          {<LensFeatureDialogBox onCancel={onHide} />}
        </Modal>
        <div>
          <div onClick={handleOpen}>
            <IconButton label="Add Lens Features" icon={<GiMicroscopeLens />} />
          </div>
          <div className="mt-10 grid grid-cols-2 items-center gap-5 w-full">
            {data &&
              data.map((item, index) => (
                <PowerType
                  key={index}
                  src={item.image}
                  title={item.name}
                  description={item.description}
                  onClick={() => handleDelete(item)}
                />
              ))}
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default LensFeature;
