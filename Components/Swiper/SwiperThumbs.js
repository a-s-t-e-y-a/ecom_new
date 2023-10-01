import { TransparentGlass } from "@/Layout/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SwiperThumbs = () => {
    return (
            <Carousel 
                className="h-full w-[88%] mx-auto my-auto" 
                showArrows={true} 
                infiniteLoop 
                useKeyboardArrows 
                autoPlay
            >
                    {
                        TransparentGlass.map((item, index) => (
                            <div key={index}>
                                <img src={item.src} className="w-[90%]" />
                                {/* <p className="legend">{item.title}</p> */}
                            </div>
                        ))
                    }
            </Carousel>
    );
};

export default SwiperThumbs;
