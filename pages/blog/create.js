import UploadImage from '@/Components/Global/UploadImage'
import { Button, Input, Textarea } from '@material-tailwind/react'
import React from 'react'

const createBlog = () => {
  return (
    <div className='w-[90%]'>
        <div className="w-full space-y-5 text-gray-700 ">
            <h1 className="text-xl font-semibold tracking-wide text-center">Upload Image</h1>
            <div className="space-y-4">
                <p className="text-sm tracking-wide font-semibold">You can easily upload your file in any of the following formats: PDF, JPG, GIF, PNG, JPEG</p>
                <div className="w-[90%] mx-auto"><UploadImage /></div>
                
                <h1>
                  <Input label="Heading" />
                </h1>

                <div>
                    <Textarea label="Additionals Comments...." />
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default createBlog