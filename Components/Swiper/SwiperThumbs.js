import { TransparentGlass } from "@/Layout/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { env } from "@/next.config"

const SwiperThumbs = ({ images }) => {
    const imageArray = images?.split(",");
    const { BASE_IMAGE_URL } = env
    return (
        <Carousel
            className="h-full w-[88%] mx-auto my-auto"
            showArrows={true}
            infiniteLoop
            useKeyboardArrows
            autoPlay
        >
            {
                imageArray && imageArray.map((item, index) => (
                    <div key={index} className="">
                        <img src={BASE_IMAGE_URL + item} className=" mx-auto" />
                    </div>
                ))
            }
        </Carousel>
    );
};

export default SwiperThumbs;
