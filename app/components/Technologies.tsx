"use client";

import Image from "next/image";
import tensorflow from "@/public/tensorflow-icon.svg";
import google_cloud from "@/public/google_cloud-icon.svg";
import kotlin from "@/public/kotlinlang-icon.svg";

export function Technologies() {
  return (
    <div className="p-10 mb-20">
      <h1 className="text-xl font-bold text-center mb-4 group-hover:bg-black">
        Tech
      </h1>
      <div className="flex justify-center gap-x-5">
        <Image src={tensorflow} alt="TensorFlow Logo" height={50} width={50} />
        <Image src={google_cloud} alt="Google Cloud" height={50} width={50} />
        <Image src={kotlin} alt="Kotlin" height={50} width={50} />
      </div>
      <p className="text-center">TensorFlow, Google Cloud, Kotlin</p>
    </div>
  );
}

export default Technologies;
