import Image from 'next/image'
import React, { useState } from 'react'
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';


export default function Example() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='bg-gray-50 '>
            <Card color="transparent" className="border-2 border-gray-500 flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image 
                        className="" 
                        src="/logo.png" 
                        alt="Logo" height={200} width={350} priority 
                        onClick={()=>router.push("/")}
                    />
                        
                </a>
                <Card className='px-6 py-6 border-2 rounded-lg'>
                    <Typography color="blue-gray" className="text-sm font-semibold">
                        Join with Us
                    </Typography>
                    <Typography color="gray" className="text-xl font-semibold tracking-wider">
                        Login Now
                    </Typography>
                    <form className="mt-8 mb-2 w-80 space-y-4" onSubmit={handleSubmit(onSubmit)}>

                        {/* <div class="w-72">
                            <div class="relative h-10 w-full min-w-[200px]">
                                <div class="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </div>
                                <input
                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Input With Icon
                                </label>
                            </div>
                        </div> */}
                        <div className="w-auto">
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5  focus:outline-none focus:ring-0"
                                icon={<BsFillPersonFill className='text-gray-600' />}
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="w-auto">
                            <Input
                                label="Password"
                                type={show ? 'type' : "password"}
                                name="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-0" required=""
                                icon={show ? <AiFillEye onClick={() => setShow(!show)} className='text-gray-600' /> : <AiFillEyeInvisible onClick={() => setShow(!show)} className='text-gray-600' />}
                                {...register("password", { required: true })}
                            />
                        </div>

                        <div className="w-auto">
                            <Input
                                label="Confirm Password"
                                type={show ? 'type' : "password"}
                                name="confirm-password"
                                id="confirm-password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   w-full p-2.5 focus:outline-none focus:ring-0" required=""
                                icon={show ? <AiFillEye onClick={() => setShow(!show)} className='text-gray-600' /> : <AiFillEyeInvisible onClick={() => setShow(!show)} className='text-gray-600' />}
                                {...register("confirm-password", { required: true })}
                            />
                        </div>

                        <div class="flex items-center">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "

                            />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                        </div>
                        <Button type="submit" className="my-6 bg-gray-900 text-white py-2 text-sm font-normal tracking-wider" fullWidth>
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