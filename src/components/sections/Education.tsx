import React from "react";
import TitleTwo from "../ui/TitleTwo";
import EducationCard from "../ui/EducationCard";
import { RiSchoolFill } from "react-icons/ri";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa6";

export default function Education() {
  const myEducation = [
    {
      year: "2017-2022",
      degree: "Bachelor's Degree",
      institution: "Amrit Campus",
      course: "Bsc. CSIT",
      icon: <FaSchool />,
    },
    {
      year: "2015-2017",
      degree: "Higher Secondary School",
      institution: "Prasadi Academy",
      course: "Science",
      icon: <BiSolidSchool />,
    },
    {
      year: "2015",
      degree: "Secondary School",
      institution: "Harati Shikshya Mandir",
      icon: <RiSchoolFill />,
    },
  ];
  return (
    <div
      id="education"
      className="w-full flex flex-col items-center justify-center gap-10 lg:gap-20 pt-10 lg:pt-20">
      <TitleTwo name="My Education" />
      <div className="w-full flex flex-col items-center justify-center gap-10">
        {myEducation.map((item) => (
          <EducationCard key={item.year} {...item} />
        ))}
      </div>
    </div>
  );
}
