import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useGetSingleBlogById from "@/utils/queries/useGetSingleBlogById";

const SingleBlogPage = () => {
  const router = useRouter();
  const slug = router.query?.slug;
  const { data: blogData, refetch } = useGetSingleBlogById(slug);
  useEffect(() => {
    if (!blogData) {
      refetch();
    }
  }, [slug, blogData, refetch]);

  return (
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
  );
};

export default SingleBlogPage;
