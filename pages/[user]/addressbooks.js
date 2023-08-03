import React, { useState } from 'react'
import { Avatar } from "@material-tailwind/react";
import UserSideBar from '@/Components/SideBar/UserSideBar';
import {BsPlus} from "react-icons/bs"
import FormDialog from '@/Components/Dialog/FormDialog';
import {HiPencil} from "react-icons/hi"
import {MdDeleteForever} from "react-icons/md"

const addressBook = []

const addressbooks = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className='w-[95%] h-screen mx-auto text-gray-700  flex flex-col'>
        {/* Header  */}
        <div className='flex gap-5 h-1/6 pt-10'>
            <Avatar src="/favicon.ico" alt="avatar" variant="circular"  className='w-11 h-11'/>
            <div>
                <h1 className='font-semibold tracking-wider text-2xl'>Ankit Singh</h1>
                <h2 className='font-normal text-md'>ankit@gmail.com</h2>
            </div>
        </div>

        <div className='flex items-center gap-5 h-5/6 pt-2'>
            <div className='h-full'>
                <UserSideBar />
            </div>
            <div className='h-full w-full'>
                <h1 className='font-semibold text-xl tracking-wide'> Saved Address</h1>

                <span className='block py-4'>
                    <hr />
                </span>

                <button 
                    onClick={handleOpen}
                    className='flex items-center gap-1 border bg-gray-200 px-3 py-1 rounded-md text-indigo-800 font-semibold transition duration-300 transform active:scale-95 ease-in-out'
                >
                    <span className='text-xl font-bold'><BsPlus /></span>
                    <span className='text-sm'>Add New Address </span>
                </button>

                <div className='w-full'>
                    <FormDialog open={open} setOpen={setOpen} handleOpen={handleOpen}/>
                </div>


                {/* Save Address  */}
                <div className=' relative w-[70%] text-sm mt-5 border p-2 rounded-md space-y-2 pl-5'>
                    <div className='space-y-1'>
                        <p>Name</p>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                        <p className='flex items-center gap-3'>
                            <span>City</span>
                            <span>State</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <span>Pin Code</span>
                            <span>Country</span>
                        </p>
                    </div>
                    <div className='absolute top-2 right-2 text-lg text-gray-700 font-semibold gap-1 flex items-center'>
                        <span><HiPencil /></span>
                        <span><MdDeleteForever /></span>
                    </div>
                </div>

                <div className=' relative w-[70%] text-sm mt-5 border p-2 rounded-md space-y-2 pl-5'>
                    <div className='space-y-1'>
                        <p>Name</p>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                        <p className='flex items-center gap-3'>
                            <span>City</span>
                            <span>State</span>
                        </p>
                        <p className='flex items-center gap-3'>
                            <span>Pin Code</span>
                            <span>Country</span>
                        </p>
                    </div>
                    <div className='absolute top-2 right-2 text-lg text-gray-700 font-semibold gap-1 flex items-center'>
                        <span><HiPencil /></span>
                        <span><MdDeleteForever /></span>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default addressbooks