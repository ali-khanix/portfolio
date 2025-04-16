"use client";

import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa6";

import { SiTailwindcss, SiNextdotjs, SiShadcnui } from "react-icons/si";

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

// Education
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

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiShadcnui />,
      name: "shadcn/ui",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py12 xl: py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className={"flex flex-col xl:flex-row gap-[60px]"}
        >
          <TabsList
            className={
              "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 "
            }
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className={"w-full"}>
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
