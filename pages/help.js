import TabPanel from '@/Components/Tab/TabPanel'
import Layout from '@/Layout/Layout'
import React from 'react'

const help = () => {
  return (
    <Layout>
        <div className='text-gray-700'>
          <h1 className='text-5xl font-bold tracking-wide text-center'>We Here To Help You</h1>
          <div className='w-[90%] mx-auto'>
            <TabPanel />
          </div>
        </div>
    </Layout>
  )
}

export default help