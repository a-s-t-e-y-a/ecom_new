import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import Pagination from "@/Components/Pagination/Pagination";
import Head from "next/head";
import useGetAllTypeData from "@/utils/queries/useGetAllTypeData";
import { formatSlug } from "@/utils/Helpers";
import useGetAllShape from "@/utils/queries/useShapeGetAll";
import useGetAllStyle from "@/utils/queries/useStyleGetAll";
import { useSelector } from "react-redux";

const Index = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { data: shape } = useGetAllShape();
  const { data: style } = useGetAllStyle();
  const slug = router.query?.slugs;
  // Ensure slug is an array before destructuring
  let type, TypeSlug, TypeData;
  if (Array.isArray(slug)) {
    [, type, TypeSlug] = slug;
  }


  // utils/slugUtils.js
  const processSlug = (type, TypeSlug) => {
    if (typeof TypeSlug !== "string" && !Array.isArray(TypeSlug)) {
      return TypeSlug;
    }
    switch (type) {
      case "shape":
        return shape?.filter((item) => TypeSlug === item?.name);
      case "style":
        return style?.filter((item) => TypeSlug === item?.url);
      default:
        if (Array.isArray(TypeSlug)) {
          return TypeSlug.map((part) => formatSlug(part.url));
        }
        return formatSlug(TypeSlug.url);
    }
  };
  const finalFilteredData = processSlug(type, TypeSlug) || [];
  let filteredD = finalFilteredData[0] || {}; // Ensure filteredD is an object

  const filteredProduct = useSelector((state) => state.filterProduct);
  console.log(filteredProduct, 'filteredProduct')
  const { category, label } = filteredProduct;

  const { data, isLoading, isError } = useGetAllTypeData(category || type, label || filteredD?.name, page);
  console.log(data, 'data')
  const navigateToSingleProduct = (url) => {
    router.push(`/product/${url}`);
  };

  useEffect(()=>{

  }, [category])

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
        <div className="w-fit absolute lg:relative lg:top-2 left-1 top-14 me-5">
          <Filter />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          {data?.products?.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.product_url)}
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
