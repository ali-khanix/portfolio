"use client";

import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Developing high-performance, responsive websites with clean code and modern tech to bring digital ideas to life effectively.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating user-centric designs that enhance usability, drive engagement, and elevate digital experiences across platforms.",
    href: "",
  },

  {
    num: "03",
    title: "SEO",
    description:
      "Boosting online visibility with strategic SEO that drives traffic, improves rankings, and delivers measurable results for your business.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accentDefault transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <ArrowDownRight className="text-primary" size={32} />
                  </Link>
                </div>

                {/* Title */}
                <h2 className="cursor-pointer text-[42px] font-bold leading-none text-white group-hover:text-accentDefault transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
