// import axios from "axios";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// const CartSingleItem = () => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const router = useRouter();
//   const user_info = "your_user_token"; // Replace with actual user token logic
//   const BASE_URL = "your_base_url"; // Replace with your actual base URL

//   const removeItem = (id) => {
//     axios
//       .delete(`${BASE_URL}cart/${id}`, {
//         headers: {
//           authorization: `Bearer ${user_info}`,
//         },
//       })
//       .then((result) => {
//         if (result?.data?.message == "Data fetch successfully") {
//           fetchData();
//         }
//       });
//   };
//   const addToCart = (item) => {
//     axios
//       .post(
//         `${BASE_URL}cart`,
//         { ...item, quantity: 1 },
//         {
//           headers: {
//             authorization: `Bearer ${user_info}`,
//           },
//         }
//       )
//       .then((result) => {
//         if (result?.data?.message == "Item added to cart successfully") {
//           fetchData();
//         }
//       });
//   };

//   const fetchData = () => {
//     axios
//       .get(`${BASE_URL}cart`, {
//         headers: {
//           authorization: `Bearer ${user_info}`,
//         },
//       })
//       .then((result) => {
//         setCartProducts(result?.data?.data);
//       });

//   }

//   const localGetData = async () => {
//     const value = localStorage.getItem("Productid");
//     setCartProducts((prev) => [...prev, value]); // Assuming value is a product ID or product object
//   };
//   };
//   useEffect(() => {
//     fetchData();
//     localGetData();
//   }, []);
//   return (
//     <div>
//       <div className="mt-8">
//         <div className="flow-root">
//           <ul role="list" className="-my-6 divide-y divide-gray-200">
//             {cartProducts.map((product) => {
//               return (
//                 <li key={product.id} className="flex py-6">
//                   <div className="h-16 w-32 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
//                     <Image
//                       width={100}
//                       height={100}
//                       src={"/1 (3).jpeg"}
//                       alt=""
//                       className="h-full w-full object-fit object-center"
//                     />
//                   </div>

//                   <div className="ml-4 flex flex-1 flex-col tracking-wide">
//                     <div>
//                       <div className="flex justify-between text-sm font-medium text-gray-900">
//                         <h3>
//                           <a href={product.href}>{product.name}</a>
//                         </h3>
//                         <p className="ml-4 text-gray-600">{product.price}</p>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm font-medium text-gray-900">
//                         <h3>
//                           <a href={product.href}>{product.lens}</a>
//                         </h3>
//                         <p className="ml-4 text-gray-600">
//                           Rs. {product.lensprice}
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm font-medium text-gray-900">
//                         <h3>Total Price</h3>
//                         <p className="ml-4 text-gray-600">
//                           Rs. {product?.product_Id?.discounted_price}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex text-xs tracking-wide">
//                       <button
//                         type="button"
//                         onClick={() => removeItem(product.id)}
//                         className="font-medium text-orange-600 hover:text-indigo-500"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartSingleItem;



import { useMutation, useQueryClient } from 'react-query';
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useAddCartToSession from '@/utils/mutations/useAddToCart';

const CartSingleItem = ({item}) => {
  console.log(item)
  const [cartProducts, setCartProducts] = useState([]);
  const router = useRouter();
  const user_info = "your_user_token"; // Replace with actual user token logic
  const BASE_URL = "your_base_url"; // Replace with your actual base URL
  const { mutate: addToCart } = useAddCartToSession();
  const handleAddToCart = (item) => {
    addToCart(item);
  };

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

  // const addToCart = (item) => {
  //   axios
  //     .post(
  //       `${BASE_URL}cart`,
  //       { ...item, quantity: 1 },
  //       {
  //         headers: {
  //           authorization: `Bearer ${user_info}`,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       if (result?.data?.message == "Item added to cart successfully") {
  //         fetchData();
  //       }
  //     });
  // };

  const fetchData = () => {
    axios
      .get(`${BASE_URL}cart`, {
        headers: {
          authorization: `Bearer ${user_info}`,
        },
      })
      .then((result) => {
        setCartProducts(result?.data?.data);
      });
  };

  const localGetData = async () => {
    const value = localStorage.getItem("Productid");
    setCartProducts((prev) => [...prev, value]); // Assuming value is a product ID or product object
  };

  useEffect(() => {
    fetchData();
    localGetData();
  }, []);

  return (
    <div>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartProducts?.map((product) => {
              return (
                <li key={product?.id} className="flex py-6">
                  <div className="h-16 w-32 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                    <Image
                      width={100}
                      height={100}
                      src={"/1 (3).jpeg"}
                      alt=""
                      className="h-full w-full object-fit object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col tracking-wide">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3>
                          <a href={product?.href}>{product?.name}</a>
                        </h3>
                        <p className="ml-4 text-gray-600">{product?.price}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3>
                          <a href={product?.href}>{product?.lens}</a>
                        </h3>
                        <p className="ml-4 text-gray-600">
                          Rs. {product?.lensprice}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3>Total Price</h3>
                        <p className="ml-4 text-gray-600">
                          Rs. {product?.product_Id?.discounted_price}
                        </p>
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
                      <button
                        type="button"
                        onClick={() => handleAddToCart(yourItem)}
                        className="ml-4 font-medium text-blue-600 hover:text-indigo-500"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartSingleItem;
