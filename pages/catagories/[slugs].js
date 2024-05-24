/* eslint-disable react-hooks/rules-of-hooks */
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/Components/Pagination/Pagination";
import api from "@/api";

const index = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = React.useState(1);

  const router = useRouter();
  const { slugs } = router.query;

  const navigateToSingleProduct = (id) => {
    router.push(`/eyewear/${id}`);
  };

  React.useEffect(() => {
    const fetchData = () => {
      if (slugs) {
        console.log(slugs)
        api
          .get(
            `categories/${slugs}?pageSize=15&page=${page}`
          )
          .then((result) => {
            setData(result?.data?.data[0]?.
              products
              );
            console.log(result?.data?.data[0]?.products);
          });
      }
    };
    fetchData();
  }, [page, slugs]);
  return (
    <Layout>
      <section className=" w-full flex px-5 ">
        <div className=" w-fit absolute lg:relative lg:top-0 left-1 top-14  me-5">
          <Filter />
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-4 ">
          {data &&
            data?.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.product_url)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
      <div className=" flex  justify-center my-10 px-10 ">
        <Pagination pages={setpage} curr={page} total={data?.length}/>
      </div>
    </Layout>
  );
};

export default index;
