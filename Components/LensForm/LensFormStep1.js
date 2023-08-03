import React from 'react'
import SinglePowerType from '../Lens/SinglePowerType'

const LensFormStep1 = ({ onNext, onCancel }) => {
  return (
    <div className='space-y-6 text-gray-800 mx-10 my-16'>
        <h1 className='text-xl font-semibold tracking-wide text-center'>Select Power Type</h1>
        <div className='space-y-3 h-[320px] overflow-auto scrollbar-hide'>
            <SinglePowerType src="/1 (1).jpeg" title="Single Vision/Powered Eyeglasses" description="For distance or near vision" />
            <SinglePowerType src="/1 (2).jpeg" title="Zero Power Eyeglasses" description="Fashion or Protection from Glare/Computer Screens etc." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
            <SinglePowerType src="/1 (3).jpeg" title="Bifocal/Progressive Eyeglasses" description="Distance & Near vision in same lenses." />
        </div>

        <div className='flex items-center justify-between pt-7 w-[81%] mx-auto'>
            <button 
                onClick={onCancel}
                className='px-3 py-1 text-sm bg-gray-700 text-white rounded-md tracking-wide flex mx-auto'
            >
                Cancel
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

export default LensFormStep1