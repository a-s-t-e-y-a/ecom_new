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
import { Textarea } from "@material-tailwind/react";

const Franchise = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const { mutate } = useCreateFranchise();

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

  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div className="ml-4">
            <IconButton
              label="Franchise Page"
              icon={<MdOutlineCurrencyFranc />}
            />
          </div>
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
              label="Franchise"
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
        </div>
      </AdminLayout>
    );
  }
};

export default Franchise;
