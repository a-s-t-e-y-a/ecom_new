import React from 'react'
import SinglePowerType from '../Lens/SinglePowerType'

const LensFormStep2 = ({ onNext,  onPrev,}) => {
  return (
    <div className='space-y-6 text-gray-800 w-[100%] h-[100vh] mt-20'>
        <h1 className='text-xl font-semibold tracking-wide text-center'>Select Lens Feature</h1>
        <div className='space-y-3 h-[320px] overflow-auto scrollbar-hide'>
            <SinglePowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
            <SinglePowerType src="/1 (2).jpeg" title="Zero Power Eyeglasses" description="Fashion or Protection from Glare/Computer Screens etc." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
        </div>

        <div className='flex items-center justify-between pt-7 w-[81%] mx-auto'>
            <button 
                onClick={onPrev}
                className='px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto'
            >
                Previous
            </button>
            <button 
                onClick={onNext}
                className='px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto'
            >
                Continue
            </button>
        </div>

    </div>
  )
}

export default LensFormStep2