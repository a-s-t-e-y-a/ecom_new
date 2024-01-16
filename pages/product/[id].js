import SingleItem from "@/Components/SingleItem/SingleItem";
import SwiperThumbs from "@/Components/Swiper/SwiperThumbs";
import Layout from "@/Layout/Layout";
import React, { useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { IoIosShareAlt } from 'react-icons/io'
import { AiOutlineHeart } from "react-icons/ai";
import SwiperContainer from "@/Components/Swiper/SwiperContainer";
import LensForm from "@/Components/LensForm/LensForm";
import Specification from "@/Components/SingleItem/Specification";
import Description from "@/Components/SingleItem/Description";
import WriteReview from "@/Components/SingleItem/WriteReview";
import ProductTag from "@/Components/SingleItem/ProductTag";
import TabPanel from "@/Components/Tab/TabPanel";
import { useRouter } from "next/router";
import axios from "axios";
import { env } from "@/next.config";

const TabPanelOption = [
    { label: "SPECIFICATION", component: Specification },
    { label: "DESCRIPTION", component: Description },
    { label: "WRITE REVIEW", component: WriteReview },
    { label: "PRODUCTS TAGS", component: ProductTag },
]

const colorMapping = {
    1: "Berry",
    2: "Black",
    3: "Blue",
    4: "Brown",
    5: "Gold",
    6: "Green",
    7: "Multicolor",
    8: "Pink",
    9: "Purple",
    10: "Silver",
    11: "Smoke",
    12: "Wine",
    13: "Yellow",
    14: "Other Multi-Colour",
    15: "Gun Metal",
    16: "Transparent White",
    17: "Matte",
    18: "Printed",
    19: "Double Shade",
    20: "Gradient colour",
    21: "Matte Black",
    22: "Matte gray",
    23: "Transparent other",
};

const SingleProduct = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [productData, setProductdata] = React.useState(null);
    const {BASE_URL} = env
    const router = useRouter();
    const { id } = router.query;
    const phoneNumber = "9097773221";
    const productURL = productData?.product_url ?? "";
    const BASE_URI = `https://akkukachasma.com/eyewear/`;
    const message = encodeURIComponent(
        `Hello! I'm interested in one of your products. Please contact me! ${BASE_URI}${productURL}`
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const messageToShare = encodeURIComponent(
        `Hello! I'm interested in this one! ${BASE_URL}${productURL}`
    );
    const whatsappLinkToShare = `https://wa.me/?text=${messageToShare}`;
    useEffect(() => {
        if (id) {
            const fetchProductData = async () => {
                try {
                    const res = await axios.get(
                        `${BASE_URL}products/${id}`
                    );
                    console.log(res?.data);
                    setProductdata(res?.data);
                } catch (error) {
                    console.error("Error fetching product data:", error);
                }
            };
            fetchProductData();
        }
    }, [id]);

    const addToCart = (productId, isLens = false) => {
        // Construct the object based on whether it's a lens or product
        let value = localStorage.getItem("user_info");
        value = JSON.parse(value)
        const postData = { p_id: productId };
        axios
            .post(`${BASE_URL}cart`, postData, {
                headers: {
                    authorization: `Bearer ${value} `,
                },
            })
            .then((result) => console.log(result?.data, "result?.data"));
    };

    const SingleItemData = [
        { src: "/1 (1).jpeg", title: "Frame Width", width: productData?.frame_width },
        { src: "/1 (2).jpeg", title: "Lens Width", width: productData?.lens_width },
        { src: "/1 (3).jpeg", title: "Lens Height", width: productData?.lens_height },
    ];

    return (
        <Layout>
            <LensForm show={isOpen} onHide={() => setIsOpen(false)} />
            <section className="text-gray-600  overflow-hidden flex flex-col gap-10">
                <div className="grid grid-cols-3 mx-auto h-[28rem]">
                    {/* Swiper Field  */}
                    <div className="col-span-2 h-[20rem]">
                        <SwiperThumbs images={productData?.product_images} />
                    </div>

                    {/* Detail  */}
                    <div className="flex flex-col h-full w-[90%] mx-auto py-6 justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h1>{productData?.product_model_name}</h1>
                                <span className="text-xl font-semibold cursor-pointer"><AiOutlineHeart className="" /></span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">Blue Transparent</p>
                                <span className="font-semibold tracking-wider text-lg">
                                    Rs. {productData?.discounted_price}
                                </span>
                            </div>
                        </div>

                        <div className="px-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between text-sm">
                                <div className='flex items-center justify-center gap-2'>
                                    <p>
                                        Frame color:{" "}
                                        <span>
                                            {colorMapping[productData?.product_color] || "Unknown"}
                                        </span>
                                    </p>
                                    <p>
                                        Size :{" "}
                                        {productData?.glasses_size === "1"
                                            ? "Small"
                                            : productData?.glasses_size === "2"
                                                ? "Medium"
                                                : productData?.glasses_size === "3"
                                                    ? "Large"
                                                    : "Unknown"}
                                    </p>
                                </div>
                                <span>Medium (134 mm)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                {SingleItemData.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index}>
                                                <SingleItem data={item} />
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Buttons  */}
                        <div className="flex items-center gap-3 text-xs justify-evenly">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
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
                                <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
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
                        <div className="flex items-center justify-between">
                            <button className="border-2 text-sm px-4 py-1 rounded-md "> Size Guide</button>

                            <div class="flex items-center">
                                <p class="ml-2 text-sm font-bold text-gray-900 dark:text-slate-500">{productData?.rating}</p>
                                <svg aria-hidden="true" className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Related Product  */}
                <div className="flex flex-col gap-1 py-2">
                    <p className="text-xl font-bold px-6">
                        <span className="border-b-2 rounded-full border-spacing-1 border-gray-500 px-2 py-1">Related Products</span>
                    </p>
                    <SwiperContainer />
                </div>

                <div className="h-[35rem] grid grid-cols-7 gap-2">
                    <div className="col-span-5 shadow-md pr-2">
                        <TabPanel TabPanelOption={TabPanelOption} TableData={productData} />
                    </div>
                    <div className="col-span-2">
                        Images
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SingleProduct;
