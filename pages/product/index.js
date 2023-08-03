import Filter from '@/Components/Filter'
import SingleGlassItem from '@/Components/SingleGlassItem'
import Layout from '@/Layout/Layout'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <section className='flex h-auto space-x-3'>
            <div className=''>
                <Filter />
            </div>
            <div className='flex items-center justify-between flex-wrap space-y-5'>
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