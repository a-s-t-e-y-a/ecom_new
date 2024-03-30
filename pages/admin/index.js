import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { useRouter } from "next/router";
import React from "react";
import { FcAbout } from "react-icons/fc";

const AboutPage = () => {
  const router = useRouter();

  return (
    <AdminLayout>
      <div>
        <div>
          <IconButton label="About Page" icon={<FcAbout />} />
        </div>
        <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
          <QuillEditor />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AboutPage;
