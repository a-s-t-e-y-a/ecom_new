import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { RiBook2Fill } from "react-icons/ri";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const GuideToBuy = () => {
  const router = useRouter();

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
            <IconButton label="Guide To Buy" icon={<RiBook2Fill />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <QuillEditor />
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default GuideToBuy;
