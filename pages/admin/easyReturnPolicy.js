import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { MdPolicy } from "react-icons/md";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const EasyReturnPolicy = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.push("login");
    }
  }, [router]);
  if (logged) {
    return (
      <AdminLayout>
        <div>
          <div>
            <IconButton label="Easy Return Policy" icon={<MdPolicy />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <QuillEditor />
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default EasyReturnPolicy;
