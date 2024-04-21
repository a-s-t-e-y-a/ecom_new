import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import api from "@/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useGetSingleBlogById from "@/utils/queries/useGetSingleBlogById";

const SingleBlogPage = () => {
  const router = useRouter();
  const slug = router.query?.slug;
  const {data:blogData, refetch} = useGetSingleBlogById(slug)
  return (
    <div className="">
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
        <div className="border w-[60%] mx-auto p-3">
          <div className="space-y-5">
            <div>
              <h1 className="text-3xl tracking-wide font-bold text-center">
                {blogData[0]?.heading}
              </h1>
              <div></div>
            </div>
            <div className="flex place-content-center">
              <Image
                width={100}
                height={100}
                alt=""
                src={blogData[0]?.image}
                className="border"
              />
            </div>
          </div>

          <div className="space-y-5 text-md tracking-wide mt-8 text-justify">
            <p dangerouslySetInnerHTML={{ __html: blogData[0]?.description }}></p>
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
