import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

const SingleOrderItem = ({ orderId, CreatedDate, total, order_item }) => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="border rounded-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-8">
            <div className="font-semibold text-[14px]">
              <span className="text-xs font-normal tracking-wide">
                Order Id :
              </span>{" "}
              {orderId}
            </div>
            <div className="font-semibold text-[14px]">
              <span className="text-xs font-normal tracking-wide">
                Order Date :
              </span>{" "}
              {CreatedDate}
            </div>
          </div>
          <div className="font-semibold text-[14px]">
            <span className="text-xs font-normal tracking-wide">
              Total Price :
            </span>{" "}
            {total}
          </div>
        </div>
        <hr />
        <div className="p-2 space-x-4 flex items-center">
          <span className="border p-1 rounded-full text-xl font-semibold">
            <CiDeliveryTruck />
          </span>
          <p className="text-yellow-500 text-sm font-semibold">
            Handed Over to Customer
          </p>
        </div>

        <div className="p-2">
          <hr />
          {order_item.map((info, index) => (
            <div className="flex gap-5 py-5" key={index}>
              <Image
                width={100}
                height={100}
                alt=""
                src={"/1 (1).jpeg"}
                className="w-56"
              />
              <div className="text-sm tracking-wide space-y-2">
                <div>
                  <p>{info.pId.product_model_name}</p>
                  <p className="text-xs text-gray-500">
                    Hydrophobic Anti-Glore
                  </p>
                  <p className="text-[10px] text-gray-400">Sold By Store</p>
                </div>
                <p className="font-semibold">{info.pId.discounted_price}</p>
              </div>
            </div>
          ))}

          <hr />

          <div className="flex items-center justify-between p-2">
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-semibold">
                Track your order in few seconds
              </span>
              <span className="text-xs">1800-111-111</span>
            </div>
            <div>
              <button className="text-sm px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-800">
                Track Order
              </button>
            </div>
          </div>
          <hr />

          <div className="space-y-2">
            <div className="text-sm">
              <div className="flex items-center gap-6 p-2">
                <p>
                  <span className="font-semibold tracking-wide">
                    <TiTick className="inline " />
                    Size :
                  </span>
                  135 mm
                </p>
                <p className="font-semibold tracking-wide">
                  <TiTick className="inline " />
                  Power Submitter
                </p>
              </div>
            </div>
            <div>
              <div className="overflow-hidden border rounded-md">
                <table className="min-w-full text-left text-xs font-light tracking-wide">
                  <thead className="border-b font-medium">
                    <tr>
                      <th scope="col" className="px-4 py-2">
                        #
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Spherical (SPH)
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Cylindrical (CYL)
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Pupil Distance (PD)
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Add
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        LEFT
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">-1.50</td>
                      <td className="whitespace-nowrap px-4 py-2">0.00</td>
                      <td className="whitespace-nowrap px-4 py-2">29.5</td>
                      <td className="whitespace-nowrap px-4 py-2">10.5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        RIGHT
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">1.75</td>
                      <td className="whitespace-nowrap px-4 py-2">0.00</td>
                      <td className="whitespace-nowrap px-4 py-2">29</td>
                      <td className="whitespace-nowrap px-4 py-2">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderItem;
