import AdminLayout from '@/Layout/AdminLayout'
import IconButton from '@/Components/Admin/IconButton';
import React from 'react'
import { CiUser } from 'react-icons/ci'

const registeredUsers = () => {
  return (
    <AdminLayout>
       <div>
            <div>
                <IconButton label="Registered Users" icon={<CiUser/>}/>
            </div>
            <div>

            </div>
        </div>
  </AdminLayout>
  )
}

export default registeredUsers