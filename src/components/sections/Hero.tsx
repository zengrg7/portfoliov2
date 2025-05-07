import Link from "next/link";
import React, { useEffect } from "react";
import { LuInstagram, LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaMinus, FaXmark, FaRegFilePdf } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion, stagger, useAnimate } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const [scope, animate] = useAnimate();

  const animateHeroSection = async () => {
    await animate("#hero-code-section", { borderWidth: 2 }, { duration: 0.1 });
    await animate("#hero-window-icons", { opacity: 1 }, { duration: 0 });
    await animate(
      "#hero-code div",
      { opacity: 1 },
      { duration: 0.05, delay: stagger(0.1) }
    );
    await animate("#hero-intro span", { opacity: 1 }, { delay: stagger(0.1) });
    await animate("#hero-socials div", { opacity: 1 }, { delay: stagger(0.1) });
    await animate("#hero-buttons div", { opacity: 1 }, { delay: stagger(0.1) });
  };
  useEffect(() => {
    animateHeroSection();
  }, []);
  return (
    <div
      ref={scope}
      className="flex flex-col-reverse lg:h-[calc(100vh-112px)] lg:max-h-[800px] lg:flex-row gap-0 lg:gap-32">
      <div className="flex flex-col gap-6 w-full lg:w-[37%] font-bold text-offWhite h-full justify-center">
        <div className="flex flex-col gap-2 text-3xl lg:text-5xl">
          <div id="hero-intro" className="leading-tight">
            <motion.span initial={{ opacity: 0 }}>Hi,</motion.span> <br />
            <motion.span initial={{ opacity: 0 }}>I am</motion.span>{" "}
            <motion.span initial={{ opacity: 0 }} className="text-green">
              Bijen Gurung,
            </motion.span>
            <br />
            <motion.span initial={{ opacity: 0 }}>
              a professional
            </motion.span>{" "}
            <br />
            <motion.span initial={{ opacity: 0 }} className="text-orange-400">
              Full-Stack Developer
            </motion.span>
          </div>
        </div>
        <div id="hero-socials" className="flex gap-2 lg:gap-10">
          {socials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              className="text-2xl lg:text-3xl hover:text-navy hover:bg-offWhite p-3 rounded-full transition-colors duration-100">
              <Link href={item.link} target="_blank">
                <p className="sr-only">{item.id}</p>
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
        <div id="hero-buttons" className="flex gap-6 lg:gap-10">
          <motion.div initial={{ opacity: 0 }}>
            <Button
              link="mailto:bijeng695@gmailcom"
              name="contact me"
              icon={<MdOutlineEmail className="text-xl" />}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }}>
            <Button
              link="/resume.pdf"
              name="resume"
              icon={<FaRegFilePdf className="text-lg" />}
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-1 lg:flex-grow pt-10 pb-16">
        <motion.div
          id="hero-code-section"
          initial={{ borderWidth: 0 }}
          className="border-2 border-green rounded-lg w-full lg:h-full flex flex-col">
          <motion.div
            id="hero-window-icons"
            initial={{ opacity: 0 }}
            className="h-8 lg:h-14 border-b-2 border-green w-full flex items-center justify-end gap-6 pr-6 text-slate">
            {windowIcons.map((item) => (
              <div key={item.id}>{item.icon}</div>
            ))}
          </motion.div>
          <div className="px-6 py-6 lg:py-0 lg:h-1 lg:flex-grow flex items-center">
            <code
              id="hero-code"
              className="font-mono text-xs md:text-sm lg:text-base">
              <motion.div initial={{ opacity: 0 }} className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Bijen Gurung</span>
                <span className="text-gray-400">{`',`}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Git</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"'],"}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 mr-2 text-green">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }}>
                <span className="text-gray-400">{`};`}</span>
              </motion.div>
            </code>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const socials = [
  {
    id: "facebook",
    icon: <LuFacebook />,
    link: "https://www.facebook.com/zengrg777",
  },
  {
    id: "instagram",
    icon: <LuInstagram />,
    link: "https://www.instagram.com/zengrg77",
  },
  { id: "github", icon: <LuGithub />, link: "https://github.com/zengrg7" },
  {
    id: "linkedin",
    icon: <LuLinkedin />,
    link: "https://www.linkedin.com/in/bijen-gurung-b1067618b/",
  },
];

const windowIcons = [
  { id: "minimize", icon: <FaMinus className="text-sm lg:text-xl" /> },
  {
    id: "restore",
    icon: <FaRegWindowRestore className="text-xs lg:text-base" />,
  },
  { id: "remove", icon: <FaXmark className="text-sm lg:text-xl" /> },
];
