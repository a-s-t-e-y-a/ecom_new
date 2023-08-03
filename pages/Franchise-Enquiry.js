import Layout from "@/Layout/Layout";
import { Option, Select } from "@material-tailwind/react";
import React from "react";

const FranchiseEnquiry = () => {
  return (
    <Layout>
      <div className="text-gray-700 w-[85%] mx-auto">
        <h1 className="text-5xl font-bold tracking-wider text-center">
          Franchise
        </h1>
        <div className="mt-12 tracking-wide">
          <h1 className="text-center font-semibold text-3xl">
            Eyeglass Optical Franchise for Best investment for long Term
          </h1>
          <div className="mt-8 pr-6">
            <div className="grid grid-cols-3 justify-between">
              <div className="col-span-2 space-y-7">
                <p>
                  Hii We only give you to start your optical business at just up
                  to 7-10 Lakh. Eyeglass Optical Franchise for the Best
                  investment for long Term
                </p>
                <div>
                  <p className="font-semibold text-xl mb-2">
                    Various advantages to choosing the Akkukachasma.com
                  </p>
                  <ul className="list-disc text-[15px] text-gray-600 space-y-1">
                    <li className="ml-8">
                      In 2013 established names in the online and offline
                      optical field.
                    </li>
                    <li className="ml-8">
                      Low investment, at the same time high return business
                      proposition.
                    </li>
                    <li className="ml-8">
                      A mixed range of premium eyewear and designs.
                    </li>
                    <li className="ml-8">
                      Franchisee owners take 35% of net sales.
                    </li>
                  </ul>
                </div>
                <p className="text-justify">
                  From 2009 offline work and 2013 Online Akkukachasma.com is
                  India’s eyewear business nowadays. We are always ready to give
                  to all over the India optical shop franchise store with all
                  the facilities. We are looking for entrepreneurs and investors
                  For Retail, Doctor chain stores, and Marketing, with maximum
                  satisfaction in the market. We are trying to Sale both the
                  marketplace (Online/Offline). There is a new vision we never
                  promote any brand frame because now in the market every single
                  is ready to print their own logo so we are always providing a
                  better frame with a reasonable cost that makes us different.
                </p>

                <div className="space-y-3">
                  <h2 className="font-semibold text-xl mb-2">
                    About Akkukachasma.com
                  </h2>
                  <p className="text-justify">
                    Akkukachasma.com gives you Eyeglasses, Computer lenses,
                    Progressive glasses, Sun protection lenses UV400 Sunglasses,
                    Contact lenses, color contact lenses, and Prescription
                    Eyeglasses lenses. No matter what the price might be we
                    always give you the best product with eye specialists member
                    Eyecare product is available with a wide range of satisfied
                    and highly recommended eye doctors. Lowest price promise
                    because Akkukachasma.com team is always active for
                    inspection around the local market and online market price
                    of the item over 1500 selected items eyeglasses This site is
                    truly a reputable eyewear merchant that provides you frame
                    and lens of detail for our customers.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="font-semibold text-xl mb-2">
                    OUR SUPPORT & BENEFITS
                  </h2>
                  <ul className="list-disc text-[15px] text-gray-600 space-y-1">
                    <li className="ml-8">Stock and maintenance.</li>
                    <li className="ml-8">
                      All India delivery 5-6 days service provides.
                    </li>
                    <li className="ml-8">
                      Maintain our Mix Brand and service.
                    </li>
                    <li className="ml-8">Fully Shop furnishing.</li>
                    <li className="ml-8">Training</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="font-semibold text-xl mb-2">
                    REQUIREMENTS and Investment{" "}
                  </h2>
                  <p className="text-justify">
                    Between 100-500 square feet.
                    <br />
                    Any Educated person /Businessman/EntrepreneurInvestment: INR
                    Up to 7-10 lakhsNo franchise fee.
                  </p>
                </div>
              </div>

              <div className="col-span-1">
                <img src="/franchise1.png" className="" />
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <h1 className="text-center text-4xl tracking-wide font-bold">
                Submit Here
              </h1>
              <div>
                <form className="w-full">
                  <div className="grid grid-cols-8 gap-10">
                    <div className="col-span-4 gap-8">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="superarea"
                          id="superarea"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="superarea"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Super Area
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="carpetarea"
                          id="carpetarea"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="carpetarea"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Carpet Area
                        </label>
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

                      <div className="relative h-10  min-w-[200px]">
                        <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                          <option value="brazil">Lander</option>
                          <option value="bucharest">Another</option>
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:border-gray-500 peer-focus:after:border-t-1 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Type
                        </label>
                      </div>

                      <div className="relative w-full min-w-[200px]">
                        <textarea
                          className="block py-2 px-0 w-full h-40 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                        ></textarea>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Message
                        </label>
                      </div>
                    </div>
                    <div className="col-span-4">
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
                      <div className="flex items-center justify-between gap-6">
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
                      <div className="relative h-10  min-w-[200px]">
                        <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                          <option value="brazil">Market</option>
                          <option value="bucharest">Collage</option>
                          <option value="london">Shop</option>
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:border-gray-500 peer-focus:after:border-t-1 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Near By
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 px-4 py-1 bg-gray-600 text-white rounded-md text-center">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchiseEnquiry;
