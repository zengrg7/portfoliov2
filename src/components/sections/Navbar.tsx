"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    "about",
    "skills",
    "education",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <div className="my-container py-4 flex justify-between w-full items-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          className="size-20"
          src={"/bijen-logo.svg"}
          width={100}
          height={100}
          alt="logo"
        />
      </motion.div>

      <div className="flex gap-12 items-center">
        {navItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { delay: index * 0.1 },
            }}
            className="relative group"
            key={item}>
            <Link className="text-green capitalize" href={`/#${item}`}>
              {item}
            </Link>
            <div className="absolute w-0 border-b-2 border-b-green group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
