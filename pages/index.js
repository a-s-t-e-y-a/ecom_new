import GlassesType from "@/Components/GlassesType";
import Slider from "@/Components/Swiper/Slider";
import SwiperContainer from "@/Components/Swiper/SwiperContainer";
import Layout from "@/Layout/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";

import axios from "axios";

function Home() {
  const [Shape, setShape] = useState([]);
  const [Computer, setComputer] = useState([]);
  const [Round, setRound] = useState([]);
  const [Rimless, setRimless] = useState([]);
  const [sungaless, setSungaless] = useState([]);
  const fecthMultipleData = () => {
    const url = [
      "https://api.akkukachasma.com/api/products",
      "https://api.akkukachasma.com/api/categories/3",
      "https://api.akkukachasma.com/api/shape",
    ];
    axios.all(url.map((endpoints) => axios.get(endpoints))).then((data) => {
      const AllProduct = data[0];
      const Computer = data[1];
      const shape = data[2];
      const round = AllProduct?.data?.data?.filter(
        (Value) => Value?.shape_?.name === "Round" || "round"
      );
      const rimless = AllProduct?.data?.data?.filter(
        (Value) => Value?.style_?.name === "Rimless" || "rimless"
      );

      setSungaless(AllProduct?.data?.data);
      setShape(shape?.data?.data);
      setRound(round);
      setRimless(rimless);
      setComputer(Computer?.data?.data?.products);
    });
  };
  useEffect(() => {
    fecthMultipleData();
  }, []);
  return (
    <Layout>
      <section className="flex flex-col h-auto gap-7">
        <div className=" overflow-auto flex">
          <GlassesType />
        </div>
        <div>
          <p className="  text-5xl text-center">EYEGLASSES</p>
          <p className=" text-center  text-5xl  font-semibold mb-5">TREND</p>
          <Slider data={Round} />
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
            <SwiperContainer data={Round} />
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
            <SwiperContainer data={Computer} />
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
            <SwiperContainer data={Round} />
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
          <Image
            src="/banner5.png"
            width={600}
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
            <SwiperContainer data={sungaless} />
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
            <SwiperContainer data={Rimless} />
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
            <SwiperContainer data={[]} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Home;
