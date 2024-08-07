import api from "@/api";
import useDeleteCart from "@/utils/mutations/useDeleteCart";
import Image from "next/image";
import { useRouter } from "next/router";

const CartSingleItem = ({ item }) => {
  const { product, lens } = item;
  
  // Get the delete mutation function from the hook
  const { mutate: deleteCartItem } = useDeleteCart();

  const removeItem = (id) => {
    // Call the mutation function to remove the item
    deleteCartItem(id, {
      onSuccess: () => {
        // Optionally, handle any side effects or refetch data
        console.log(`Item with id ${id} removed successfully.`);
      },
      onError: (error) => {
        // Optionally, handle any errors
        console.error("Failed to remove item:", error);
      },
    });
  };

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
                  src={product?.images[1]}
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
                    <p className="ml-4 text-gray-600">Rs. {product?.discounted_price}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <h3>
                      <a href={""}>{lens?.heading}</a>
                    </h3>
                    <p className="ml-4 text-gray-600">
                      Rs. {lens?.price}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-900">
                    <h3>Total Price</h3>
                    <p className="ml-4 text-xl font-semibold text-gray-600">
                      Rs. {parseInt(product?.discounted_price) + parseInt(lens?.price)}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs tracking-wide">
                  <button
                    type="button"
                    onClick={() => removeItem(product?.p_id)}
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

export default CartSingleItem;
