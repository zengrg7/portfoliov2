import Image from "next/image";
import React from "react";
import Title from "../ui/Title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ margin: "-200px", once: true }}
      id="about"
      className="w-full flex items-center justify-center pt-20">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-center">
        <div className="flex flex-col gap-10">
          <Title name="About Me" />
          <div className="flex flex-col gap-6 text-slate w-full md:w-[650px]">
            <p className="">
              Hello! I&rsquo;m <span className="text-green">Bijen</span>, and
              I&rsquo;m passionate about crafting engaging experiences on the
              web. My journey into web development began back in 2014 when a
              teacher at school ignited my curiosity by teaching me how to build
              and style websites using HTML and CSS. Fast forward to today, and
              I&rsquo;ve had the exciting opportunity to work at an innovative
              IT company.
            </p>
            <p>
              Currently, I’m dedicated to creating accessible and inclusive
              products and digital experiences at{" "}
              <Link
                href={"https://itsansaar.com.np"}
                target="_blank"
                className="text-green">
                I.T. Sansaar
              </Link>
              , catering to a diverse range of clients. I love the challenge of
              designing solutions that are not only functional but also visually
              appealing and user-friendly. When I&rsquo;m not coding, you might
              find me exploring the latest tech trends, brainstorming new ideas,
              or sharing my knowledge with the developer community.
            </p>
            <p></p>
          </div>
        </div>
        <div className="size-[300px] border-2 border-green rounded-xl">
          <div
            className="-translate-x-3 -translate-y-3 size-[300px] rounded-xl hover:-translate-x-4
                      hover:-translate-y-5 bg-green transition-transform duration-300">
            <Image
              className="grayscale mix-blend-multiply rounded-xl hover:filter-none hover:mix-blend-normal
                        transition-transform ease-in-out duration-300"
              src={"/bijen-headshot.webp"}
              width={350}
              height={350}
              alt="bijen's image"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
