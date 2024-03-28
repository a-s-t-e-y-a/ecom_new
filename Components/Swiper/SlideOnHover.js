import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { env } from '@/next.config';
import Image from 'next/image';

const SlideOnHover = ({ data }) => {
    const [play,setPlay] = React.useState(false)
    const url = 'https://akkukachasma.s3.amazonaws.com/product_images/'
    return (
        <div className='w-full mx-auto '>
            <Carousel  
                infiniteLoop 
                useKeyboardArrows 
                autoPlay={play}
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                interval={1000}
            >
                {
                    data.map((item, index) => (
                        <div 
                            className='cursor-pointer max-h-[200px] min-h-[200px]  py-2  mx-auto px-5' 
                            key={index} 
                            onMouseEnter={()=>setPlay(true)} 
                            onMouseLeave={()=>setPlay(false)}
                        >
                            <Image width={100} height={100} alt='galess' src={url+item} className=" object-cover" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default SlideOnHover