import IconButton from '@/components/Admin/IconButton'
import QuillEditor from '@/components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { MdPolicy } from 'react-icons/md'

const EasyReturnPolicy = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Easy Return Policy" icon={<MdPolicy/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default EasyReturnPolicy