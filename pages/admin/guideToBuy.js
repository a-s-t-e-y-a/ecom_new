import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { TbTextSize, TbTruckReturn } from "react-icons/tb";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import CreateDelivery from "@/utils/mutations/useCreateDeliveryTerm";
import { toast } from "react-toastify";
import {
  MdCancelScheduleSend,
  MdOutlineCurrencyFranc,
  MdOutlinePrivacyTip,
  MdPolicy,
} from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import useCreateGuideToBuy from "@/utils/mutations/useCreateGuideToBuy";
import { RiBook2Fill } from "react-icons/ri";

const GuideToBuy = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  const { mutate } = useMutation({
    mutationFn: useCreateGuideToBuy,
    onSuccess: () => {
      toast.success("Created successfully");
      reset(); // Reset the form after successful submission
    },
    onError: (err) => {
      toast.error("Error occurred");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div>
            <IconButton label="Guide To Buy" icon={<RiBook2Fill />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <QuillEditor {...field} onChange={field.onChange} />
                )}
              />
              <button
                type="submit"
                className=" bg-blue-500 rounded shadow w-40 text-center text-white my-4"
              >
                ADD <AddIcon />
              </button>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default GuideToBuy;
