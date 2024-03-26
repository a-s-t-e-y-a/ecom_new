"use client";
import SingleItem from "@/Components/SingleItem/SingleItem";
import SwiperThumbs from "@/Components/Swiper/SwiperThumbs";
import Layout from "@/Layout/Layout";
import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import LensForm from "@/Components/LensForm/LensForm";
import Specification from "@/Components/SingleItem/Specification";
import Description from "@/Components/SingleItem/Description";
import ProductTag from "@/Components/SingleItem/ProductTag";
import TabPanel from "@/Components/Tab/TabPanel";
import { useRouter } from "next/router";
import useGetProductDetail from "@/utils/queries/useGetProductDetails";
import { UpdaeSepcification } from "@/Slices/ProductSepcifcation";
import { useDispatch } from "react-redux";
import { colorMapping } from "@/utils/contants";
import Loader from "@/Components/Loader";

const TabPanelOption = [
  { label: "SPECIFICATION", component: Specification },
  { label: "DESCRIPTION", component: Description },
  { label: "PRODUCTS TAGS", component: ProductTag },
];

const SingleProduct = () => {
  const Dispacth = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [productData, setProductdata] = React.useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  const Product = useGetProductDetail(id);

  useEffect(() => {
    if (Product.data) {
      setProductdata(Product.data);
      Dispacth(UpdaeSepcification(Product.data));
    }
  }, [Product, productData, Dispacth]);

  const phoneNumber = "";
  const productURL = productData?.product_url ?? "";
  const BASE_URI = `https://akkukachasma.com/eyewear/`;
  const message = encodeURIComponent(
    `Hello! I'm interested in one of your products. Please contact me! ${productURL}`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const messageToShare = encodeURIComponent(
    `Hello! I'm interested in this one! ${productURL}`
  );
  const whatsappLinkToShare = `https://wa.me/?text=${messageToShare}`;

  const [value, setValue] = useState([]);

  const addToCart = (productId, isLens = false) => {
    // Construct the object based on whether it's a lens or product
    setValue([
      ...value,
      {
        Productid: productId,
      },
    ]);
    localStorage.setItem(
      "Productid",
      JSON.stringify([...value, { Productid: productId }])
    );
    // value = JSON.parse(value)
    // const postData = { p_id: productId };
    // axios
    //     .post(`${BASE_URL}cart`, postData, {
    //         headers: {
    //             authorization: `Bearer ${value} `,
    //         },
    //     })
    //     .then((result) => console.log(result?.data, "result?.data"));
  };

  const SingleItemData = [
    {
      src: "/1 (1).jpeg",
      title: "Frame Width",
      width: productData?.frame_width,
    },
    { src: "/1 (2).jpeg", title: "Lens Width", width: productData?.lens_width },
    {
      src: "/1 (3).jpeg",
      title: "Lens Height",
      width: productData?.lens_height,
    },
  ];
  if (Product.isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <LensForm show={isOpen} onHide={() => setIsOpen(false)} />
      <section className="text-gray-600 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto ">
          {/* Swiper Field  */}
          <div className="w-full">
            <SwiperThumbs images={productData?.product_images} />
          </div>

          {/* Detail  */}
          <div className=" px-5">
            <div className="">
              <div className=" flex justify-between mb-5">
                <h1>{productData?.product_model_name}</h1>
                <span className="text-xl font-semibold cursor-pointer">
                  <AiOutlineHeart />
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold">
                  {productData?.product_color_.name}
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
                      {colorMapping[productData?.product_color] || "Unknown"}
                    </span>
                  </p>
                  <p className=" ms-5">Size : {Product?.data?.size_.name}</p>
                </div>
              </div>
            </div>

            {/* Buttons  */}
            <div className="flex  flex-col md:flex-row md:items-center gap-3 text-xs justify-evenly mb-5">
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

              <div class="flex items-center">
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
        <div className=" mb-5">
          <TabPanel TabPanelOption={TabPanelOption} TableData={productData} />
        </div>
      </section>
    </Layout>
  );
};

export default SingleProduct;
