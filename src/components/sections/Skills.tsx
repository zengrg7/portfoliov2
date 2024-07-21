import React from "react";
import SkillCard from "../ui/SkillCard";
import TitleTwo from "../ui/TitleTwo";

export default function Skills() {
  const mySkills = [
    { name: "Next.js", icon: "/nextJS.png" },
    { name: "React", icon: "/react.png" },
    // { name: "AWS", icon: "/aws.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    // { name: "Figma", icon: "/figma.png" },
    // { name: "Firebase", icon: "/firebase.png" },
    { name: "MongoDB", icon: "/mongoDB.png" },
    { name: "Git", icon: "/git.png" },
    { name: "Material UI", icon: "/materialui.png" },
    { name: "Tailwind", icon: "/tailwind.png" },
    { name: "Bootstrap", icon: "/bootstrap.png" },
  ];
  return (
    <div className="flex flex-col gap-20 items-center">
      <TitleTwo name="My Skills" />
      <div className="flex gap-10 items-center justify-center overflow-hidden flex-wrap">
        {mySkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
