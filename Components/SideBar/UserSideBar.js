import { Typography } from '@material-tailwind/react'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdBusinessCenter } from 'react-icons/md'
import { RiContactsBook2Line } from 'react-icons/ri'
import { useRouter } from "next/router"
import Link from 'next/link'

const UserSideBar = () => {
  const router = useRouter()
  return (
    <div className='w-[240px] h-full py-7 flex flex-col gap-5 shadow-md'>
        <Link 
          href={`/user`}
          className={` flex items-center gap-3 cursor-pointer rounded-md py-2 px-2 hover:duration-300 hover:bg-gray-100  hover:border-l-8 hover:border-l-gray-600`}>
          <HiOutlineUserCircle  className="h-5 w-5 text-gray-700 outline-none ring-0" />
          <Typography variant="small" className="font-normal tracking-wide">
            Account Information
          </Typography>
        </Link>
        <Link 
          href={`/user/myorder`}
          className='flex items-center gap-3 cursor-pointer  hover:bg-gray-100 rounded-md py-2 px-2 hover:duration-300 hover:border-l-8 hover:border-l-gray-600'>
          <MdBusinessCenter  className="h-5 w-5 text-gray-700 outline-none ring-0" />
          <Typography variant="small" className="font-normal tracking-wide">
            My Orders
          </Typography>
        </Link>
        <Link 
          href={`/user/addressbooks`}
          className='flex items-center gap-3 cursor-pointer  hover:bg-gray-100 rounded-md py-2 px-2 hover:duration-300 hover:border-l-8 hover:border-l-gray-600'>
          <RiContactsBook2Line  className="h-5 w-5 text-gray-700 outline-none ring-0" />
          <Typography variant="small" className="font-normal tracking-wide">
            Address Books
          </Typography>
        </Link>
        {/* <div 
          onClick={()=>router.push(`/user/prescription`)}
          className='flex items-center gap-3 cursor-pointer  hover:bg-gray-100 rounded-md py-2 px-2 hover:border-l-8 hover:border-l-gray-600'>
          <BsPrescription2  className="h-5 w-5 text-gray-700 outline-none ring-0" />
          <Typography variant="small" className="font-normal tracking-wide">
            My Prescriptions
          </Typography>
        </div> */}
    </div>
  )
}



export default UserSideBar