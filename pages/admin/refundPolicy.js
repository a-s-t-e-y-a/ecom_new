import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { useEffect } from "react";
const RefundPolicy = () => {
  const router = useRouter();
  const [value, setValue] = useState("")
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div>
            <IconButton
              label="Refund Policy"
              icon={<HiOutlineReceiptRefund />}
            />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <QuillEditor value={value} onChange={(val) => setValue(val)} />
            <button className=" bg-blue-500 rounded shadow  w-40 text-center text-white my-4" onClick={() => console.log(value)}>
              ADD <AddIcon />
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default RefundPolicy;
