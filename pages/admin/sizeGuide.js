import IconButton from '@/components/Admin/IconButton'
import QuillEditor from '@/components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { TbTextSize } from 'react-icons/tb'

const SizeGuide = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Size Guides" icon={<TbTextSize/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default SizeGuide