import IconButton from '@/Components/Admin/IconButton';
import BrandDialogBox from '@/Components/Dialog/BrandDialogBox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Modal from '@/Components/Dialog/Modal';
import AdminLayout from '@/Layout/AdminLayout'
import { useState } from 'react';
import { TbBrandAdonisJs } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import useGetAllBrands from '@/utils/queries/useBrandsGetAll';

const Brand = () => {
    const {data, isLoading } = useGetAllBrands()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onHide = () =>  setOpen(false) 
  return (
    <AdminLayout>
         <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <BrandDialogBox onCancel={onHide} /> }
          </Modal>
         <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Brand" icon={<TbBrandAdonisJs/>}/>
                </div>
                <div className='mt-10 flex items-center gap-3 flex-wrap w-full'>
                    <div className='w-[70%] border rounded-md shadow-md px-5 py-3 flex items-center justify-between bg-gray-50'>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>Brand Name</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>Product Categories Name</span>
                        </div>
                        <div className='text-base tracking-wide font-semibold flex flex-col items-center gap-1'>
                            <span className='text-xs text-gray-400 tracking-wider'>Action</span>
                        </div>
                    </div>
                    <div className='w-[70%] border rounded-md shadow-md px-5 py-2 flex flex-col items-center justify-between bg-gray-50 gap-5'>
                       {
                        data&&data.map((item,index)=>( 
                            <div key={index} className='w-full relative flex items-center justify-between'>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Brand Name</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{item.brand_name}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Product Categories Name</span>
                                    <span className='text-gray-600 font-semibold text-sm -mt-4 z-5'>{item.categories_id.name}</span>
                                </div>
                                <div className='text-base tracking-wide font-semibold flex flex-col items-center justify-center -gap-3'>
                                    <span className='text-xs text-gray-400 tracking-wider opacity-0'>Action</span>
                                    <span className='text-md text-red-500 cursor-pointer -mt-4 z-5'><DeleteOutlineIcon className='text-base'/></span>
                                </div>
                            </div>
                        ))
                    } 
                    </div>
                </div>
            </div>
    </AdminLayout>
  )
}

export default Brand
