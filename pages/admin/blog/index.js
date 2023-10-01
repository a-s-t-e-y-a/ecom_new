import IconButton from '@/components/Admin/IconButton'
import BlogItem from '@/components/Blog/BlogItem';
import AdminLayout from '@/Layout/AdminLayout'
import { useRouter } from 'next/router';
import React from 'react'
import { FaBlog} from "react-icons/fa";



const Blog = () => {
  

  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Add Blog" icon={<FaBlog/>}/>
            </div>
            <div className='pt-5 grid grid-cols-3 items-center gap-5  h-[497px] overflow-auto scrollbar-hide '>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
        </div>
    </AdminLayout>
  )
}

export default Blog