"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa6";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About data
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ali Khanix",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98) 910 888 76 32",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Iran",
    },
    {
      fieldName: "Email",
      fieldValue: "khaniali568@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Persian(Farsi)",
    },
  ],
};

// Experience Data
const education = {
  icon: "/assets/resume/cap.svg",
  ititle: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",

  items: [
    {
      instituation: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      instituation: "Codeacademy",
      degree: "Front-end Track",
      duration: 2023,
    },
    {
      instituation: "Online Course Platform",
      degree: "The Ultimate React Course: React, Next.js, Redux & More",
      duration: 2023,
    },
    {
      instituation: "Online Course Platform",
      degree: "The Complete JavaScript Course: From Zero to Expert!",
      duration: 2020,
    },
    {
      instituation: "Build Responsive Real-World Websites with HTML and CSS",
      degree: "Front-end Track",
      duration: 2020,
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  ititle: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",

  items: [
    {
      company: "Sorena Mehr Alborz",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "2021 - 2023",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2020 - 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2019",
    },
    {
      company: "Softare Development Firm",
      position: "Junior Developer",
      duration: "2018 - 2019",
    },
  ],
};

const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
