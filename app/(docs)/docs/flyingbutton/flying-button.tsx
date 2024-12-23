'use client'
import gsap from 'gsap';
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaFireFlameCurved } from "react-icons/fa6";

const FlyingButton = ({ name, video, link, icon }: { name: string, color: string, video: string, link: string, icon: ReactNode }) => {
    return <>

        <motion.div drag className='flex gap-0 w-[8rem] h-full flex-col'>

            <div className='w-[8rem] flex items-center justify-center font-oswald rounded-t-md h-[4rem] overflow-hidden border-2 border-zinc-900'>
                <video src={video} autoPlay loop muted className="w-full h-full object-cover" />
            </div>


            <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ backgroundColor: "#000000" }}
                animate={{
                    rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "linear",
                }}
                className="w-[8rem] flex flex-col items-center justify-center rounded-b-md h-[2.5rem] bg-zinc-900"
            >
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="flex p-2 gap-2 items-center justify-center">
                    <div className="text-md text-white font-oswald font-bold">
                        {name}
                    </div>
                    <div className="">
                        {icon}
                    </div>
                </a>
            </motion.div>



            <div className='flex items-center justify-center'>

                <motion.div
                    whileInView={{
                        rotate: 210,
                        color: "#FEDE17",
                        scale: [0.8, 0.9, 1, 0.9, 0.8],
                    }}
                    transition={{
                        scale: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "easeInOut",
                        },
                        color: { duration: 1 },
                    }}
                    className="text-2xl text-white flex items-center justify-center"
                >
                    <FaFireFlameCurved />
                </motion.div>
                <motion.div
                    whileInView={{
                        rotate: 180,
                        color: "#FF9000",
                        scale: [1.1, 0.9, 1, 0.9, 1.1],
                    }}
                    transition={{
                        scale: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "easeInOut",
                        },
                        color: { duration: 1 },
                    }}
                    className="text-2xl text-white flex items-center justify-center"
                >
                    <FaFireFlameCurved />
                </motion.div>
                <motion.div
                    whileInView={{
                        rotate: 150,
                        color: "#FEDE17",
                        scale: [0.8, 0.9, 1, 0.9, 0.8],
                    }}
                    transition={{
                        scale: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "easeInOut",
                        },
                        color: { duration: 1 },
                    }}
                    className="text-2xl text-white flex items-center justify-center"
                >
                    <FaFireFlameCurved />
                </motion.div>

            </div>
        </motion.div>


    </>
}


export default FlyingButton;









