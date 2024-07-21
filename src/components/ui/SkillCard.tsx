import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div
      className="w-[142.4px] h-[128px] bg-lightNavy flex flex-col items-center justify-center rounded-lg relative
     overflow-hidden group hover:cursor-pointer">
      <div
        // whileHover={{
        //   rotate: "360deg",
        //   transition: {
        //     duration: 4,
        //     repeat: Infinity,
        //     ease: "linear",
        //     type: "tween",
        //   },
        // }}
        className="absolute w-1/2 h-[200px] group-hover:bg-green group-hover:animate-spin-slow transition-transform duration-[4s] ease-linear"></div>
      <div className="flex flex-col items-center justify-center gap-3 z-10 bg-navy h-[124px] w-[138.4px] rounded-lg">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className={`${name === "MongoDB" ? "w-[22px]" : "w-[40px]"} h-auto`}
        />
        <p className="text-lg text-offWhite">{name}</p>
      </div>
    </div>
  );
}
