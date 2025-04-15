"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      {/* Hero */}
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Hero Content*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello, I'm <br />{" "}
              <span className="text-accentDefault">Ali Khani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficiant in various programming languages and technologies
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size={"lg"}
                className={"uppercase flex items-center gap-2 cursor-pointer"}
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accentDefault rounded-full flex justify-center items-center text-accentDefault text base hover:bg-accentDefault hover:bg-accentDefault hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Hero Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
}
