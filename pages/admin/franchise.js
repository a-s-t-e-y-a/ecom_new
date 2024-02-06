import IconButton from '@/Components/Admin/IconButton'
import QuillEditor from '@/Components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { MdOutlineCurrencyFranc } from 'react-icons/md';


const FranchisePage = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Franchise Page" icon={<MdOutlineCurrencyFranc/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default FranchisePage