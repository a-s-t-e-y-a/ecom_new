import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useGetSingleBlogById from "@/utils/queries/useGetSingleBlogById";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";
import api from "@/api";

const SingleBlogPage = () => {
  const router = useRouter();
  const slug = router.query?.slug;
  const { data: blogData } = useGetSingleBlogById(slug);

  return (
    <>
      <Head>
        <title>{blogData?.heading}</title>
        <meta
          name="description"
          content={blogData?.MetaDescription?.metaDescription}
        />
        <meta name="keywords" content={blogData?.tags} />
        <meta property="og:title" content={blogData?.seo_title} />
        <meta
          property="og:description"
          content={blogData?.MetaDescription?.metaDescription}
        />
        <meta property="og:image" content={blogData?.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`/blog/${slug}`} />
      </Head>
      <div className="w-full h-full border-4">
        {/* Header */}
        <div className="px-3">
          <Header1 />
        </div>
        {/* Remove height Vh */}
        <div className="w-[90%] mx-auto p-6">
          <div className="w-full mx-auto p-3">
            <div className="space-y-5">
              <div className="mb-12">
                <h1 className="text-3xl tracking-wide font-semibold text-center">
                  {blogData?.heading}
                </h1>
                <div></div>
              </div>
              <div className="flex place-content-center">
                <img
                  width={450}
                  height={450}
                  alt={blogData?.thumb}
                  src={blogData?.image}
                  // className="border"
                />
              </div>
            </div>

            <div className="space-y-5 text-md tracking-wide mt-8 text-justify">
              <div
                dangerouslySetInnerHTML={{ __html: blogData?.description }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const queryClient = new QueryClient();
  const {slug} = query
  await queryClient.prefetchQuery(['api/blog', slug], async () => {
    const res = await api.get(`/blogs/${slug}`);
    return res.data;
  });

  return {
    props: {
      initialBlogData: queryClient.getQueryData(['api/blog', slug]),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SingleBlogPage;
