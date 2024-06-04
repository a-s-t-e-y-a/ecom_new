import React from "react";
import Image from "next/image";

const EasyReturnPolicy = () => {
  return (
    <div className="text-gray-700 px-6">
      <div className="space-y-10 mt-5">
        <h1 className="text-2xl font-bold tracking-wide text-center">
          7 DAY EASY RETURN POLICY
        </h1>
        <div className="flex md:flex-row flex-col gap-6">
          <Image
            width={100}
            height={100}
            alt=""
            src={"/return.png"}
            className="h-[300px]"
          />
          <div className="flex flex-col gap-5">
            <p className="text-justify">
              Since 2013 Akkukachasma is always working to provide you with
              good-quality products low cost than other online websites. When
              anyone facing a problem with the product and if you aren’t fully
              satisfied with our products and it is not ‘As they describe’ on
              our website, or is received in a ‘damaged’ condition, you can
              request an Exchange or a Refund within 14 days after receiving the
              order.
            </p>
            <span className="font-semibold">
              For refund, once we receive the product in its original condition
              with the invoice at our warehouse.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyReturnPolicy;
