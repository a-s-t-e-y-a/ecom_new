import GlassesType from "@/Components/GlassesType"
import Slider from "@/Components/Swiper/Slider"
import SwiperContainer from "@/Components/Swiper/SwiperContainer"
import Layout from "@/Layout/Layout"
import Image from "next/image"

export default function Home() {
  
  return (
    <Layout>
      <section className="flex flex-col h-auto gap-5">
        <GlassesType />

        <div className="flex items-center justify-between gap-2 h-[200px] overflow-hidden my-1">
          <p className="flex flex-col font-bold text-5xl text-center">
            <span>EYEGLASSES</span>
            <span className="font-semibold">TREND</span>
          </p>
          <Slider />
        </div>

        <div className="w-full">
          <Image 
            src="/banner1.png"
            width={200}
            height={100}
            alt=""
            className="w-full h-44 object-cover"
          />

          <div className="mt-7">
            <div className="p-2 rounded-md">
              <h1 className="tracking-wide text-xl text-center"><span className="uppercase text-gray-600 mr-2">Best Seller</span> <span className="border-b-2 border-gray-700">Round Glasses</span></h1>
            </div>
            <SwiperContainer />
          </div>

          <div className="mt-7">
            <div className="p-2 rounded-md">
              <h1 className="tracking-wide text-xl text-center"><span className="uppercase text-gray-600 mr-2">Best Seller</span> <span className="border-b-2 border-gray-700">Computer Glasses</span></h1>
            </div>
            <SwiperContainer />
          </div>

          <div className="mt-7">
            <div className="p-2 rounded-md">
              <h1 className="tracking-wide text-xl text-center"><span className="uppercase text-gray-600 mr-2">Best Seller</span> <span className="border-b-2 border-gray-700">Rounded Glasses</span></h1>
            </div>
            <SwiperContainer />
          </div>
        </div>
      </section>
    </Layout>
  )
}
