import React from "react";
import { motion } from "framer-motion";

export default function EducationCard({
  year,
  degree,
  institution,
  course,
  icon,
}: {
  year: string;
  degree: string;
  institution: string;
  course?: string;
  icon: any;
}) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ margin: "-100px", once: true }}
      className="flex items-center justify-cente w-1/2 hover:shadow-[0_0px_10px_5px_rgba(100,255,218,0.8)] rounded-lg group hover:cursor-pointer">
      <div className="flex flex-col gap-2 bg-lightNavy w-full rounded-lg px-10 py-6 border-2 border-lightestNavy group-hover:border-green group-hover:shadow-[inset_0px_0px_20px_rgba(100,255,218,0.8)]">
        <div className="flex gap-10 items-center">
          <div className="text-3xl text-offWhite">{icon}</div>
          <div>
            <p className="text-offWhite text-2xl">{degree}</p>
            <p className="text-slate text-sm">{course}</p>
            <p className="mx-auto text-green">{year}</p>
            <p className="text-offWhite text-lg">{institution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
