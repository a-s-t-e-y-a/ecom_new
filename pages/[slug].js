"use client";
import Footer from "@/Components/Footer/Footer";
import Header1 from "@/Components/Header/Header1";
import api from "@/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const url = router.query.slug;
    const fetchSingleBlog = async () => {
      api
        .get(`https://api.akkukachasma.com/api/blogs/${url}`)
        .then((res) => {
          setBlogData(res?.data[0]);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    fetchSingleBlog();
  }, [router.query.slug]);

  return (
    <div className="">
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
      <div className="w-full ">
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
      <div className="w-full">
      <Footer />

      </div>
    </div>
  );
};

export default SingleBlogPage;
