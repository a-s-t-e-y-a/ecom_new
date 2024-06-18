import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import Pagination from "@/Components/Pagination/Pagination";
import Head from "next/head";
import useGetAllTypeData from "@/utils/queries/useGetAllTypeData";
import { formatSlug } from "@/utils/Helpers";

const Index = () => {
  const router = useRouter();
  const slug = router.query?.slugs;
  console.log(slug);
  // Ensure slug is an array before destructuring
  let type, TypeSlug;
  if (Array.isArray(slug)) {
    [, type, TypeSlug] = slug;
  }

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllTypeData(type, formatSlug(TypeSlug), page);

  const navigateToSingleProduct = (url) => {
    router.push(`/product/${url}`);
  };

  return (
    <Layout>
      <Head>
        <title>{data?.name}</title>
        <meta name="keywords" content={data?.keyword}/>
        <meta property="og:title" content={data?.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data?.image} />
        <meta property="og:url" content={data?.url} />
      </Head>
      <section className="w-full flex px-5">
        <div className="w-fit absolute lg:relative lg:top-0 left-1 top-14 me-5">
          <Filter />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-4">
          {data?.products?.map((val, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    navigateToSingleProduct(val?.product_url)
                  }
                  className="cursor-pointer"
                >
                  <SingleGlassItem value={val} />
                </div>
              );
            })}
        </div>
      </section>
      <div className="flex justify-center my-10 px-10">
        <Pagination pages={setPage} curr={page} total={data?.totalPages} />
      </div>
    </Layout>
  );
};

export default Index;
