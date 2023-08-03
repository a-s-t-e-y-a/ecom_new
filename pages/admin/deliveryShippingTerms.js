import QuillEditor from "@/Components/Admin/QuillEditor";
import AdminLayout from "@/Layout/AdminLayout";
import { useState } from "react";

const deliveryShippingTerms = () => {
  return (
    <AdminLayout>
      <div>
        <div>
            <QuillEditor />
        </div>
      </div>
    </AdminLayout>
  );
};

export default deliveryShippingTerms;
