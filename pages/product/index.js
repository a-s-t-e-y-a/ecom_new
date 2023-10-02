import Filter from '@/components/Filter'
import SingleGlassItem from '@/components/SingleGlassItem'
import Layout from '@/Layout/Layout'
import React from 'react'

const index = () => {
  //  comment to test 1
  //  comment to test 2
  return (
    <Layout>
        <section className='flex h-auto space-x-3'>
            <div className=''>
                <Filter />
            </div>
            <div className='grid grid-cols-3 h-fit gap-3 gap-y-5'>
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
                <SingleGlassItem />
            </div>
        </section>
    </Layout>
  )
}

export default index
