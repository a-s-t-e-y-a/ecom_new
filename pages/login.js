import Image from "next/image";
import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { env } from "@/next.config";
import { toast } from "react-toastify";

export default function Example() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { BASE_URL } = env;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, {
        email: data?.email,
        password: data?.password,
      });
      if (response?.data?.data) {
        localStorage.setItem(
          "user_info",
          JSON.stringify(response?.data?.data?.token)
        );
        localStorage.setItem(
          "user_data",
          JSON.stringify(response?.data?.data?.info_user)
        );
        router.push("/");
      } else {
        toast.error("User not exist");
      }
      // Depending on the response, you can do:
    } catch (error) {
      toast.error(error);
      // setMessage(error.response?.data?.message || 'Invalid credential'); // Set error message from API or a generic one
    }
  };
  return (
    <section className="bg-gray-50 ">
      <Card
        color="transparent"
        className=" flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0"
      >
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className=""
            src="/logo.png"
            alt="Logo"
            height={200}
            width={350}
            priority
            onClick={() => router.push("/")}
          />
        </a>
        <Card className="px-6 py-6 rounded-lg">
          <Typography color="blue-gray" className="text-sm font-semibold">
            Join with Us
          </Typography>
          <Typography
            color="gray"
            className="text-xl font-semibold tracking-wider"
          >
            Login Now
          </Typography>
          <form
            className="mt-8 mb-2 w-80 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-auto">
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full pl-5 py-2.5  focus:outline-none focus:ring-0"
                icon={
                  <BsFillPersonFill className="text-gray-600 relative top-3" />
                }
                {...register("email", { required: true })}
              />
            </div>

            <div className="w-auto">
              <Input
                label="Password"
                type={show ? "type" : "password"}
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-0"
                required=""
                icon={
                  show ? (
                    <AiFillEye
                      onClick={() => setShow(!show)}
                      className="text-gray-600"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={() => setShow(!show)}
                      className="text-gray-600 relative top-3"
                    />
                  )
                }
                {...register("password", { required: true })}
              />
            </div>

            <div class="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <Button
              type="submit"
              className="my-6 bg-gray-900 text-white py-2 text-sm font-normal tracking-wider"
              fullWidth
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Create an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                onClick={() => router.push("/register")}
              >
                Register
              </a>
            </Typography>
          </form>
        </Card>
      </Card>
    </section>
  );
}
