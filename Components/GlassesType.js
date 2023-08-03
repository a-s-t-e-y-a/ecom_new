import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
const data = [
    {
        src: "sunglasses.png",
        title: "Sun Glasses"
    },
    {
        src: "eyeglasses.png",
        title: "Eye Glasses"
    },
    {
        src: "ComputerGlasses.png",
        title: "Computer Glasses"
    },
    {
        src: "buytoguide.png",
        title: "Buy To Guide"
    },
    {
        src: "readingglass.png",
        title: "Reading Glasses"
    },
    {
        src: "prescriptionglasses.jpeg",
        title: "Prescription Glasses"
    },
    {
        src: "offer99.png",
        title: "Offer 99"
    },
]
const GlassesType = () => {
    return (
        <motion.div className='w-full flex items-center gap-5 mt-6 justify-between'>
            {
                data && data.map((item, index) => (
                    <div key={index} className='flex flex-col justify-normal items-center'>
                        <motion.div className='rounded-full shadow-md hover:shadow-2xl' whileHover={{ scale: 0.8 }}>
                            <Image
                                src={`/${item.src}`}
                                width={130}
                                height={130}
                                alt="Glass Type"
                            />
                        </motion.div>
                        <p className='text-sm font-semibold tracking-wide mt-2'>{item.title}</p>
                    </div>
                ))
            }
            
        </motion.div>
    )
}

export default GlassesType