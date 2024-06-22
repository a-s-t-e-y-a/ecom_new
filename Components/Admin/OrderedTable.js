import React from "react";
import { MdDelete } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { formatDate } from "@/utils/Helpers";

const OrderedTable = ({items}) => {
  console.log(items, 'items')
  return (
    <div className="w-[1240px] mx-4 tracking-wide h-[72vh] overflow-y-scroll scrollbar-hide border">
      <table className="h-[30vh] shadow-md table-auto border-collapse border border-slate-400 w-full relative">
        <thead className="border border-slate-400 text-sm font-normal text-gray-700 sticky top-0 bg-white ">
          <tr className="py-2 border border-slate-400">
            <th className="border border-slate-300 py-2 ">Order Date</th>
            <th className="border border-slate-300 py-2 ">Order Id</th>
            <th className="border border-slate-300 py-2 ">Name</th>
            <th className="border border-slate-300 py-2 ">Amount</th>
            <th className="border border-slate-300 py-2 ">Mobile</th>
            <th className="border border-slate-300 py-2 ">Prescription</th>
            <th className="border border-slate-300 py-2 ">Action</th>
          </tr>
        </thead>
        <tbody className="text-xs text-gray-600 text-center overflow-scroll mt-10">
          {items?.order_item?.map((data, index) => {
            console.log(data, 'data')
            const name = items?.address?.first_name + " " + items.address?.last_name
            return (
              <tr className="" key={index}>
                <td className="border border-slate-300 py-2">{formatDate(data.CreatedDate)}</td>
                <td className="border border-slate-300 py-2">{data.id}</td>
                <td className="border border-slate-300 py-2">{name}</td>
                <td className="border border-slate-300 py-2">{items.total}</td>
                <td className="border border-slate-300 py-2">{items.address?.phoneNo}</td>
                <td className="border border-slate-300 py-2">
                  {data.Prescription || "No"}
                </td>
                <td className="border border-slate-300 py-2">
                  <div className="flex items-center justify-center gap-3 text-md ">
                    <span className="text-lg text-blue-600 cursor-pointer">
                      <BiShowAlt />
                    </span>
                    <span className="text-lg text-orange-600 cursor-pointer">
                      <MdDelete />
                    </span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderedTable;
