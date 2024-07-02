import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import travel from "@/public/Screenshot 2024-05-25 at 12.01.16 AM.png";
import tarim from "@/public/Screenshot 2024-05-25 at 12.12.47 AM.png";
import alkon from "@/public/do-front-and-back-end-web-pages.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Australia",
    description:
      "I graduated after 10 months of studying. I did two projects during studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Takeaway shop manager",
    location: "Brisbane,Australia",
    description:
      "I run a takeaway shop in Brisbane. I was responsible for all the operations of the shop.",
    icon: React.createElement(CgWorkAlt),
    date: "2014",
  },
  {
    title: "Mechanical Engineer",
    location: "Izmir,Turkey",
    description:
      "I worked a mechanical engineer in Alkon Energy in Turkey. I was responsible for the design of the energy systems.",
    icon: React.createElement(FaReact),
    date: "2012",
  },
  {
    title: "Mechanical Engineer",
    location: "Istanbul,Turkey",
    description:
      "I worked a mechanical engineer in Turkish Airlines in Turkey.",
    icon: React.createElement(FaReact),
    date: "2012",
  },
] as const;

export const projectsData = [
  {
    title: "Travel Log",
    description:
      "Final projects for my web development course. It's a travel blog website.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: travel,
  },
  {
    title: "Agriculture",
    description: "I created a website for Agriculture conference in Turkey.",
    tags: ["React", "TypeScript", "Next.js", "MangoDB"],
    imageUrl: tarim,
  },
  {
    title: "Alkon Energy",
    description: "I created a website for an energy company in Turkey.",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: alkon,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
