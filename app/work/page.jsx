"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "React Js",
      },
      {
        name: "React Router",
      },
      {
        name: "Swiper",
      },
    ],
    image: `/assets/work/thumb1.png`,
    github: "https://github.com/ali-khanix/sorena_react",
    live: "https://sorenairan.com/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Node.js",
      },
    ],
    image: `/assets/work/thumb2.png`,
    github: "",
    live: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwindcss",
      },
    ],
    image: `/assets/work/thumb3.png`,
    github: "",
    live: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[70vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-8 h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none  text-white group-hover:text-accentDefault transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4 flex-wrap ">
                {project.stack.map((stack, index) => {
                  return (
                    <li className="text-xl text-accentDefault" key={index}>
                      {stack.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex flex-row gap-3 mt-2 group-hover:text-accentDefault">
                {/* Live project button */}
                <Link className="hover:text-accentDefault " href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center cursor-pointer">
                        <ArrowUpRight size={40} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github project button */}
                <Link
                  className="hover:text-accentDefault"
                  href={project.github}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                        <Github size={36} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl-h-[520px] mb-12"
            >
              {projects.map((slide, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className=""></div>

                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={""}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
