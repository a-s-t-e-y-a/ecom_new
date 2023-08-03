import React from 'react'
import {TbEdit} from "react-icons/tb"
import {MdDelete} from "react-icons/md"

const data = [
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
  {OrderDate:"01/01/2012  02:30 pm",OrderId:235,Name: "Sophia swamy ",FrameProductId:1452,Lens:"circle",CoupneCode:"free200",Amount: "Rs300",Mobile: 123456987 ,Prescription:"Yes"},
]
const OrderedTable = () => {
  return (
    <div className='w-full tracking-wide h-[70vh] overflow-y-scroll scrollbar-hide border'>
      <table className="h-[30vh] shadow-md table-auto border-collapse border border-slate-400 w-full relative">
        <thead className='border border-slate-400 text-sm font-normal text-gray-700 sticky top-0 bg-white '>
          <tr className='py-2 border border-slate-400'>
            <th className="border border-slate-300 py-2 ">Order Date</th>
            <th className="border border-slate-300 py-2 ">Order Id</th>
            <th className="border border-slate-300 py-2 ">Name</th>
            <th className="border border-slate-300 py-2 ">FID</th>
            <th className="border border-slate-300 py-2 ">Lens</th>
            <th className="border border-slate-300 py-2 ">Coupon Code</th>
            <th className="border border-slate-300 py-2 ">Amount</th>
            <th className="border border-slate-300 py-2 ">Mobile</th>
            <th className="border border-slate-300 py-2 ">Prescription</th>
            <th className="border border-slate-300 py-2 ">Action</th>
          </tr>
        </thead>
        <tbody className='text-xs text-gray-600 text-center overflow-scroll mt-10'>
          {
            data.map((data,index)=>(
              <tr className='' key={index}>
            <td className="border border-slate-300 py-2">{data.OrderDate}</td>
            <td className="border border-slate-300 py-2">{data.OrderId}</td>
            <td className="border border-slate-300 py-2">{data.Name}</td>
            <td className="border border-slate-300 py-2">{data.FrameProductId}</td>
            <td className="border border-slate-300 py-2">{data.Lens}</td>
            <td className="border border-slate-300 py-2">{data.CoupneCode}</td>
            <td className="border border-slate-300 py-2">{data.Amount}</td>
            <td className="border border-slate-300 py-2">{data.Mobile}</td>
            <td className="border border-slate-300 py-2">{data.Prescription}</td>
            <td className="border border-slate-300 py-2">
              <div className='flex items-center justify-center gap-3 text-md '>
                <span className='text-blue-600 cursor-pointer'><TbEdit /></span>
                <span className='text-orange-600 cursor-pointer'><MdDelete /></span>
              </div>
            </td>
          </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default OrderedTable