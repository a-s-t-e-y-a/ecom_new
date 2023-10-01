import IconButton from '@/components/Admin/IconButton'
import QuillEditor from '@/components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'

const TryAtHome = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Try@Home" icon={<HiOutlineHome/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default TryAtHome