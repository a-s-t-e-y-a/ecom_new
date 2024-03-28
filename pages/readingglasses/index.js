/* eslint-disable react-hooks/rules-of-hooks */
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/Components/Pagination/Pagination";

const index = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = React.useState(1);

  const router = useRouter();

  const navigateToSingleProduct = (id) => {
    router.push(`/eyeware/${id}`);
  };
  const fetchData = React.useCallback(() => {
    axios
      .get(
        `https://api.akkukachasma.com/api/categories/4?pageSize=15&page=${page}`
      )
      .then((result) => {
        setData(result?.data?.data?.products);
      });
  }, [page]);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Layout>
      <section className="flex h-auto space-x-3">
        <div className="">
          <Filter />
        </div>
        <div className="grid grid-cols-3 h-fit gap-3 gap-y-5 px-3">
          {data &&
            data.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.product_url)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
        <div>
          <Pagination pages={setpage} curr={page} />
        </div>
      </section>
    </Layout>
  );
};

export default index;
