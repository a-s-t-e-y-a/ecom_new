import OrderItem from "@/Components/OrderItem";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { isUserLoggedIn } from "@/utils/IsAuth";
import { useRouter } from "next/router";

const Checkout = () => {
  const [logged, setlogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isUserLoggedIn()) {
      setlogged(true);
    } else {
      router.replace("login");
    }
  }, [router]);
  
  if (!logged) {
    return (
      <div className="w-screen h-[100vh]">
        <div className="p-3">
          <div className="flex flex-col items-center justify-center py-5">
            <Image
              width={100}
              height={100}
              alt=""
              src={"/logo.png"}
              className="w-[420px]"
            />
            <span className="text-[12px] tracking-wider text-gray-500">
              Checkout with 100% safety
            </span>
          </div>
          <div className="grid grid-cols-6">
            <div className="h-[82vh] col-span-3 space-y-8 overflow-y-auto scrollbar-hide">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
            <div className="col-span-3">
              <div className="w-[95%] text-gray-700 tracking-wide">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold bg-gray-600 p-1 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        1
                      </span>
                      <span className="font-semibold text-xl">Delivery</span>
                    </div>
                    <span className="text-xs">
                      Already have a Akkukachasma Account ?{" "}
                      <span className="inline text-gray-700">SignIn Here</span>
                    </span>
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
                <div className="pt-6">
                  <h1 className="text-md font-semibold pb-4">
                    Shipping Address
                  </h1>
                  <form className="w-full">
                    <div className="flex items-center justify-center gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="firstname"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="lastname"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="email"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="phonenumber"
                          id="phonenumber"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="phonenumber"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone No.
                        </label>
                      </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="address"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Address
                      </label>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="city"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          City
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="state"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          State
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="pincode"
                          id="pincode"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="pincode"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Zip/Pin Code
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="country"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Country
                        </label>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="flex items-center justify-between mt-3 gap-5">
                  <div className="relative flex h-10 w-full min-w-[170px] max-w-[24rem]">
                    <input
                      type="text"
                      className="peer h-full w-full rounded-[7px] border border-gray-gray-200  bg-transparent px-3 py-2.5 pr-20  text-sm font-normal text-gray-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-gray-200 placeholder-shown:border-t-gray-gray-200  focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-gray-50"
                      placeholder=" "
                      required
                    />
                    <button
                      className="!absolute right-1 top-1 z-10 select-none rounded bg-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-gray-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Apply
                    </button>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:!border-gray-500 peer-focus:after:border-t-1 peer-focus:after:border-r-1 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-gray-500">
                      Enter Promocode
                    </label>
                  </div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Checkout;
