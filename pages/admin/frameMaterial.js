import IconButton from '@/components/Admin/IconButton'
import FrameMaterialDialogBox from '@/components/Dialog/FrameMaterialDialogBox';
import Modal from '@/components/Dialog/Modal';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AdminLayout from '@/Layout/AdminLayout'
import { useState } from 'react';
import { CgFramer } from 'react-icons/cg';
import { useSelector } from 'react-redux';


const FrameMaterial = () => {
    const frameData = useSelector((state)=> state.frameMaterial)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onHide = () =>  setOpen(false) 
    return (
        <AdminLayout>
            <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <FrameMaterialDialogBox onCancel={onHide} /> }
            </Modal>
            <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Frame Material" icon={<CgFramer/>}/>
                </div>
                <div className='mt-10 flex items-center gap-5 flex-wrap'>
                    {
                        frameData.map((shape,index)=>(
                            <div key={index} className='border rounded-md shadow-md px-5 py-2 inline-flex items-center gap-2 bg-gray-100'>
                                <span className='text-base tracking-wide font-semibold text-gray-700'>{shape}</span>
                                <span className='text-sm text-red-500 cursor-pointer'><DeleteOutlineIcon className='text-base'/></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </AdminLayout>
    )
}

export default FrameMaterial