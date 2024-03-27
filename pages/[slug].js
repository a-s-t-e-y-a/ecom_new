"use client";
import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import api from "@/api";
import useGetSingleBlogById from "@/utils/queries/useGetSingleBlogById";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  const url = router.query.id;

  const fetchSingleBlog = async () => {
    api
      .get(`https://api.akkukachasma.com/api/blogs/${url}`)
      .then((res) => {
        setBlogData(res?.data);
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log(blogData);
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Header */}
      <div className=" px-3">
        <Header1 />
      </div>
      {/* Header/Heading */}
      <div className="flex flex-col items-center justify-center shadow-sm">
        <img src="/blog.png" className="w-[180px]" />
        <h1 className="text-sm tracking-wider -mt-4">with @akkukachasma</h1>
        <span className="mt-3">
          <hr />
        </span>
      </div>
      {/* Remove height Vh */}
      <div className="w-full h-screen">
        <div className="border w-[60%] mx-auto p-3">
          <div className="space-y-5">
            <div>
              <h1 className="text-3xl tracking-wide font-bold text-center">
                {blogData?.heading}
              </h1>
              <div></div>
            </div>
            <div className="flex place-content-center">
              <img src={blogData?.imageArray} className="border" />
            </div>
          </div>

          <div className="space-y-5 text-md tracking-wide mt-8 text-justify">
            <p dangerouslySetInnerHTML={{ __html: blogData?.description }}></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
