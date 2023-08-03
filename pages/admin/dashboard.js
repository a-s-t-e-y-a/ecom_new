import DashboardSingleItem from '@/Components/Admin/DashboardSingleItem'
import AdminLayout from '@/Layout/AdminLayout'
import React from 'react'

const items = [
    {color:"bg-blue-300",title : "Total Product Catagories" , number : 7 , src : "/shop.png"},
    {color:"bg-pink-300",title : "Total Product Brands" , number : 2 , src : "/brand.png"},
    {color:"bg-lime-300",title : "Total Product Detail" , number : 1817 , src : "/package-delivery.png"},
    {color:"bg-cyan-300",title : "User Registrations" , number : 5891 , src : "/man.png"},
    {color:"bg-purple-300",title : "Total Product Catagories" , number : 7 , src : "/shop.png"},
    {color:"bg-yellow-300",title : "Total Subscribed Email" , number : 123 , src : "/subscribe.png"},
    {color:"bg-indigo-300",title : "Total Enquiry" , number : 11025 , src : "/questions.png"},
]
const dashboard = () => {
  return (
    <AdminLayout>
        <div className='space-y-6'>
            <div className='flex items-center' >
                <h1 className='text-4xl font-bold tracking-wide'>Dashboard</h1>
                <div></div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    items.map((item,id)=>(
                        <div key={id}>
                            <DashboardSingleItem color={item.color} title={item.title} number={item.number} src={item.src} />
                        </div>
                    ))
                }
                
            </div>
        </div>
    </AdminLayout>
  )
}

export default dashboard