import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { checkAndLogoutAfter24Hours, IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcAbout } from "react-icons/fc";

const AboutPage = () => {
  const router = useRouter();

  const [logged, setlogged] = useState(false);
  useEffect(() => {
    if (IsAuth("admin_info") && checkAndLogoutAfter24Hours()) {
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
            <IconButton label="About Page" icon={<FcAbout />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-[80%]">
            <QuillEditor />
          </div>
        </div>
      </AdminLayout>
    );
  }
};
export default AboutPage;
