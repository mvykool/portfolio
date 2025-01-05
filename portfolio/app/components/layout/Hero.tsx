import React from "react";
import BentoBlock from "../ui/BentoBlock";
import Image from "next/image";
import { heroConstants } from "@/app/constants/hero-constants";
import SkillRadio from "../ui/SkillsRadio";
import ExpOverview from "../ui/ExpOverview";
import MusicPlayer from "../ui/MusicPlayer";
import { LinkedInCard } from "../ui/LinkedInCard";
import { TwitterCard } from "../ui/TwitterCard";
import { GithubCard } from "../ui/GithubCard";
import { GitLabCard } from "../ui/GitlabCard";
import { ProjectCard } from "../ui/ProjectCard";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import { CodingTracker } from "../ui/CodingTracker";
import GotoPage from "../ui/GotoPage";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row w-full md:w-9/12 h-full  md:h-[85vh] justify-between gap-3  mx-auto bg-app">
      <div className="flex flex-col h-full w-full md:w-9/12 gap-3  ">
        <section className="flex flex-wrap relative  gap-[2%] h-[20vh] md:h-[33%] ">
          {" "}
          <BentoBlock size="w-[59%] md:w-[68%] h-[full]" duration={0.2}>
            <div className="justify-center p-5 md:p-0 flex flex-col ml-0 md:ml-10 text-4xl break-words text-black dark:text-white items-start h-full">
              <p className="text-base md:text-4xl">
                {" "}
                {heroConstants.hi}{" "}
                <span className="text-app-green">{heroConstants.there}</span>
              </p>
              <p className="text-lg md:text-4xl">
                {" "}
                {heroConstants.name}{" "}
                <span className="text-app-green">{heroConstants.lastName}</span>
              </p>
            </div>
          </BentoBlock>
          <BentoBlock size="w-[39%] md:w-[30%] h-full" duration={0.3}>
            <ThemeSwitch />
          </BentoBlock>
        </section>
        <section className="flex gap-[2%] h-[45vh] relative md:h-[33%] mx-auto flex-wrap w-full ">
          {" "}
          <BentoBlock
            size="flex h-[40%] md:h-full w-[49%] md:w-[30%]"
            duration={0.4}
          >
            <Image
              width={800}
              height={800}
              alt="profile"
              className=" object-cover w-full h-full transition duration-500"
              src="/profile.png"
            />
          </BentoBlock>
          <BentoBlock
            size="md:hidden flex h-[40%] md:h-full w-[49%] md:w-[30%]"
            duration={0.5}
          >
            <CodingTracker />
          </BentoBlock>
          <BentoBlock
            size="h-[59%] md:h-full w-full  w-full md:w-[68%]"
            duration={0.5}
          >
            <div className="flex items-center justify-between mr-8">
              {" "}
              <p className=" text-black dark:text-white font-black p-5 md:p-8 mt-5 text-xl">
                {" "}
                {heroConstants.about}
              </p>
              <GotoPage link={heroConstants.links.about} />
            </div>
            <p className="px-8 break-words text-xs md:text-sm text-gray-500 tracking-wider dark:text-gray-400 mt-2 md:mt-0">
              {heroConstants.aboutInfo}
            </p>
          </BentoBlock>
        </section>
        <section className="flex flex-wrap relative w-full gap-[2%]  md:flex-row-reverse flex-row h-[50vh] md:h-[33%] ">
          {" "}
          <BentoBlock
            size="w-[49%] h-[49%] md:h-full md:w-[33%]"
            duration={0.6}
          >
            <MusicPlayer />
          </BentoBlock>
          <BentoBlock
            size="w-[49%] h-[49%] md:h-full md:w-[33%]"
            duration={0.7}
          >
            <div className="flex items-center my-2 p-5 justify-between">
              <p className="text-black dark:text-white font-black text-xl ">
                {heroConstants.skills}
              </p>
              <GotoPage link={heroConstants.links.skills} />
            </div>

            <SkillRadio />
          </BentoBlock>
          <BentoBlock
            size="w-full h-[50%] md:h-full relative md:w-[30%]"
            duration={0.8}
          >
            <div className="flex absolute z-40 items-center my-2 p-5 w-full justify-between">
              <p className="text-black dark:text-white font-black text-xl ">
                {heroConstants.projects}
              </p>
              <GotoPage link={heroConstants.links.projects} />
            </div>
            <ProjectCard />
          </BentoBlock>
        </section>
      </div>
      <section className="flex flex-wrap relative h-full gap-2 w-full md:w-3/12  ">
        {" "}
        <BentoBlock size="w-full hidden md:flex h-[28%]" duration={0.9}>
          <CodingTracker />
        </BentoBlock>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.2, delay: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex gap-2 w-full flex-wrap relative z-40 justify-center md:justify-start mx-auto md:mx-0"
        >
          {" "}
          <GithubCard />
          <LinkedInCard />
          <GitLabCard />
          <TwitterCard />
        </motion.div>
        <BentoBlock size="w-full h-[60%]" duration={1.1}>
          {" "}
          <div className="flex justify-between my-3 p-5 items-center">
            <p className="text-black dark:text-white font-black text-xl tracking-widest">
              {heroConstants.experience}
            </p>
            <GotoPage link={heroConstants.links.experience} />
          </div>
          <ExpOverview />
        </BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
