"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import LogoHeader from "@/public/logo-bloomy.png";
import Image from "next/image";
export function Hero() {
  return (
    <div className="border-b-2 border-black">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative  flex flex-col gap-4 items-center justify-center px-4"
        >
          <Image src={LogoHeader} alt="Logo Header" width={500} />
          <div className="font-extralight text-base md:text-4xl text-[#2694ca] py-4">
            Step forward with blue technology!
          </div>
          <button className="bg-[#2694ca]  rounded-full w-fit text-white px-4 py-2">
            Explore now
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
