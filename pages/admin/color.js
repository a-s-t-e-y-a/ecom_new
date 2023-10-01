import IconButton from '@/components/Admin/IconButton';
import Modal from '@/components/Dialog/Modal';
import ColorDialogBox from '@/components/Dialog/ColorDialogBox';
import AdminLayout from '@/Layout/AdminLayout'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Color = () => {
    const colorsData = useSelector((state)=> state.color)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const onHide = () =>  setOpen(false) 
    return (
        <AdminLayout>
            <Modal isOpen={open} closeModal={onHide} fullWidth={false}>
                { <ColorDialogBox onCancel={onHide} /> }
            </Modal>
            <div>
                <div onClick={handleOpen}>
                    <IconButton label="Add Color" icon={<IoColorPaletteOutline/>}/>
                </div>
                <div className='mt-10 flex items-center gap-5 flex-wrap'>
                    {
                        colorsData.map((color,index)=>(
                            <div key={index} className='border rounded-md shadow-md px-5 py-2 inline-flex items-center gap-2 bg-gray-100'>
                                <span className='text-base tracking-wide font-semibold text-gray-700'>{color}</span>
                                <span className='text-sm text-red-500 cursor-pointer'><DeleteOutlineIcon className='text-base'/></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </AdminLayout>
    )
}

export default Color