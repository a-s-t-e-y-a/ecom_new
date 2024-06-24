import SelectBox from "@/Components/ui/SelectBox";
import Layout from "@/Layout/Layout";
import useCreateEnquiry from "@/utils/mutations/useCreateEnquiry";
import useGetTryAtHome from "@/utils/queries/useGetTryAtHome";
import { Option, Select } from "@material-tailwind/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const TryAtHome = () => {
  const { data, isLoading, isError } = useGetTryAtHome();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const { mutate } = useCreateEnquiry();

  const onSubmit = (formData) => {
    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phonenumber: formData.phonenumber,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
      country: formData.country,
      services: formData.services.id,
    };
    mutate(payload);
    reset();
  };

  if (isLoading) {
    return <>Loading ....</>;
  }

  return (
    <Layout>
      <div className="text-5xl font-bold tracking-wider mb-8 text-center text-gray-700">
        Try@Home
      </div>
      <div className="mx-auto space-y-5 md:w-[500px] bg-white py-9 px-6 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wider text-center mb-6 text-gray-700">
          Personal Detail
        </h1>

        <form
          className="w-full mx-auto space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <Controller
              name="services"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <SelectBox
                    label="Select services"
                    options={data?.data}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            {errors.services && (
              <p className="text-red-500 text-sm">Services is required</p>
            )}
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("firstname", { required: true })}
              />
              <label
                htmlFor="firstname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
              {errors.firstname && (
                <p className="text-red-500 text-sm">First name is required</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("lastname", { required: true })}
              />
              <label
                htmlFor="lastname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name
              </label>
              {errors.lastname && (
                <p className="text-red-500 text-sm">Last name is required</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("email", { required: true })}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("phonenumber", { required: true })}
              />
              <label
                htmlFor="phonenumber"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone No.
              </label>
              {errors.phonenumber && (
                <p className="text-red-500 text-sm">Phone number is required</p>
              )}
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="address"
              id="address"
              className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              {...register("address", { required: true })}
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
            {errors.address && (
              <p className="text-red-500 text-sm">Address is required</p>
            )}
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                id="city"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("city", { required: true })}
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
              {errors.city && (
                <p className="text-red-500 text-sm">City is required</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="state"
                id="state"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("state", { required: true })}
              />
              <label
                htmlFor="state"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                State
              </label>
              {errors.state && (
                <p className="text-red-500 text-sm">State is required</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("zipcode", { required: true })}
              />
              <label
                htmlFor="zipcode"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Zip Code
              </label>
              {errors.zipcode && (
                <p className="text-red-500 text-sm">Zip code is required</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="country"
                id="country"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                {...register("country", { required: true })}
              />
              <label
                htmlFor="country"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
              {errors.country && (
                <p className="text-red-500 text-sm">Country is required</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default TryAtHome;
