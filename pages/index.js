import GlassesType from "@/Components/GlassesType";
import Slider from "@/Components/Swiper/Slider";
import SwiperContainer from "@/Components/Swiper/SwiperContainer";
import Layout from "@/Layout/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [Shape, setShape] = useState([]);
  const [aviatorShape, setAviatorShape] = useState([]);
  const [wayfarer, setWayfarer] = useState([]);
  const [geometric, setGeometric] = useState([]);
  const [rectangle, setRectangle] = useState([]);
  const [hexa, setHexa] = useState([]);
  

  const fecthMultipleData = () => {
    const url = [
      "https://api.akkukachasma.com/api/shape",
      "https://api.akkukachasma.com/api/products?shape=Aviator eyeglass",
      "https://api.akkukachasma.com/api/products?shape=Wayfarer eyeglass",
      "https://api.akkukachasma.com/api/products?shape=Geometric eyeglass",
      "https://api.akkukachasma.com/api/products?shape=Rectangle Eyeglass",
      "https://api.akkukachasma.com/api/products?shape=Hexa",
    ];
    axios.all(url.map((endpoints) => axios.get(endpoints))).then((data) => {
      const shape = data[0];

      setShape(shape?.data?.data);
      setAviatorShape(data[1]?.data?.data?.products)
      setWayfarer(data[2]?.data?.data?.products)
      setGeometric(data[3]?.data?.data?.products)
      setRectangle(data[4]?.data?.data?.products)
      setHexa(data[5]?.data?.data?.products)
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
        <div className="flex flex-col md:flex-row">
          <p className="text-5xl text-center mt-16 font-bold">EYEGLASSES<span className="text-center text-5xl font-semibold mb-5"> TREND</span></p>
          {/* <p className=" text-center  text-5xl  font-semibold mb-5">TREND</p> */}
          <Slider data={Shape} />
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
        <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-3">
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

        <div className="w-[100%] border p-2  mr-2 bg-gray-50">
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
                  Aviator Eyeglasses
                </span>
              </h1>
            </div>
            <SwiperContainer data={aviatorShape} />
          </div>

          {/* <div className="mt-7">
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
          </div> */}

          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">
                  Wayfarer Eyeglass
                </span>
              </h1>
            </div>
            <SwiperContainer data={wayfarer} />
          </div>
        </div>

        <div className="w-[100%] mr-2  text-center gap-3 bg-gray-100 space-y-3 p-10 my-2 tracking-wider">
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
          <div className="absolute top-0 my-8 left-1/2 -translate-x-1/2  text-center space-y-2">
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
                <span className="border-b-2 border-gray-700">Geometric Eyeglass</span>
              </h1>
            </div>
            <SwiperContainer data={geometric} />
          </div>
          <div className="mt-7">
            <div className="p-2 rounded-md mb-4">
              <h1 className="tracking-wide text-xl text-center">
                <span className="uppercase text-gray-600 mr-2">
                  Best Seller
                </span>{" "}
                <span className="border-b-2 border-gray-700">
                  Rectangle Eyeglass
                </span>
              </h1>
            </div>
            <SwiperContainer data={rectangle} />
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="md:flex md:items-center md:justify-between gap-3 flex md:flex-row flex-col">
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
                <span className="border-b-2 border-gray-700">Hexagon eyeglasses</span>
              </h1>
            </div>
            <SwiperContainer data={hexa} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Home;
