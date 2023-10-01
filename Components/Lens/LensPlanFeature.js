import React from 'react'
import UploadLensImage from '../Global/UploadLensImage'

const LensPlanFeature = () => {
  return (
    <div>
        <div>
        <ul className='text-xs tracking-wider text-gray-700'>
            <li className='text-center shadow-sm py-3 cursor-pointer tracking-wider h-[180px]'>
              <div className='tracking-wide space-y-2'>
                <div className='flex items-center justify-center rounded-full p-1 w-10 h-10 mx-auto'>
                  <UploadLensImage />
                </div>
                <span className='text-xs font-semibold'>Non Anti Glare</span>
                <div className='flex flex-col'>
                  <span className='text-lg tracking-wide font-semibold'>$990</span>
                  <span className='text-xs text-gray-500'>(Inclue Frame)</span>
                </div>
                <div>
                  <button className='text-xs px-4 py-1 text-white rounded-lg tracking-wider bg-gray-700'>Select This Lens</button>
                </div>
              </div>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>3 months</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>1.50 Index</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>upto +/-3</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>10%</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>12</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>45%</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>89%</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>98%</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>96%</span>
            </li>
            <li className='text-center shadow-sm px-3 py-[7px]'>
                <span>12356</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default LensPlanFeature