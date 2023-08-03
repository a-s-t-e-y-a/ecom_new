import React, { useState } from 'react'
import { Avatar } from "@material-tailwind/react";
import UserSideBar from '@/Components/SideBar/UserSideBar';
import { HiOutlineDocumentPlus } from "react-icons/hi2"
import { VscCloudUpload } from "react-icons/vsc"
import PrescriptionFormDialog from '@/Components/Dialog/PrescriptionFormDialog';
import PrescriptionImgDialog from '@/Components/Dialog/PrescriptionImgDialog';


const prescription = () => {
    const [openPreForm, setOpenPreForm] = useState(false);
    const [openPreImg, setOpenPreImg] = useState(false);
    const handleOpenForm = () => setOpenPreForm(!openPreForm);
    const handleOpenImg = () => setOpenPreImg(!openPreImg);

    return (
        <div className='w-[95%] h-screen mx-auto text-gray-700 overflow-hidden flex flex-col'>

            {/* Header  */}
            <div className='flex gap-5 h-1/6 pt-10'>
                <Avatar src="/favicon.ico" alt="avatar" variant="circular" className='w-11 h-11' />
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
                    <div >
                        <h1 className='text-xl font-semibold'>Add Your Prescription</h1>

                        <span className='p-3'>
                            <hr />
                        </span>

                        <div className='w-[60%] pt-3 space-y-3'>

                            <div
                                onClick={handleOpenForm}
                                className='cursor-pointer bg-white p-4 flex items-center justify-between border border-md tracking-wide'>
                                <div className='space-y-1'>
                                    <p className="font-semibold">Fill it Online</p>
                                    <p className='text-sm'>Fill it manually according to your printed prescription</p>
                                </div>
                                <div className='text-6xl font-light text-gray-700'>
                                    <HiOutlineDocumentPlus className='font-thin text-gray-700 outline-0' />
                                </div>
                            </div>

                            <div
                                onClick={handleOpenImg}
                                className='cursor-pointer bg-white p-4 flex items-center justify-between border border-md tracking-wide'>
                                <div className='space-y-1'>
                                    <p className="font-semibold">Upload Image</p>
                                    <p className='text-sm'>Uplod your prescription as an Image</p>
                                </div>
                                <div className='text-6xl font-light text-gray-700'>
                                    <VscCloudUpload className='font-thin text-gray-700 outline-0' />
                                </div>
                            </div>


                             {/* Dialog Container */}
                            <div className='w-full'>
                                <PrescriptionFormDialog openPreForm={openPreForm} setOpenPreForm={setOpenPreForm} handleOpenForm={handleOpenForm} />
                                <PrescriptionImgDialog openPreImg={openPreImg} setOpenPreImg={setOpenPreImg} handleOpenImg={handleOpenImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default prescription