"use client";
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

  const id = router.query.id;

  const fetchSingleBlog = async () => {
    api.get(`https://api.akkukachasma.com/api/blogs/${id}`).then((res) => {
      setBlogData(res?.data);
    }).catch((e)=>{
        console.error(e)
    })
  };

  console.log(blogData);
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Header/Heading */}
      <div className="flex flex-col items-center justify-center shadow-sm">
        <img src="/blog.png" className="w-[180px]" />
        <h1 className="text-sm tracking-wider -mt-4">with @akkukachasma</h1>
        <span className="mt-3">
          <hr />
        </span>
      </div>

      <div className="w-full mt-4">
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
    </div>
  );
};

export default SingleBlogPage;
