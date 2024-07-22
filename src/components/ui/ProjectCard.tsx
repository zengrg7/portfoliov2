import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxExternalLink } from "react-icons/rx";

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
    <div className="flex even:flex-row-reverse w-4/5">
      <div className="aspect-[9/5] h-[355px] bg-green rounded-lg group hover:cursor-pointer">
        <Image
          src={image}
          alt={name}
          width={639}
          height={355}
          className="aspect-[9/5] rounded-lg grayscale mix-blend-multiply object-cover
           group-hover:filter-none group-hover:mix-blend-normal"
        />
      </div>
      <div
        className={`z-10 flex flex-col gap-6 justify-center  ${
          index % 2 === 0 ? "items-start -mr-24" : "items-end -ml-24"
        }`}>
        <Link
          href={link}
          target="_blank"
          className="text-2xl text-offWhite font-semibold hover:text-green">
          {name}
        </Link>
        <p
          className={`${
            index % 2 === 1 && "text-right"
          } bg-lightNavy text-slate p-6 rounded-md`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-6">
          {technologies.map((item) => (
            <p className="text-sm text-slate" key={item}>
              {item}
            </p>
          ))}
        </div>
        <Link href={link} target="_blank">
          <RxExternalLink className="text-xl text-slate hover:text-green" />
        </Link>
      </div>
    </div>
  );
}
