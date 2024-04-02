import AdminLayout from "@/Layout/AdminLayout";
import OrderItem from "@/Components/OrderItem";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
const PlacedOrderDetail = () => {
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
        <div className="w-full h-fit space-y-3 pt-3">
          <div className="grid grid-cols-4">
            <div className="h-[80vh] col-span-2 space-y-8 overflow-y-auto scrollbar-hide">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
            <div className="col-span-2 space-y-8">
              <p className="text-center text-lg tracking-wide text-gray-900 font-semibold shadow-sm px-4 py-2 uppercase">
                Placed Order Detail
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="tracking-wide space-y-2">
                    <p className="text-sm">
                      Order ID :{" "}
                      <span className="font-semibold text-rose-600">
                        120321611565
                      </span>
                    </p>
                    <p className="text-sm">
                      OrderType :{" "}
                      <span className="font-semibold text-sky-600">
                        57d10fe77fdc9d75af
                      </span>
                    </p>
                    <p className="text-sm">
                      OrderDate :{" "}
                      <span className="font-semibold text-green-600">
                        2023-07-10 03:18:28
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5 tracking-wide border px-5 py-3 shadow-md rounded-md bg-white">
                    <span className="font-bold text-xl flex flex-col justify-center">
                      Total Price{" "}
                      <span className="text-xs font-light pl-4">
                        (Include GST)
                      </span>
                    </span>
                    <span className="text-2xl font-semibold">$300</span>
                  </div>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p className="tracking-wide font-semibold border-b-2 pb-1 ">
                    Shipping Address
                  </p>
                  <div className="flex flex-col tracking-wide text-sm gap-2">
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Name :{" "}
                      </span>
                      Akku ka Chasma
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Email:{" "}
                      </span>
                      akkukachasma@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Phone :{" "}
                      </span>
                      +91 987654321
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Address :{" "}
                      </span>
                      Near Metro station , Laksmi Nagar , Delhi , India
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Pin Code :
                      </span>{" "}
                      250103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }
};

export default PlacedOrderDetail;
