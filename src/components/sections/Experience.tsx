import React, { useState } from "react";
import TitleTwo from "../ui/TitleTwo";
import { motion } from "framer-motion";

export default function Experience() {
  const [active, setActive] = useState(0);
  return (
    <div id="experience" className="flex flex-col items-center gap-14 pt-20">
      <TitleTwo name="My Experiences" />
      <div className="flex gap-10 w-1/2 ">
        <div className="flex flex-col">
          {myExperiences.map((item, index) => (
            <div
              onClick={() => setActive(index)}
              className={`py-2 px-6 border-l-2 hover:cursor-pointer hover:bg-lightNavy ${
                active === index
                  ? "border-green text-green bg-lightNavy"
                  : "border-lightestNavy text-slate"
              }`}
              key={item.year}>
              {item.company}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 w-1 flex-grow pt-1 text-slate">
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
      </div>
    </div>
  );
}
const myExperiences = [
  {
    year: "Jan 2024 - Current",
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
