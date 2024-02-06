import IconButton from '@/Components/Admin/IconButton';
import CouponManagerDialogBox from '@/Components/Dialog/CouponManagerDialogBox';
import Modal from '@/Components/Dialog/Modal';
import AdminLayout from '@/Layout/AdminLayout'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { SiCodeproject } from 'react-icons/si';
import { useSelector } from 'react-redux';

const CouponManager = () => {
    const couponsData = useSelector((state)=> state.coupon)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onHide = () =>  setOpen(false) 
    return (
        <AdminLayout>
            <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <CouponManagerDialogBox onCancel={onHide} /> }
            </Modal>
            <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Coupons" icon={<SiCodeproject/>}/>
                </div>
                <div className='mt-10 flex items-center gap-3 flex-wrap w-full'>
                    <div className='w-full border rounded-md shadow-md px-5 py-3 flex items-center justify-between bg-gray-50'>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>CouponName</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>ProductCategoriesName</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>ProductBrandName</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>Validity</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>Quantity</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>CouponPrice</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>CouponPercentage</span>
                        </div>
                    </div>
                    <div className='w-full border rounded-md shadow-md px-5 py-2 flex items-center justify-between bg-gray-50 gap-5'>
                        {/* {
                        couponsData.map((coupon,index)=>( */}
                            <div key={1} className='w-full relative flex items-center justify-between'>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>CouponName</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].CouponName}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>ProductCategoriesName</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].Percentage}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>ProductBrandName</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].ProductBrandName}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Validity</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].Validity}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Quantity</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].Quantity}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Coupon Price</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].Price}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>CouponPercentage</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{couponsData[0].Percentage} % </span>
                                </div>
                                <span className='absolute -right-3 text-sm text-red-500 cursor-pointer'><DeleteOutlineIcon className='text-base'/></span>
                            </div>
                        {/* ))
                    } */}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default CouponManager