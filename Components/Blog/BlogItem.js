import React from 'react'

const BlogItem = () => {
  return (
    <div className="">
        <div className="bg-white shadow-md p-3 rounded-lg">
          <img className="h-36 rounded w-full object-fit object-center mb-4" src="/blog2.jpeg" alt="content" />
          <h2 className="text-lg text-gray-900 font-bold">San Francisco</h2>
          <h3 className="text-gray-500 text-[10px] mb-1  tracking-wide">26 Jan 2023</h3>
          <p className="text-sm font-sm tracking-wide">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
  )
}

export default BlogItem;