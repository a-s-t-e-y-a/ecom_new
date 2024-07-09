import IconButton from "@/Components/Admin/IconButton";
import AdminLayout from "@/Layout/AdminLayout";
import React, { useState } from "react";
import { useEffect } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { IsAuth } from "@/utils/IsAuth";
import useGetAllEnquiry from "@/utils/queries/admin/useGetAllEnquiry";

const Enquiry = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { data } = useGetAllEnquiry()
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
        <div className="mb-4">
          <IconButton label="Enquiry" icon={<RiCustomerService2Line />} />
        </div>
        <table className="w-full rounded-md shadow-md mt-10">
          <thead className="bg-slate-900 rounded-lg">
            <tr>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Name</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Email</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Phone</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">City</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">State</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Country</th>
              <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="text-sm px-5 py-2">{item?.firstname + " " + item?.lastname}</td>
                <td className="text-sm px-5 py-2">{item?.email}</td>
                <td className="text-sm px-5 py-2">{item?.phonenumber}</td>
                <td className="text-sm px-5 py-2">{item?.city}</td>
                <td className="text-sm px-5 py-2">{item?.state}</td>
                <td className="text-sm px-5 py-2">{item?.country}</td>
                <td className="text-sm px-5 py-2">{item?.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminLayout>
    );
  }
};

export default Enquiry;
