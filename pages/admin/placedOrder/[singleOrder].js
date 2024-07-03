import AdminLayout from "@/Layout/AdminLayout";
import OrderItem from "@/Components/OrderItem";
import { IsAuth } from "@/utils/IsAuth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import useGetPlacedOrdersById from "@/utils/queries/admin/useGetPlaceOrderById";
import { formatDate } from "@/utils/Helpers";

const PlacedOrderDetail = () => {
  const router = useRouter();
  const [logged, setlogged] = useState(false);

  const { singleOrder } = router.query;
  const { data } = useGetPlacedOrdersById(singleOrder);

  useEffect(() => {
    if (IsAuth("admin_info")) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);

  console.log(data, 'data')

  if (logged) {
    return (
      <AdminLayout>
        <div className="w-full h-fit space-y-3 pt-3">
          <div className="grid grid-cols-4">
            <div className="h-[80vh] col-span-2 space-y-8 overflow-y-auto scrollbar-hide">
              {
                data?.order_item?.map((item, index)=><OrderItem item={item} total={data?.total} key={index}/>)
              }
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
                        {data?.id}
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
                        {formatDate(data?.CreatedDate)}
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
                    <span className="text-2xl font-semibold">&#8377; {data?.total}</span>
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
                      {data?.address?.first_name + " " + data?.address?.last_name}
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Email:{" "}
                      </span>
                      {data?.address?.email}
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Phone :{" "}
                      </span>
                      +91 {data?.address?.phoneNo}
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Address :{" "}
                      </span>
                      {data?.address?.address}
                    </p>
                    <p>
                      <span className="font-semibold text-base text-gray-700">
                        Pin Code :
                      </span>{" "}
                      {data?.address?.pinCode}
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
