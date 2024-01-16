/* eslint-disable react-hooks/rules-of-hooks */
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [data, setData] = useState([]);

  const router = useRouter();

  const navigateToSingleProduct = (id) => {
    router.push(`/eyeglasses/${id}`);
  };
  const fetchData = () => {
    axios
      .get("http://3.24.191.174:5000/api/categories/2")
      .then((result) => {
        setData(result?.data?.data.products);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <section className="flex h-auto space-x-3">
        <div className="">
          <Filter />
        </div>
        <div className="grid grid-cols-3 h-fit gap-3 gap-y-5">
          {data &&
            data.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.products_id)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default index;
