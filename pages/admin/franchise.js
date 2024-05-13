import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { TbTruckReturn } from "react-icons/tb";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import CreateDelivery from "@/utils/mutations/useCreateDeliveryTerm";
import { toast } from "react-toastify";
import { MdOutlineCurrencyFranc, MdPolicy } from "react-icons/md";
import useCreateFranchise from "@/utils/mutations/useCreateFranchise";


const Franchise = () => {
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

  // this is just shit, what is the point to use a hook inside a function ???
  // CreateFranchise is nothing but a mutation hook in itself we could directly use that to extract the mutate function.
  const { mutate } = useMutation({
    mutationFn: useCreateFranchise,
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
            <IconButton
              label="Franchise Page"
              icon={<MdOutlineCurrencyFranc />}
            />
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

export default Franchise;
