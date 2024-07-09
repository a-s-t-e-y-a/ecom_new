"use params";
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
import { useDispatch } from "react-redux";
import Loader from "@/Components/Loader";
import Specification from "@/Components/SingleItem/Specification";
import Description from "@/Components/SingleItem/Description";
import ProductTag from "@/Components/SingleItem/ProductTag";
import Image from "next/image";
import { addData } from "@/Slices/CartSlice";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import api from "@/api";
import useAddWishlist from "@/utils/mutations/useAddWishlist";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const [extraData, setExtraData] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const { mutate } = useAddWishlist()

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      const { extraData } = router.query;
      setExtraData(extraData);
    }
  }, [router.isReady, router.query]);

  const { data: productDetails, isLoading } = useGetProductDetail(
    slug
  );

  useEffect(() => {
    if (productDetails) {
      const user = localStorage.getItem("user_data");
      setProductData(productDetails);
      // dispatch(updateSpecification(productDetails));
    }
  }, [productDetails, dispatch]);

  const productURL = productData?.product_url ?? "";
  const BASE_URI = `https://akkukachasma.com/eyewear/`;
  const messageToShare = encodeURIComponent(
    `Hello! I'm interested in this one! ${BASE_URI + productURL}`
  );
  const whatsappLink = `https://wa.me/+918188881661?text=${messageToShare}`;
  const whatsappLinkToShare = `https://wa.me/?text=${messageToShare}`;

  const addToCart = (productId) => {
    const newCartItems = [...cartItems, { ProductId: productId }];
    setCartItems(newCartItems);
    localStorage.setItem("ProductId", JSON.stringify(newCartItems));
  };

  if (isLoading) {
    return <Loader />;
  }

  const TabPanelOption = [
    {
      label: "SPECIFICATION",
      component: <Specification Product={productDetails} />,
    },
    {
      label: "DESCRIPTION",
      component: <Description Product={productDetails} />,
    },
    {
      label: "PRODUCT TAGS",
      component: <ProductTag Product={productDetails} />,
    },
  ];
  return (
    <Layout>
      <Head>
        <title>{productDetails?.seo_title}</title>
        <meta
          name="description"
          content={productDetails?.product_description}
        />
        <meta name="keywords" content={productDetails?.keyword} />
        <meta property="og:title" content={productDetails?.seo_title} />
        <meta
          property="og:description"
          content={productDetails?.product_description}
        />
        <meta property="og:image" content={productDetails?.imageArray[0]} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`/blog/${productDetails?.product_url}`}
        />
      </Head>
      <LensForm show={isOpen} onHide={() => setIsOpen(false)} />
      <section className="text-gray-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto mt-8">
          {/* Swiper Field */}
          <div className="md:max-w-full md:ml-[25px] flex items-center mr-[80px] w-[280px] md:w-[3000px]">
            <SwiperThumbs images={productData?.product_images} />
          </div>

          {/* Detail */}
          <div className="px-5  md:ml-[200px] ">
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-semibold capitalize text-2xl md:text-4xl">
                {productData?.product_model_name}
              </h1>
              <span className="text-xl font-semibold cursor-pointer" onClick={() => mutate({ pId: productDetails?.p_id })}>
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
            <div className="flex items-center my-5 justify-end">
              <span className="font-semibold tracking-wider text-lg">
                {productData?.size_?.name} {productData?.frame_width} MM
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-auto h-8">
                    <img src="/1 (1).jpeg" className="h-full" />
                  </div>
                  <div className="flex flex-col items-center ">
                    <span className="font-bold text-sm tracking-wider">
                      {productData?.frame_width} MM
                    </span>
                    <span className="text-xs text-gray-600">Frame Width</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-auto h-8">
                    <img src="/1 (2).jpeg" className="h-full" />
                  </div>
                  <div className="flex flex-col items-center ">
                    <span className="font-bold text-sm tracking-wider">
                      {productData?.lens_width} MM
                    </span>
                    <span className="text-xs text-gray-600">Lens Width</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5 items-center">
                  <div className="w-auto h-8">
                    <img src="/1 (3).jpeg" className="h-full" />
                  </div>
                  <div className="flex flex-col items-center ">
                    <span className="font-bold text-sm tracking-wider">
                      {productData?.lens_height} MM
                    </span>
                    <span className="text-xs text-gray-600">Lens Height</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col mt-4 md:flex-row md:items-center gap-3 text-xs justify-between mb-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="flex w-full items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
                  <HiOutlineShoppingCart strokeWidth={2} className="h-4 w-4" />{" "}
                  Buy on Whatsapp
                </button>
              </a>
              <button
                className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md"
                onClick={() => {
                  setIsOpen(true);
                  dispatch(addData({ productId: productData?.p_id }));
                }}
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
            </div>
            {/* Size And Rating */}
            <div className="flex items-center justify-between mb-5">
              <button className="border-2 text-sm px-4 py-1 rounded-md">
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
        <div className="flex flex-col">
          <div className="font-bold text-black  text-lg my-4 md:px-2 md:py-2 flex justify-center items-center rounded-md w-[100%] shadow-lg md:w-[12%]">
            Related Products
          </div>
          <div className="flex md:flex-row gap-4 flex-col">
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
          </div>
          <button className=" my-4 i flex justify-center items-center  text-blue-600 py-2">
            See More
          </button>
        </div>
        <div className="flex md:flex-row flex-col my-4 gap-2 divide-x-2">
          <div className="my-5">
            <TabPanel TabPanelOption={TabPanelOption} />
          </div>
          <div className="w-full">
            <Image
              src="/banner1.jpg"
              width={100}
              height={100}
              alt=""
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const queryClient = new QueryClient();
  const { slug } = query;
  await queryClient.prefetchQuery(["api/productDetail", slug], async () => {
    const res = await api.get(`/products/${slug}`);
    return res.data;
  });

  return {
    props: {
      initialBlogData: queryClient.getQueryData(["api/productDetail", slug]),
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default SingleProduct;
