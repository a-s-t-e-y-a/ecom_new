import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useGetSingleBlogById from "@/utils/queries/useGetSingleBlogById";

const SingleBlogPage = () => {
  const router = useRouter();
  const slug = router.query?.slug;
  const { data: blogData,refetch } = useGetSingleBlogById(slug);
  useEffect(()=>{
    if(!blogData){
      refetch()
    }
  },[slug, blogData, refetch]);
  
  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className=" px-3">
        <Header1 />
      </div>
      {/* Header/Heading */}
      <div className="flex flex-col items-center justify-center shadow-sm">
        <span className="mt-3">
          <hr />
        </span>
      </div>
      {/* Remove height Vh */}
      <div className="w-full py-6">
        <div className="border-2 w-full mx-auto p-3">
          <div className="space-y-5">
            <div>
              <h1 className="text-3xl tracking-wide font-bold text-center">
                {blogData?.heading}
              </h1>
              <div></div>
            </div>
            <div className="flex place-content-center">
              <img
                width={500}
                height={800}
                alt={blogData?.thumb}
                src={blogData?.image}
                // className="border"
              />
            </div>
          </div>

          <div className="space-y-5 text-md tracking-wide mt-8 text-justify">
            <p dangerouslySetInnerHTML={{ __html: blogData?.description }}></p>
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
