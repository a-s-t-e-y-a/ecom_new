import Layout from "@/Layout/Layout";
import React, { useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import useCreateFranchise from "@/utils/mutations/useCreateFranchise";
import SelectBox from "@/Components/ui/SelectBox";
import { nearBy, type } from "@/utils/contants";

const FranchiseEnquiry = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { mutate, isSuccess } = useCreateFranchise();

  useEffect(() => {}, [isSuccess]);

  const onSubmit = (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      superArea: data.superArea,
      carpetArea: data.carpetArea,
      message: data.message,
      nearby: data?.nearby?.name,
      type: data?.type?.name,
    };
    mutate(payload);
    if (isSuccess) reset();
  };

  return (
    <Layout>
      <div className="text-gray-700 md:w-[85%] md:mx-auto flex flex-col">
        <h1 className="text-5xl font-bold tracking-wider text-center">
          Franchise
        </h1>
        <div className="mt-12 tracking-wide">
          <h1 className="text-center font-semibold text-3xl">
            Eyeglass Optical Franchise for Best investment for long Term
          </h1>
          <div className="mt-8 pr-6">
            <div className="md:grid md:grid-cols-3 flex flex-col justify-between">
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
                    Up to 7-10 lakhs franchise fee.
                  </p>
                </div>
              </div>

              <div className="col-span-1">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src={"/franchise1.png"}
                  className=""
                />
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <h1 className="text-center text-4xl tracking-wide font-bold">
                Submit Here
              </h1>
              <div>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="md:grid md:grid-cols-8 md:gap-10 flex flex-col gap-4">
                    <div className="col-span-4">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("firstName", { required: true })}
                        />
                        <label
                          for="firstName"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("lastName", { required: true })}
                        />
                        <label
                          for="lastName"
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
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("email", { required: true })}
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
                          name="phone"
                          id="phone"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("phone", { required: true })}
                        />
                        <label
                          for="phone"
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
                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                            required
                            {...register("city", { required: true })}
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
                            className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                            required
                            {...register("state", { required: true })}
                          />
                          <label
                            for="state"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            State
                          </label>
                        </div>
                      </div>
                      <div className="relative mt-1 min-w-[200px]">
                        <Controller
                          name="nearby"
                          control={control}
                          render={({ field: { value, onChange } }) => {
                            return (
                              <SelectBox
                                label="Nearby area"
                                options={nearBy}
                                value={value}
                                onChange={onChange}
                              />
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-span-4 gap-8">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="superArea"
                          id="superArea"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("superArea", { required: true })}
                        />
                        <label
                          for="superArea"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Superarea (exm.: 1000 sqft.)
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="carpetArea"
                          id="carpetArea"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=""
                          required
                          {...register("carpetArea", { required: true })}
                        />
                        <label
                          for="carpetArea"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Carpet Area (exm.: 1000 sqft.)
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          required
                          {...register("address", { required: true })}
                        />
                        <label
                          for="address"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Address
                        </label>
                      </div>

                      <div className="relative h-10  min-w-[200px]">
                        <Controller
                          name="type"
                          control={control}
                          render={({ field: { value, onChange } }) => {
                            return (
                              <SelectBox
                                label="Select Franchie type"
                                options={type}
                                value={value}
                                onChange={onChange}
                              />
                            );
                          }}
                        />
                      </div>

                      <div className="relative w-full min-w-[200px] mt-1">
                        <textarea
                          className="block py-2 px-0 w-full h-[120px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                          placeholder=" "
                          {...register("message", { required: true })}
                        ></textarea>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Message
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 px-4 py-1 bg-gray-600 text-white rounded-md text-center  mb-8"
                  >
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
