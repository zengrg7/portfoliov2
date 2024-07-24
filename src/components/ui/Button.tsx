import Link from "next/link";
import React from "react";

export default function Button({
  link,
  name,
  icon,
}: {
  link: string;
  name: string;
  icon: any;
}) {
  return (
    <Link href={link} target="_blank">
      <button className="w-fit px-4 md:px-6 lg:px-8 h-10 lg:h-12 relative rounded-full border-2 border-green flex items-center justify-center group overflow-hidden">
        <span className="w-60 h-full absolute bg-green -translate-x-60 group-hover:translate-x-0 transition-transform duration-500 "></span>
        <span className="text-sm lg:text-base flex gap-4 items-center text-green group-hover:text-navy z-10 font-semibold transition-colors duration-500 capitalize">
          <span>{name}</span> {icon}
        </span>
      </button>
    </Link>
  );
}
