import Filter from '@/Components/Filter'
import SingleGlassItem from '@/Components/SingleGlassItem'
import Layout from '@/Layout/Layout'
import React from 'react'
import { useRouter } from "next/router";
import useGetAllProducts from '@/utils/queries/admin/UseProductGetAll';
import Loader from '@/Components/Loader';


const Index = () => {


  const router = useRouter();

  const navigateToSingleProduct = (id) => {
    router.push(`/product/${id}`);
  };
  const {isLoading , isError , data }=  useGetAllProducts()
  if(isLoading){
    return <><Loader/></>
 }
  if(isError){
    return <> </>
  }
  return (
    <Layout>
      <section className='flex h-auto space-x-3'>
        <div className=''>
          <Filter />
        </div>
        <div className='grid grid-cols-3 h-fit gap-3 gap-y-5'>
          {data &&
            data.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.p_id)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
