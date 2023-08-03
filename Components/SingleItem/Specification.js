import React from 'react'

const Specification = ({ data }) => {
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
              data.map((item, index) => (
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