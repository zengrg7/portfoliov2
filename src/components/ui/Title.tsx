import React from "react";

export default function Title({
  name,
  reverse,
}: {
  name: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 w-full ${
        reverse && "flex-row-reverse"
      }`}>
      <p className="capitalize text-orange-400 text-3xl font-bold">{name}</p>
      <div className="h-[1px] w-1 bg-slate flex-grow"></div>
    </div>
  );
}
