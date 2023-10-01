import React from 'react'
import {TbEdit} from "react-icons/tb"
import {MdDelete} from "react-icons/md"

const data = [
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
    {SNo:1,InStock:"In Stock",Quantity:10,Categories:"Rounded",Brand:"Mine",ModalNumber:1241,Price:230,Shape:"Rounded",FrameMaterial:"Metal",FrameWidth:23,LensWidth:10,LensHeight:9,Color:"Blue"},
]
const ProductDetailTable = () => {
  return (
    <div className='w-full tracking-wide h-[69vh] overflow-y-scroll scrollbar-hide border shadow-md'>
      <table className="table-auto w-full relative">
        <thead className=' text-xs font-normal text-gray-700 sticky -top-1 left-0 bg-white shadow-lg ng-blue-100'>
          <tr className=''>
            <th className="py-2 border">SNo.</th>
            <th className="py-2 border">Edit</th>
            <th className="py-2 border">Delete</th>
            <th className="py-2 border">In Stock</th>
            <th className="py-2 border">Quantity</th>
            <th className="py-2 border">Categories</th>
            <th className="py-2 border">Brand</th>
            <th className="py-2 border">Model No.</th>
            <th className="py-2 border">Price</th>
            <th className="py-2 border">Shape</th>
            <th className="py-2 border">F Material</th>
            <th className="py-2 border">F Width</th>
            <th className="py-2 border">L Width</th>
            <th className="py-2 border">L Height</th>
            <th className="py-2 border">Color</th>
          </tr>
        </thead>
        <tbody className='text-xs text-gray-600 text-center overflow-scroll'>
          {
            data.map((data,index)=>(
              <tr className='' key={index}>
            <td className="py-2 border">{data.SNo}</td>
            <td className="py-2 border">
                <span className="text-sky-600 flex items-center justify-center w-full cursor-pointer"><TbEdit /></span>
            </td>
            <td className="py-2 border">
                <span className="text-orange-600 flex items-center justify-center w-full cursor-pointer"><MdDelete /></span>
            </td>
            <td className="py-2 border">{data.InStock}</td>
            <td className="py-2 border">{data.Quantity}</td>
            <td className="py-2 border">{data.Categories}</td>
            <td className="py-2 border">{data.Brand}</td>
            <td className="py-2 border">{data.ModalNumber}</td>
            <td className="py-2 border">{data.Price}</td>
            <td className="py-2 border">{data.Shape}</td>
            <td className="py-2 border">{data.FrameMaterial}</td>
            <td className="py-2 border">{data.FrameWidth}</td>
            <td className="py-2 border">{data.LensWidth}</td>
            <td className="py-2 border">{data.LensHeight}</td>
            <td className="py-2 border">{data.Color}</td>
          </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default ProductDetailTable