import IconButton from "@/Components/Admin/IconButton";
import AdminLayout from "@/Layout/AdminLayout";
import { MdOutlineCurrencyFranc } from "react-icons/md";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import useGetAllFranchise from "@/utils/queries/admin/useGetAllFranchise";

const Franchise = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);
  const { data } = useGetAllFranchise();

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  if (!logged) return null;

  return (
    <AdminLayout>
      <div className="ml-4">
        <IconButton
          label="Franchise Page"
          icon={<MdOutlineCurrencyFranc />}
        />
      </div>
      <div className="mt-10">
        {/* <div className="w-full mx-4 border rounded-md shadow-md px-5 py-3 bg-gray-50">
          <div className="grid grid-cols-9 gap-3 text-center">
            <div className="text-xs text-gray-400">Name</div>
            <div className="text-xs text-gray-400">Email</div>
            <div className="text-xs text-gray-400">Phone</div>
            <div className="text-xs text-gray-400">City</div>
            <div className="text-xs text-gray-400">State</div>
            <div className="text-xs text-gray-400">Near By</div>
            <div className="text-xs text-gray-400">Super Area</div>
            <div className="text-xs text-gray-400">Carpet Area</div>
            <div className="text-xs text-gray-400">Type</div>
          </div>
        </div> */}

      </div>
      <table className="w-full rounded-md shadow-md mt-10">
        <thead className="bg-slate-900 rounded-lg">
          <tr>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Name</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Email</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Phone</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">City</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">State</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Near By</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Super Area</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Carpet Area</th>
            <th className="text-white text-base tracking-wide font-medium text-left px-5 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="text-sm px-5 py-2">{item?.firstName + item?.lastName}</td>
              <td className="text-sm px-5 py-2">{item?.email}</td>
              <td className="text-sm px-5 py-2">{item?.phone}</td>
              <td className="text-sm px-5 py-2">{item?.city}</td>
              <td className="text-sm px-5 py-2">{item?.state}</td>
              <td className="text-sm px-5 py-2">{item?.nearby}</td>
              <td className="text-sm px-5 py-2">{item?.superArea}</td>
              <td className="text-sm px-5 py-2">{item?.carpetArea}</td>
              <td className="text-sm px-5 py-2">{item?.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Franchise;
