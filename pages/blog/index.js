"use client";
import BlogItem from "@/Components/Blog/BlogItem";
import BlogSideBar from "@/Components/Blog/BlogSideBar";
import useBlogsGetAll from "@/utils/queries/useBlogGetAll";
import React from "react";
import Loader from "@/Components/Loader";
import { useRouter } from "next/router";
import Header1 from "@/Components/Header/Header1";
import Footer from "@/Components/Footer/Footer";
const Index = () => {
  const [Blogs, setbolgs] = React.useState([]);
  const router = useRouter();
  const blogs = useBlogsGetAll();

  React.useEffect(() => {
    if (blogs.data) {
      setbolgs(blogs.data);
    }
  }, [blogs]);
  if (blogs.isLoading) {
    return <Loader />;
  }
  if (blogs.isError) {
    return <></>;
  }

  const handleBlogCLick = (url) => {
    router.push(`/${url}`);
  };

  return (
    <div className=" flex flex-col items-center ">
      {/* Header */}
      <Header1 />
      {/* Header/Heading */}
      <div className="w-1/3  text-center   mx-auto shadow-sm">
        <img src="/blog.png" className="w-[180px] mx-auto mb-3" />
        <h1 className="text-sm tracking-wider -mt-4">with @akkukachasma</h1>
        <span className="mt-3">
          <hr />
        </span>
      </div>

      {/* Body  */}
      <div className=" grid grid-cols-2 px-5  w-full h-full bg-gray-50">
        <div className=" w-full col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5 gap-5">
          {Blogs.map((blog) => (
            <div key={blog.id} onClick={() => handleBlogCLick(blog?.url)}>
              <BlogItem value={blog} />
            </div>
          ))}
        </div>
        <div className="w-full col-span-2 mr-3 ">
          <BlogSideBar />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
