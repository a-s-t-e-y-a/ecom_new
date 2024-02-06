import IconButton from '@/Components/Admin/IconButton'
import QuillEditor from '@/Components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { HiOutlineReceiptRefund } from 'react-icons/hi'

const RefundPolicy = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Refund Policy" icon={<HiOutlineReceiptRefund/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default RefundPolicy