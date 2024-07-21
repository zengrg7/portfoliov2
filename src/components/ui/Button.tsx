import React from "react";

export default function Button({ name, icon }: { name: string; icon: any }) {
  return (
    <button className="w-48 h-12 relative rounded-full border-2 border-green flex items-center justify-center group overflow-hidden">
      <span className="w-48 h-full absolute bg-green -translate-x-48 group-hover:translate-x-0 transition-transform duration-500 "></span>
      <span className="flex gap-4 items-center text-green group-hover:text-navy z-10 font-semibold transition-colors duration-500 capitalize">
        <span>{name}</span> {icon}
      </span>
    </button>
  );
}
