"use client";
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/Components/Pagination/Pagination";

const Index = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = React.useState(1);

  const router = useRouter();

  const navigateToSingleProduct = (id) => {
    router.push(`/eyeware/${id}`);
  };
  const fetchData = React.useCallback(() => {
    axios
      .get(
        `https://api.akkukachasma.com/api/categories/1?pageSize=15&page=${page}`
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
        <div className="grid grid-cols-3 h-fit gap-3 gap-y-5">
          {data &&
            data.map((element, indx) => (
              <div
                key={indx}
                onClick={() => navigateToSingleProduct(element?.product_url)}
              >
                <SingleGlassItem value={element} />
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

export default Index;
