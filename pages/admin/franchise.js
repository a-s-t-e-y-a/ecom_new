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
import { toast } from "react-toastify";
import { MdOutlineCurrencyFranc, MdPolicy } from "react-icons/md";

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

  const onSubmit = (data) => {
  
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
        </div>
      </AdminLayout>
    );
  }
};

export default Franchise;
