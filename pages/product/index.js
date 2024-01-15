import Filter from '@/Components/Filter'
import SingleGlassItem from '@/Components/SingleGlassItem'
import Layout from '@/Layout/Layout'
import React from 'react'
import { useRouter } from "next/router";
import axios from "axios";


const index = () => {
  const [data, setData] = React.useState([]);

  const router = useRouter();
  // first comment to test
  const navigateToSingleProduct = (id) => {
    router.push(`/product/${id}`);
  };
  const fetchData = () => {
    axios
      .get("http://3.24.191.174:5000/api/products?page=&itemsPerPage=20")
      .then((result) => {
        setData(result?.data?.data);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
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

export default index
