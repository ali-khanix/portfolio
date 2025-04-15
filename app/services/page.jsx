"use client";

import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">Services Page</div>
    </section>
  );
};

export default Services;
