"use client";
import GlassesType from "@/Components/GlassesType";
import Slider from "@/Components/Swiper/Slider";
import SwiperContainer from "@/Components/Swiper/SwiperContainer";
import Layout from "@/Layout/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import useGetAllProducts from "@/utils/queries/admin/UseProductGetAll";
import Loader from "@/Components/Loader";

export default function Home() {
  const [Tend, setTend] = useState([]);
  const [Computer, setComputer] = useState([]);
  const [Round, setRound] = useState([]);
  const [Rimless, setRimless] = useState([]);

  const product = useGetAllProducts();
  useEffect(() => {
    if (product.data) {
      const round = product?.data?.filter(
        (vlaue) => vlaue?.shape_?.name == "Round"
      );
      const rimless = product?.data?.filter(
        (vlaue) => vlaue?.style_?.name == "Rimless"
      );
      setRound(round);
      setRimless(rimless);
    }
  }, [product]);
  if (product.isLoading) {
    return <Loader />;
  }
  return (
    <Layout>
      <section className="flex flex-col h-auto gap-7">
        <div className=" overflow-auto flex">
          <GlassesType />
        </div>
        <div>
          <p className="  text-5xl text-center">EYEGLASSES</p>
          <p className=" text-center  text-5xl  font-semibold mb-5">TREND</p>
          <Slider />
        </div>

        <div className="w-full">
          <Image
            src="/banner1.png"
            width={200}
            height={100}
            alt=""
            className="w-full h-[350px] object-cover"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <Image
            src="/banner1.png"
            alt=""
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/banner1.png"
            alt=""
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/banner1.png"
            alt=""
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full border p-2 bg-gray-50">
          <div className="w-full text-center bg-white tracking-wider space-y-3">
            <p className="text-xl py-1 ">
              Discount On Every Single Item On Our Site.
            </p>
            <p className="text-3xl font-bold py-1">
              OMG! JUST LOOK AT THE GREAT DEALS!
            </p>
            <div className="text-gray-700 font-semibold p-2 rounded-md py-1 ">
              HOW DOES IT FEEL, WHEN YOU SEE GREAT DISCOUNT DEALS FOR EACH
              PRODUCT?
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>
                <span className="border-b-2 border-gray-700">
                  Round Glasses
                </span>
              </h1>
            </div>
            <SwiperContainer />
          </div>

          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">
                  Computer Glasses
                </span>
              </h1>
            </div>
            <SwiperContainer />
          </div>

          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">
                  Rounded Glasses
                </span>
              </h1>
            </div>
            <SwiperContainer />
          </div>
        </div>

        <div className="w-full text-center gap-3 bg-gray-100 space-y-3 p-10 my-2 tracking-wider">
          <p className="text-xl">
            Save Up | What a great Deal | Don&apos;t think Do It!
          </p>
          <p className="text-3xl font-bold">
            OMG! JUST LOOK AT THE GREAT DEALS!
          </p>
        </div>

        <div className="w-full relative">
          <img
            src="/banner5.png"
            // width={200}
            height={400}
            alt=""
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2  text-center space-y-2">
            <p className="text-sm min-[500]:text-lg md:text-xl text-gray-500">
              save up to 30% off
            </p>
            <p className="font-bold text-2xl min-[500]:text-4xl md:text-6xl text-sky-400">
              women<span className="text-blue-700">fashion</span>
            </p>
          </div>
          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">Sun Glasses</span>
              </h1>
            </div>
            <SwiperContainer />
          </div>
          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">
                  Rimless Glasses
                </span>
              </h1>
            </div>
            <SwiperContainer />
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Image
              src="/banner1.png"
              alt=""
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/banner1.png"
              alt=""
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/banner1.png"
              alt=""
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>
                <span className="border-b-2 border-gray-700">Kids Glasses</span>
              </h1>
            </div>
            <SwiperContainer />
          </div>
        </div>
      </section>
    </Layout>
  );
}
