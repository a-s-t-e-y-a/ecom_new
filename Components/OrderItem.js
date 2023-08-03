import React from "react";
import { TiTick } from "react-icons/ti";

const OrderItem = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="relative border rounded-md">
        {/* Remove Button  */}
        <div className="absolute top-2 right-2 flex text-xs tracking-wide">
          <button
            type="button"
            className="font-medium text-orange-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>

        <div className="p-2">
          <div className="flex gap-5 py-5">
            <img src="/1 (1).jpeg" className="w-56" />
            <div className="text-sm tracking-wide space-y-2">
              <div>
                <p>Vincent Chase Online Eyeglasses</p>
                <p className="text-xs text-gray-500">Hydrophobic Anti-Glore</p>
                <p className="text-[10px] text-gray-400">Sold By Store</p>
              </div>
              <p className="font-semibold">$675</p>
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
                        RIGHT
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">1.75</td>
                      <td className="whitespace-nowrap px-4 py-2">0.00</td>
                      <td className="whitespace-nowrap px-4 py-2">29</td>
                      <td className="whitespace-nowrap px-4 py-2">25</td>
                    </tr>
                    <tr className="border-b">
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        LEFT
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">-1.50</td>
                      <td className="whitespace-nowrap px-4 py-2">0.00</td>
                      <td className="whitespace-nowrap px-4 py-2">29.5</td>
                      <td className="whitespace-nowrap px-4 py-2">10.5</td>
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

export default OrderItem;
