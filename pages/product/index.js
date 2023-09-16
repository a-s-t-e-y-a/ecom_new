import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";

const index = () => {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://35.91.33.157:3333/api/products?page=1&itemsPerPage=20")
      .then((result) => {
        setData(result?.data);
      });
  };
  
  return (
    <Layout>
      <section className="flex h-auto space-x-3">
        <div className="">
          <Filter />
        </div>
        <div className="flex items-center justify-between flex-wrap space-y-5">
          {data &&
            data.map((val, index) => (
              <SingleGlassItem key={index} value={val} />
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default index;
