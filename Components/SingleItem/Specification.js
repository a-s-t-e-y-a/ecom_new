import React from 'react'

const Specification = () => {

  const SpecificationData = [
    {title : "Frame Material " , value : "Metal "},
    {title : "Lens Material " , value : "Demo Polycarbonate "},
    {title : "Frame Color " , value : "Black "},
    {title : "Collection " , value : "Trend "},
    {title : "Shape " , value : "Round "},
    {title : "Gender " , value : "Both (M/F) "},
    {title : "Style " , value : "Full Frame "},
    {title : "Product Id " , value : "2303 "},
    {title : "Product Type " , value : "Eyeglasses "},
    {title : "Packaged by " , value : "akku ka chasma India "},
    {title : "Raw Material Sourced from " , value : "Imported [International] "},
    {title : "Know Your Size " , value : "Click "},
]

  return (
    <div className='w-full'>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className=""></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className='flec flex-col gap-4'>
            {
              SpecificationData.map((item, index) => (
                  <tr key={index}>
                    <td className="border font-semibold px-4 py-[5px]">{item.title}</td>
                    <td className="border text-sm px-4 py-[5px]">{item.value}</td>
                  </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Specification