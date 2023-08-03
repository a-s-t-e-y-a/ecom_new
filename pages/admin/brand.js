import IconButton from '@/Components/Admin/IconButton';
import BrandDialogBox from '@/Components/Dialog/BrandDialogBox';
import Modal from '@/Components/Dialog/Modal';
import AdminLayout from '@/Layout/AdminLayout'
import { useState } from 'react';
import { TbBrandAdonisJs } from 'react-icons/tb';
import { useSelector } from 'react-redux';

const brand = () => {
    const brandData = useSelector((state)=> state.brand)
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
                <div>

                </div>
            </div>
    </AdminLayout>
  )
}

export default brand