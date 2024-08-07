import IconButton from "@/Components/Admin/IconButton";
import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { FcAbout } from "react-icons/fc";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";

const AboutPage = () => {
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
            <IconButton label="About Page" icon={<FcAbout />} />
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap w-full">
            <QuillEditor value={value} onChange={(val)=>setValue(val)}/>
          </div>
          <div className="pt-4">
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default AboutPage;
