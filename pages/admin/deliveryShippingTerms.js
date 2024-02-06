import IconButton from '@/Components/Admin/IconButton'
import QuillEditor from '@/Components/Admin/QuillEditor'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'

const DeliveryShippingTerms = () => {
  return (
    <AdminLayout>
        <div>
            <div>
                <IconButton label="Delivery Shipping Terms" icon={<TbTruckReturn/>}/>
            </div>
            <div className='mt-6 flex items-center gap-3 flex-wrap w-full'>
                <QuillEditor />
            </div>
        </div>
    </AdminLayout>
  )
}

export default DeliveryShippingTerms