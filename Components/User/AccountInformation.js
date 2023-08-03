import { Input} from '@material-tailwind/react'
import React from 'react'

const AccountInformation = () => {
    return (
        <div className='h-full w-auto'>
            <h1 className='font-semibold text-xl'>Your Profile</h1>
            <span className='block my-3'>
                <hr />
            </span>

            <div className='pt-3'>
                <form className='space-y-4'>
                    <div className="w-[300px]">
                        <Input label="First Name" />
                    </div>
                    <div className="w-[300px]">
                        <Input label="Last Name" />
                    </div>
                    <div className="w-[300px]">
                        <Input label="Email" />
                    </div>
                    <div className='space-y-6'>
                        <p className='text-small tracking-wide font-normal'>Gender</p>
                        <div className='flex gap-5 text-sm pl-3'>
                            <div className='flex items-center gap-1'>
                                <input type="radio" id="male" name="Gender" value="male"/>
                                <label htmlFor="male">Male</label>
                            </div> 
                            <div className='flex items-center gap-1'>
                                <input type="radio" id="female" name="Gender" value="female"/>
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className='flex items-center gap-1'>
                                <input type="radio" id="other" name="Gender" value="other"/>
                                <label htmlFor="other">Other</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-[300px]">
                        <Input label="Change Password" />
                    </div>
                    <div className='pt-6'>
                        <button className='text-sm py-1 px-3 rounded-lg tracking-wide text-small bg-gray-700 text-white hover:bg-gray-800 cursor-pointer'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountInformation