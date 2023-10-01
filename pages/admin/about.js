import IconButton from '@/components/Admin/IconButton'
import QuillEditor from '@/components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { FcAbout } from 'react-icons/fc';


const AboutPage = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="About Page" icon={<FcAbout/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default AboutPage