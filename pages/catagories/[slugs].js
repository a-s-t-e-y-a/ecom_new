import React, { useState } from "react";
import { useRouter } from "next/router";
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import Pagination from "@/Components/Pagination/Pagination";
import useCategoryByURL from "@/utils/queries/useCategoryByURL";


const Index = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { slugs } = router.query;
  console.log(slugs)
  const { data, isLoading, isError } = useCategoryByURL(slugs, page);
  console.log(data)
  const navigateToSingleProduct = (id) => {
    router.push(`/eyewear/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Layout>
      <section className="w-full flex px-5">
        <div className="w-fit absolute lg:relative lg:top-0 left-1 top-14 me-5">
          <Filter />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-4">
          {data &&
            data.map((val, index) => (
              <div key={index} onClick={() => navigateToSingleProduct(val?.product_url)}>
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
      <div className="flex justify-center my-10 px-10">
        <Pagination pages={setPage} curr={page} total={data?.length} />
      </div>
    </Layout>
  );
};

export default Index;
