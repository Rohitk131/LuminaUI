"use client";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spootlight";
import Image from "next/image";
import { Icons } from "@/components/icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import CardCollection from "@/components/spectrumui/cards";
import Requestcomponents from "@/components/shinebutton";
import { Axis3DIcon } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const[star, setStar] = useState(0);
  // Motion configuration for staggered animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const fetchGithubData = () => {
    axios
      .get("https://api.github.com/repos/arihantcodes/spectrum-ui")
      .then((response) => {
        const star = response.data.stargazers_count;
        setStar(star);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  };

  useEffect(() => {
    fetchGithubData();
  }, []);
  return (
    <motion.div
      className="flex items-center justify-center flex-col"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      <motion.div
        className="flex items-center justify-center mt-12"
        variants={staggerItem}
      >
        <div className="flex flex-col items-center">
          <Requestcomponents />
          <h1 className="md:text-6xl text-2xl text-center md:mt-12 font-bold">
            Instant UI Components <br /> Just{" "}
            <Cover>
              <span className=" dark:text-neutral-100">Copy, Paste & Done</span>
            </Cover>
          </h1>
          <p className="text-md md:text-lg text-center mt-6 mb-5 text-gray-400">
            Accelerate your project’s growth with ready-to-use UI components{" "}
            <br /> that save time and elevate quality
          </p>
          <h1 className="text-center font-bold mt-6 text-2xl text-gray-400">
            Built With
          </h1>
          <motion.div
            className="flex flex-col mb-4 md:flex-row items-center justify-center mt-4 gap-5"
            variants={staggerItem}
          >
            <Image src="./nextjs.svg" height={40} width={90} alt="next js" />
            <Image src="./shadcn.svg" height={40} width={140} alt="shadcn ui" />
            <Image
              src="./tailwind.svg"
              height={40}
              width={120}
              alt="tailwind css"
            />
            <Image
              src="./aceternity.svg"
              height={40}
              width={160}
              alt="acternity ui"
            />
          </motion.div>
          <motion.div
            className="flex gap-6 flex-col md:flex-row items-center justify-center"
            variants={staggerItem}
          >
            <Link href="/docs">
              <Button size={"lg"} className="rounded-2xl">
                Explore Components
              </Button>
            </Link>
            <Link href="https://github.com/arihantcodes/spectrum-ui">
              <Button
                className="gap-4 rounded-2xl"
                variant={"secondary"}
                size={"lg"}
              >
                <Icons.gitHub className="icon-class w-4 " />
                Give a Star ⭐ {star}
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="">
          <div className="md:ml-5 h-full w-full"></div>
        </div>
      </motion.div>

      
    </motion.div>
  );
}
