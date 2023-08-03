import BlogItem from '@/Components/Blog/BlogItem'
import BlogSideBar from '@/Components/Blog/BlogSideBar'
import React from 'react'
import {useRouter} from "next/router"

const index = () => {
  const router = useRouter()

  return (
    <div className='w-screen h-screen bg-white'>
        <div className='text-gray-800 relative'>

            <span 
              className="absolute top-9 right-10 bg-gray-500 hover:bg-indigo-500 px-4 py-1 cursor-pointer text-white rounded-md tracking-wide font-semibold"
              onClick={()=>router.push("/blog/create")}
            >
              Create Blog
            </span>


            {/* Header/Heading */}
            <div className='flex flex-col items-center justify-center shadow-sm'>
                <img src="/blog.png" className='w-[180px]'/>
                <h1 className='text-sm tracking-wider -mt-4'>with @akkukachasma</h1>
                <span className='mt-3'><hr /></span>
            </div>

            {/* Body  */}
            <div className='flex p-5 w-full bg-gray-50'>
              <div className='grid grid-cols-3 gap-5 px-3 w-[75%]'>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
              <div className='w-[25%] mr-3 '>
                <BlogSideBar />
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default index