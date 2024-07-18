import api from "@/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WhishlistSingleItem = ({ item, info, removeItem }) => {
  const product = item;
  const images = product?.product_images.split(",")
  return (
    <div>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li key={product?.p_id} className="flex py-6">
              <div className="h-16 w-32 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                <Image
                  width={100}
                  height={100}
                  src={images[1]}
                  alt=""
                  className="h-full w-full object-fit object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col tracking-wide">
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <h3>
                      <a href={""}>{product?.product_model_name}</a>
                    </h3>
                    <p className="ml-4 text-gray-600">
                      Rs. {product?.discounted_price}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs tracking-wide">
                  <button
                    type="button"
                    onClick={() => removeItem(info?.id)}
                    className="font-medium text-orange-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhishlistSingleItem;
