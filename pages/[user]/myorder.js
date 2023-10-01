import React from 'react'
import { Avatar } from "@material-tailwind/react";
import UserSideBar from '@/components/SideBar/UserSideBar';
import MyOrder from '@/components/User/MyOrder';

const myorder = () => {
  return (
    <div className='w-[95%] h-screen mx-auto text-gray-700 overflow-hidden flex flex-col'>

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
                <MyOrder />
            </div>

        </div>

    </div>
  )
}

export default myorder