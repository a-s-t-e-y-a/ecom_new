"use client";
import SwiperThumbs from "@/Components/Swiper/SwiperThumbs";
import Layout from "@/Layout/Layout";
import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import LensForm from "@/Components/LensForm/LensForm";
import TabPanel from "@/Components/Tab/TabPanel";
import { useRouter } from "next/router";
import useGetProductDetail from "@/utils/queries/useGetProductDetails";
import { UpdaeSepcification } from "@/Slices/ProductSepcifcation";
import { useDispatch } from "react-redux";
import Loader from "@/Components/Loader";
import Specification from "@/Components/SingleItem/Specification";
import Description from "@/Components/SingleItem/Description";
import ProductTag from "@/Components/SingleItem/ProductTag";

const SingleProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

  // Ensure the hook is called unconditionally
  const Product = useGetProductDetail(slug);

  useEffect(() => {
    if (Product.data) {
      setProductData(Product.data[0]);
      dispatch(UpdaeSepcification(Product.data[0]));
    }
  }, [Product.data, dispatch]);

  const productURL = productData?.product_url ?? "";
  const BASE_URI = `https://akkukachasma.com/eyewear/`;
  const messageToShare = encodeURIComponent(
    `Hello! I'm interested in this one! ${BASE_URI + productURL}`
  );
  const whatsappLink = `https://wa.me/8188881661?text=${messageToShare}`;
  const whatsappLinkToShare = `https://wa.me/?text=${messageToShare}`;

  const [value, setValue] = useState([]);

  const addToCart = (productId) => {
    setValue((prevValue) => {
      const newValue = [...prevValue, { Productid: productId }];
      localStorage.setItem("Productid", JSON.stringify(newValue));
      return newValue;
    });
  };

  if (!Product?.data?.length) {
    return <Loader />;
  }

  const TabPanelOption = [
    { label: "SPECIFICATION", component: <Specification Product={Product} /> },
    { label: "DESCRIPTION", component: <Description Product={Product.data[0]} /> },
    { label: "PRODUCTS TAGS", component: <ProductTag Product={Product.data[0]} /> },
  ];

  return (
    <Layout>
      <LensForm show={isOpen} onHide={() => setIsOpen(false)} />
      <section className="text-gray-600 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center mx-auto ">
          {/* Swiper Field  */}
          <div className="w-full col-span-2">
            <SwiperThumbs images={productData?.product_images} />
          </div>

          {/* Detail  */}
          <div className="sm:flex sm:mr-[150px] px-5">
            <div className="">
              <div className=" flex justify-between mb-5">
                <h1 className=" text-2xl md:text-4xl">
                  {productData?.product_model_name}
                </h1>
                <span className="text-xl font-semibold cursor-pointer">
                  <AiOutlineHeart />
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold">
                  {productData?.product_color_?.name}
                </p>
                <span className="font-semibold tracking-wider text-lg">
                  Rs. {productData?.discounted_price}
                </span>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between text-sm mb-5">
                <div className="flex items-center justify-around gap-2">
                  <p>
                    Frame color:{" "}
                    <span>
                      {productData?.product_color_?.name}
                    </span>
                  </p>
                  {/* <p className=" ms-5">Size : {productData.size_?.name}</p> */}
                </div>
              </div>
            </div>

            {/* Buttons  */}
            <div className="flex  flex-col md:flex-row md:items-center gap-3 text-xs justify-around mb-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="flex w-full items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
                  <HiOutlineShoppingCart strokeWidth={2} className="h-4 w-4" />{" "}
                  Buy on Whatsapp
                </button>
              </a>
              <button
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md"
                onClick={() => setIsOpen(true)}
              >
                Select Lens
              </button>
              <a
                href={whatsappLinkToShare}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex w-full items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
                  <IoIosShareAlt strokeWidth={2} className="h-4 w-4" /> Share
                  Now
                </button>
              </a>
              <button
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md"
                onClick={() => {
                  addToCart(productData?.p_id);
                }}
              >
                Add to Cart
              </button>
            </div>

            {/* Size And Rating  */}
            <div className="flex items-center justify-between mb-5">
              <button className="border-2 text-sm px-4 py-1 rounded-md ">
                Size Guide
              </button>

              <div className="flex items-center">
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-slate-500">
                  {productData?.rating}
                </p>
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-2">
          <div className="w-2/3 my-5">
            <TabPanel TabPanelOption={TabPanelOption} />
          </div>
          <div className=" font-semibold">Image</div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleProduct;
