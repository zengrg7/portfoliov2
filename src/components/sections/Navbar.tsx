"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navItems = [
    "about",
    "skills",
    "education",
    "experience",
    "projects",
    "contact",
  ];

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(controlNavbar, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky z-50 bg-navy ${
        showNav ? "top-0" : "-top-32"
      } transition-all duration-500`}>
      <div className="relative py-4 flex justify-between w-full items-center my-container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image
            priority
            className="size-10 md:size-16 lg:size-20"
            src={"/bijen-logo.svg"}
            width={80}
            height={80}
            alt="logo"
          />
        </motion.div>

        <div className="absolute top-4 right-0 lg:top-0 h-full flex lg:items-center">
          <div
            className={`flex-col lg:flex-row pr-4 lg:pr-10 xl:pr-12 2xl:pr-24 gap-20 md:gap-8 lg:gap-12 items-center
            w-full `}>
            <div className="flex justify-end lg:hidden">
              <motion.div
                initial={{ x: -10, y: -10, opacity: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}>
                <GiHamburgerMenu
                  className={`text-3xl text-green ${open ? "hidden" : "block"}`}
                  onClick={() => setOpen(true)}
                />
                <GiCrossMark
                  className={`text-3xl text-green ${open ? "block" : "hidden"}`}
                  onClick={() => setOpen(false)}
                />
              </motion.div>
            </div>
            <div
              className={`${
                open
                  ? "flex flex-col lg:flex-row items-end w-screen lg:w-full"
                  : "hidden lg:flex lg:flex-row"
              } gap-8 lg:gap-12 mt-6 pb-8 bg-navy`}>
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
                  <Link
                    className="text-green capitalize text-lg lg:text-base"
                    href={`/#${item}`}>
                    {item}
                  </Link>
                  <div className="absolute w-0 border-b-2 border-b-green group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
