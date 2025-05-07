import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  technologies,
  image,
  link,
  index,
}: {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  index: number;
}) {
  return (
    <div className="relative flex even:flex-row-reverse w-full 2xl:w-4/5 ">
      <motion.div
        initial={{
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        viewport={{ margin: "-100px 0px 0px 0px", once: true }}
        className="absolute lg:static top-0 left-0 w-full h-full lg:aspect-[9/5] lg:w-auto lg:h-[355px] bg-green rounded-lg group
         hover:cursor-pointer z-10">
        <Image
          src={image}
          alt={name}
          width={639}
          height={355}
          className=" w-full h-full rounded-lg grayscale mix-blend-multiply object-cover
           group-hover:filter-none group-hover:mix-blend-normal"
        />
      </motion.div>
      <motion.div
        initial={{ x: index % 2 === 1 ? -300 : 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ margin: "-100px 0px 0px 0px", once: true }}
        className={`z-20 flex flex-col gap-6 justify-center lg:bg-transparent bg-[#0a192fef] p-6 lg:p-0 text-lightSlate
           lg:text-slate ${
             index % 2 === 0
               ? "lg:items-start lg:-mr-24"
               : "lg:items-end lg:-ml-24"
           }`}>
        <Link
          href={link}
          target="_blank"
          className="text-2xl text-offWhite font-semibold hover:text-green">
          <p className="sr-only">{name}</p>
          {name}
        </Link>
        <p
          className={`${
            index % 2 === 1 ? "lg:text-right pl-4" : "pr-4"
          } lg:bg-navy lg:py-6 rounded-md`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-6">
          {technologies.map((item) => (
            <p className="text-sm" key={item}>
              {item}
            </p>
          ))}
        </div>
        <Link className="w-fit" href={link} target="_blank">
          <p className="sr-only">{link}</p>
          <RxExternalLink className="text-2xl hover:text-green" />
        </Link>
      </motion.div>
    </div>
  );
}
