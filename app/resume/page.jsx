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

import {
  SiTailwindcss,
  SiNextdotjs,
  SiShadcnui,
  SiRedux,
  SiRadixui,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { ScrollArea } from "@/components/ui/scroll-area";

import Gsap from "@/components/icons/Gsap";

// Resume Data
const education = {
  icon: "./assets/resume/cap.svg",
  title: "My Education",
  description:
    "Diverse online and university education in full-stack development, JavaScript, React, and computer science from top platforms and institutions.",

  items: [
    {
      instituation: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      instituation:
        "Online Course Platform - The Ultimate React Course: React, Next.js, Redux & More",
      degree: "React.js, Next.js, Redux",
      duration: 2023,
    },
    {
      instituation: "Harvard University - CS50: Computer Science",
      degree:
        "Computer science and programming, Fimiliraty with C, Python, SQL",
      duration: 2023,
    },
    {
      instituation: "Coursera - Online Platfrom Academy",
      degree: "HTML, CSS, and Javascript for Web Developers (Certificated)",
      duration: 2020,
    },
    {
      instituation: "Online Course Platform",
      degree: "The Complete JavaScript Course: From Zero to Expert!",
      duration: 2020,
    },
    {
      instituation:
        "Online Course Platform - Build Responsive Real-World Websites with HTML and CSS",
      degree: "Responsive Real-World Websites with HTML and CSS",
      duration: 2020,
    },
  ],
};

// Experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Hands-on experience across startups and agencies as full-stack, front-end, and UI/UX developer, delivering impactful digital solutions.",

  items: [
    {
      company: "Sorena Mehr Alborz",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
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
      company: "Art Of Seo",
      position: "Intern Developer",
      duration: "2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I specialize in building modern, responsive, and high-performance web applications using a robust stack of front-end and back-end technologies. From semantic HTML5 and advanced CSS3 to JavaScript frameworks like React, Next.js, and Redux Toolkit, I bring designs to life with clean code and seamless UI/UX. My expertise extends to Tailwind CSS, Shadcn/UI, Radix UI, and animation libraries like Framer Motion and GSAP, allowing me to craft smooth, interactive experiences. I also utilize design tools like Figma to ensure consistency from concept to implementation",
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
      icon: <SiRedux />,
      name: "Redux toolkit",
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
      icon: <SiRadixui />,
      name: "RadixUi",
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
    {
      icon: <TbBrandFramerMotion />,
      name: "motion",
    },
    {
      icon: <Gsap />,
      name: "gsap",
    },
  ],
};

// About data
const about = {
  title: "About Me",
  description:
    "Passionate full-stack developer crafting modern, scalable web experiences with clean code, creative design, and a focus on user impact.",
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
            {/* Experience */}
            <TabsContent value="experience" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold capitalize">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] mx-auto text-white/60">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] p-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accentDefault">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accentDefault"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold capitalize">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] p-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accentDefault">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accentDefault"></span>
                            <p className="text-white/60">{item.instituation}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className={"w-full h-full"}>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li className="" key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="cursor-pointer text-6xl hover:text-accentDefault transition-all duration-300">
                                {skill.isImage ? (
                                  <img src={skill.icon} alt={skill.name} />
                                ) : (
                                  <span>{skill.icon}</span>
                                )}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className={"w-full text-center xl:text-left"}
            >
              <div className="flex flex-col  gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-16 max-w-[720x] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl font-semibold">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
