import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import Pagination from "@/Components/Pagination/Pagination";
import useCategoryByURL from "@/utils/queries/useCategoryByURL";
import Head from "next/head";
import { useSelector } from "react-redux";

const Index = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { slugs } = router.query
  const selector = useSelector((state) => state?.filterProduct);
  const { category, label } = selector;
  const { data, isLoading, isError } = useCategoryByURL(slugs, page, category, label);
  const navigateToSingleProduct = (url) => {
    router.push(`/product/${url}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{data?.name}</title>
        <meta name="keywords" content={data?.keyword} />
        <meta property="og:title" content={data?.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data?.image} />
        <meta property="og:url" content={data?.url} />
      </Head>
      <section className="w-full flex px-5">
        <div className="w-fit absolute lg:relative lg:top-4 left-1 top-14 me-5">
          <Filter />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
          {data?.products.length > 0 ? data?.products?.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.product_url)}
                className="cursor-pointer"
              >
                <SingleGlassItem value={val} />
              </div>
            );
          }) : <p className="mx-auto">No Product Found !</p>}
        </div>
      </section>
      <div className="flex justify-center my-10 px-10">
        <Pagination pages={setPage} curr={page} total={data?.totalPages} />
      </div>
    </Layout>
  );
};

export default Index;
