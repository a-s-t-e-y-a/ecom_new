import IconButton from '@/Components/Admin/IconButton'
import QuillEditor from '@/Components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { RiBook2Fill } from 'react-icons/ri'

const GuideToBuy = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Guide To Buy" icon={<RiBook2Fill/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default GuideToBuy