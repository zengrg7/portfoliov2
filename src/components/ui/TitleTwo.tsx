import React from "react";
import { motion } from "framer-motion";

export default function TitleTwo({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px 0px 0px 0px", once: true }}
      className={`flex items-center justify-center w-full`}>
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <hr className="w-full h-[1px] bg-orange-400 absolute" />
        <p className="capitalize text-orange-400 text-2xl lg:text-3xl font-bold bg-navy z-10 px-4">
          {name}
        </p>
      </div>
    </motion.div>
  );
}
