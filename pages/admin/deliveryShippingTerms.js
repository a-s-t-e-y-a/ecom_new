import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { TbTruckReturn } from "react-icons/tb";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { useMutation } from "@tanstack/react-query";
import CreateDelivery from "@/utils/mutations/useCreateDeliveryTerm";
import { toast } from "react-toastify";

const DeliveryShippingTerms = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { control, handleSubmit } = useForm(); // Use control instead of register

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  const { mutate } = useMutation({
    mutationFn: CreateDelivery,
    onSuccess: () => {
      toast.success("delivery created successfully");
    },
    onError: (err) => {
      toast.error("Error occurred");
    },
  });
  const onSubmit = (data) => {
    // Handle form submission
    mutate(data)
  };

  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div>
            <IconButton
              label="Delivery Shipping Terms"
              icon={<TbTruckReturn />}
            />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="description" // The name of the field in the form state
                control={control} // The control object from useForm
                render={({ field }) => (
                  <QuillEditor
                    {...field} // Spread the field props onto the QuillEditor
                    onChange={field.onChange} // Bind the onChange event to field.onChange
                  />
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

export default DeliveryShippingTerms;
