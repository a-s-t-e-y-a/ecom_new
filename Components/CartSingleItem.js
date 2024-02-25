import { env } from "@/next.config";
import axios from "axios";
import { useEffect, useState } from "react";

const CartSingleItem = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { BASE_URL } = env
  // const user_info = JSON.parse(localStorage.getItem("user_info"));
  // console.log(user_info)
  const removeItem = (id) => {
    axios
      .delete(`${BASE_URL}cart/${id}`, {
        headers: {
          authorization: `Bearer ${user_info}`,
        },
      })
      .then((result) => {
        if (result?.data?.message == "Data fetch successfully") {
          fetchData();
        }
      });
  };

  // const fetchData = () => {
  //   axios
  //     .get(`${BASE_URL}cart`, {
  //       headers: {
  //         authorization: `Bearer ${user_info}`,
  //       },
  //     })
  //     .then((result) => {
  //       setCartProducts(result?.data?.data);
  //     });

  // }

    const localGetData= async ()=>{
      const value = localStorage.getItem('Productid')
      console.log(value + `abc`);
      // setCartProducts({value})
    }
  useEffect(() => {
    // fetchData()
    localGetData()
  }, []);
  return (
    <div>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartProducts.map((product) => {
              return (
                <li key={product.id} className="flex py-6">
                  <div className="h-16 w-32 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                    <img
                      src="/1 (3).jpeg"
                      alt=""
                      className="h-full w-full object-fit object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col tracking-wide">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3><a href={product.href}>{product.name}</a></h3>
                        <p className="ml-4 text-gray-600">{product.price}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3><a href={product.href}>{product.lens}</a></h3>
                        <p className="ml-4 text-gray-600">Rs. {product.lensprice}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3>Total Price</h3>
                        <p className="ml-4 text-gray-600">Rs. {product?.product_Id?.discounted_price}</p>
                      </div>
                    </div>
                    <div className="flex text-xs tracking-wide">
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="font-medium text-orange-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartSingleItem;
