import React from "react";
import SingleOrderItem from "./SingleOrderItem";
import useGetAllOrder from "@/utils/queries/useGetAllOrder";

const MyOrder = () => {
  const { data, isLoading } = useGetAllOrder();
  if (isLoading) {
    return <>Loading...!!!!</>;
  }
  return (
    <div className="w-full">
      {data.map((info, index) => (
        <SingleOrderItem
          key={index}
          orderId={info.id}
          CreatedDate={info.CreatedDate}
          total={info.total}
          order_item={info.order_item}
        />
      ))}
    </div>
  );
};

export default MyOrder;
