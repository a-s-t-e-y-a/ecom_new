import SingleItem from "@/Components/SingleItem/SingleItem";
import SwiperThumbs from "@/Components/Swiper/SwiperThumbs";
import Layout from "@/Layout/Layout";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { IoIosShareAlt } from 'react-icons/io'

import SwiperContainer from "@/Components/Swiper/SwiperContainer";
import SingleItemDescription from "@/Components/SingleItem/SingleItemDescription";
import LensForm from "@/Components/LensForm/LensForm";


const SingleItemData = [
    { src: "/1 (1).jpeg", title: "Frame Width", width: "135 MM" },
    { src: "/1 (2).jpeg", title: "Lens Width", width: "45 MM" },
    { src: "/1 (3).jpeg", title: "Lens Height", width: "51 MM" },
];
const SingleProduct = () => {
    const [isOpen,setIsOpen] = React.useState(false)
    return (
        <Layout>
            <LensForm show={isOpen} onHide={() => setIsOpen(false)} />
            <section className="text-gray-600  overflow-hidden flex flex-col gap-10">
                <div className="grid grid-cols-3 mx-auto h-[28rem]">
                    {/* Swiper Field  */}
                    <div className="col-span-2 h-[20rem]">
                        <SwiperThumbs />
                    </div>
                    
                    {/* Detail  */}
                    <div className="flex flex-col h-full w-[90%] mx-auto py-6 justify-between">
                        <div className="flex flex-col gap-2">
                            <h1>Hydra S</h1>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">Blue Transparent</p>
                                <span className="font-semibold tracking-wider text-lg">
                                    $ 3000
                                </span>
                            </div>
                        </div>

                        <div className="px-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between text-sm">
                                <p>
                                    Color : <span>Black</span>
                                </p>
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
                            <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
                                <HiOutlineShoppingCart strokeWidth={2} className="h-4 w-4" /> Buy on Whatsapp
                            </button>
                            <button 
                                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md"
                                onClick = {() => setIsOpen(true)}
                            >
                                Select Lens
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-md">
                                <IoIosShareAlt strokeWidth={2} className="h-4 w-4" /> Share Now
                            </button>
                        </div>

                        {/* Size And Rating  */}
                        <div className="flex items-center justify-between">
                            <button className="border-2 text-sm px-4 py-1 rounded-md "> Size Guide</button>

                            <div class="flex items-center">
                                <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
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

                <div className="h-[30rem] grid grid-cols-7 gap-2">
                    <div className="col-span-5 border py-3">
                        <SingleItemDescription />

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
