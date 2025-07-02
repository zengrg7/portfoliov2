import React from "react";
import TitleTwo from "../ui/TitleTwo";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      className="flex flex-col gap-20 pt-10 lg:pt-20 overflow-x-hidden">
      <TitleTwo name="My Projects" />
      <div className="flex flex-col gap-20 justify-center items-center">
        {myProjects.map((item, index) => (
          <ProjectCard key={item.name} index={index + 1} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
// initial={{ display: "none", opacity: 0 }}
//       whileInView={{ display: "block", opacity: 1 }}
//       viewport={{ margin: "-100px 0px 0px 0px", once: true }}

const myProjects = [
  {
    name: "Alpine Club of Himalaya",
    description:
      "I developed this complete travel booking website for Alpine Club of Himalaya using Next.js and MongoDB. The platform leverages server actions to efficiently retrieve data from the database, enabling clients to book travel packages and securely make payments. It also features a comprehensive admin panel that allows administrators to manage and update all website data.",
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "Typescript",
      "Docker",
      "VPS",
      "NextUI",
    ],
    image: "/alpineclubofhimalaya.png",
    link: "https://alpineclubofhimalaya.com",
  },
  {
    name: "Lakhey Wears",
    description:
      "I developed this e-commerce website for the Lakheywears clothing brand using Next.js, which significantly enhances both the customer and administrative experience. The platform enables customers to effortlessly browse through a diverse range of products, add items to their cart, and complete purchases with secure payment options.",
    technologies: ["Next JS", "Tailwind CSS", "Typescript", "Vercel", "NextUI"],
    image: "/lakheywears.png",
    link: "https://lakhey-wears.vercel.app",
  },
  {
    name: "Bondspotless",
    description:
      "Bondspotless, an Australian cleaning service provider, now boasts a modern and efficient website built with Next.js. While largely static for speed, the site utilizes Incremental Static Regeneration (ISR) to create dynamic service pages for all locations, easily managed through a dedicated admin dashboard. The admin interface also simplifies communication and recruitment by collecting contact form submissions and job applications.",
    technologies: ["Next JS", "Tailwind CSS", "Typescript", "Vercel", "NextUI"],
    image: "/bondspotless.png",
    link: "https://bondspotless.com.au",
  },
  {
    name: "ZenGPT",
    description:
      "ZenGPT is a real-time chatbot built with Next.js and the Vercel AI SDK, integrated with Gemini Flash 2.0. It streams responses as users type their queries, offering a smooth and interactive chat experience. Styled with Tailwind CSS and Shadcn UI, the app is fully deployed on Vercel.",
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "Typescript",
      "Vercel AI SDK",
      "Shadcn UI",
    ],
    image: "/zengpt.png",
    link: "https://zengpt-ashy.vercel.app/",
  },
  {
    name: "Leaf Holidays",
    description:
      "I developed this dynamic travel website for Leaf Holidays Pvt. Ltd. travel company to provide a seamless user experience for both customers and administrators. Customers can easily browse through various travel packages, select and book their desired trips, and make secure payments online.",
    technologies: [
      "Next JS",
      "Bootstrap",
      "JavaScript",
      "Vercel",
      "MaterialUI",
    ],
    image: "/leafholidays.png",
    link: "https://leafholidays.vercel.app",
  },
  {
    name: "Ecommercery",
    description:
      "I developed Ecommercery as a hobby project upon discovering that Next.js 13 is a full-stack framework. This project marked my first foray into full-stack development, where I learned how APIs work and successfully implemented them into the website.",
    technologies: ["Next JS", "JavaScript", "Vercel"],
    image: "/ecommercery.png",
    link: "https://ecommerce-peach-iota.vercel.app/",
  },
];
