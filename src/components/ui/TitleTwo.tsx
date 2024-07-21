import React from "react";

export default function TitleTwo({ name }: { name: string }) {
  return (
    <div className={`flex items-center justify-center w-full`}>
      <div className="w-1/2 flex items-center justify-center relative">
        <hr className="w-full h-[1px] bg-orange-400 absolute" />
        <p className="capitalize text-orange-400 text-3xl font-bold bg-navy z-10 px-4">
          {name}
        </p>
      </div>
    </div>
  );
}
