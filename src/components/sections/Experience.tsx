import React, { useState } from "react";
import TitleTwo from "../ui/TitleTwo";
import { motion, useAnimate } from "framer-motion";

export default function Experience() {
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState(0);

  const handleExperienceChange = async (index: number) => {
    await animate("#experienceCard", { opacity: 0, x: 300 }, { duration: 0.5 });
    setActive(index);
    await animate("#experienceCard", { opacity: 1, x: 0 }, { duration: 0.5 });
  };
  return (
    <div
      ref={scope}
      id="experience"
      className="flex flex-col items-center gap-14 pt-10 lg:pt-20">
      <TitleTwo name="My Experiences" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px 0px 0px 0px", once: true }}
        className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full lg:w-2/3 ">
        <div className="flex lg:flex-col lg:items-start">
          {myExperiences.map((item, index) => (
            <div
              onClick={() => handleExperienceChange(index)}
              className={`text-sm md:text-base text-center py-2 px-6 border-b-2 lg:border-b-0 lg:border-l-2 hover:cursor-pointer hover:bg-lightNavy ${
                active === index
                  ? "border-green text-green bg-lightNavy"
                  : "border-lightestNavy text-slate"
              }`}
              key={item.year}>
              {item.company}
            </div>
          ))}
        </div>
        <div
          id="experienceCard"
          className="flex flex-col gap-6 w-full lg:w-1 lg:flex-grow pt-1 text-slate">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">
              <span className="text-offWhite">
                {myExperiences[active].role}
              </span>
              <span className="text-green">
                &nbsp;@&nbsp;{myExperiences[active].company}
              </span>
            </h3>
            <p className="text-sm">{myExperiences[active].year}</p>
          </div>
          <ul className="flex flex-col gap-2">
            {myExperiences[active].description.map((item, index) => (
              <li
                className="relative before:content-['▹'] before:text-green before:absolute before:left-0 pl-8"
                key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
const myExperiences = [
  {
    year: "May 2025 - Present",
    company: "DIGU, LLC",
    role: "Full-Stack Developer",
    description: [
      "Integrated HubSpot with the backend to display blog content on the website and capture leads from potential customers.",
      "Integrated the ClickUp webhooks to add contacts(task) added in clickup to hubspot.",
      "Removed redundant code and optimized the existing codebase, improving overall performance and maintainability.",
      "Implemented caching strategies to enhance application performance and reduce server load.",
      "Collaborated with cross-functional teams to deliver high-quality, scalable solutions, adhering to agile methodologies and best practices.",
    ],
  },

  {
    year: "Jan 2024 - Apr 2025",
    company: "I.T. Sansaar",
    role: "Full-Stack Developer",
    description: [
      "Developed and maintained full stack web applications using the Next.js React framework, ensuring seamless integration of frontend and backend functionalities.",
      "Implemented server-side rendering, API routes, and dynamic routing in Next.js to optimize application performance and enhance user experience.",
      "Designed and managed databases using technologies such as MongoDB, facilitating efficient data storage and retrieval.",
      "Collaborated with cross-functional teams to deliver high-quality, scalable solutions, adhering to agile methodologies and best practices.",
      "Conducted thorough code reviews and implemented automated testing to maintain code quality and reliability.",
    ],
  },
  {
    year: "Aug 2022 - Dec 2023",
    company: "I.T. Sansaar",
    role: "Front-End Developer",
    description: [
      "Developed responsive and interactive web interfaces using React, enhancing user engagement and overall experience.",
      "Transitioned to Next.js, leveraging its features to improve application performance and SEO capabilities.",
      "Collaborated with backend developers to integrate APIs, ensuring seamless data flow and functionality across the application.",
      "Participated in design discussions and contributed to the creation of user-friendly UI/UX designs.",
      "Optimized frontend code for performance and scalability, adhering to best practices and industry standards.",
    ],
  },
  {
    year: "Apr 2022 - Jul 2022",
    company: "I.T. Sansaar",
    role: "Front-End Intern",
    description: [
      "Assisted in developing web applications using JavaScript, gaining hands-on experience in frontend technologies.",
      "Learned and applied React to build dynamic and interactive user interfaces, contributing to project development.",
      "Worked closely with senior developers, receiving mentorship and guidance on coding practices and project management.",
      "Participated in code reviews and testing, ensuring the delivery of high-quality, bug-free software.",
      "Contributed to documentation and knowledge sharing, helping to maintain a collaborative and informed team environment.",
    ],
  },
];
