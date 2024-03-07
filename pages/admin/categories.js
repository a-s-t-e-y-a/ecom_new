import IconButton from '@/Components/Admin/IconButton';
import CategoriesDialogBox from '@/Components/Dialog/CategoriesDialogBox';
import Modal from '@/Components/Dialog/Modal';
import Loader from '@/Components/Loader';
import AdminLayout from '@/Layout/AdminLayout'
import useGetAllCategories from '@/utils/queries/useCategoriesGetAll';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { MdCategory } from 'react-icons/md';
import { useSelector } from 'react-redux';
import cateye from '../computerglasses/shape/cateye';

const Categories = () => {
    const {data:categories, isLoading , isError} = useGetAllCategories()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onHide = () =>  setOpen(false) 
  if(isLoading){
    return <Loader/>
  }
  if(isError){
    return <> Error ....</>
  }
    return (
        <AdminLayout>
            <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <CategoriesDialogBox onCancel={onHide} /> }
            </Modal>
            <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Category" icon={<MdCategory/>}/>
                </div>
                <div className='mt-10 flex items-center gap-5 flex-wrap overflow-scroll scrollbar-hide'>
                    {
            categories&&categories.map((category,index)=>(
                            <div key={index} className='border rounded-md shadow-md px-5 py-2 inline-flex flex-col items-center gap-2 bg-gray-100'>
                                <img src={category.image} className='w-44 h-auto mix-blend-multiply'/>
                                <div className='flex items-center gap-5'>
                                    <span className='text-base tracking-wide font-semibold text-gray-700'>{category.name}</span>
                                    <span className='text-sm text-red-500 cursor-pointer'><DeleteOutlineIcon className='text-base'/></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </AdminLayout>
    )
}

export default Categories
