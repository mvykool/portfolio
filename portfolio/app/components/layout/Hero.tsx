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
import { BlueskyCard } from "../ui/BlueskyCard";
import { ProjectCard } from "../ui/ProjectCard";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import { CodingTracker } from "../ui/CodingTracker";
import GotoPage from "../ui/GotoPage";

const Hero = () => {
  return (
    <main className="flex  w-9/12 h-[88vh] justify-between gap-3  mx-auto mt-20 bg-app">
      <div className="flex flex-col h-full w-9/12 gap-3  ">
        <section className="flex flex-wrap relative  gap-[2%] h-[33%] ">
          {" "}
          <BentoBlock size="w-[68%] h-[full]">
            <div className="justify-center flex flex-col ml-10 text-4xl break-words items-start h-full">
              <p> {heroConstants.hi}</p>
              <p> {heroConstants.name}</p>
            </div>
          </BentoBlock>
          <BentoBlock size="w-[30%] h-full">
            <ThemeSwitch />
          </BentoBlock>
        </section>
        <section className="flex  relative gap-[2%] h-[33%] mx-auto flex-wrap w-full  flex-w ">
          {" "}
          <BentoBlock size="h-full w-[30%]">
            <Image
              width={800}
              height={800}
              alt="profile"
              className="hover:filter object-cover w-full h-full hover:saturate-150 transition duration-500"
              src="/profile.png"
            />
          </BentoBlock>
          <BentoBlock size="h-full w-[68%]">
            <div className="flex items-center justify-between mr-8">
              {" "}
              <p className="text-white font-semibold p-8 mt-5 text-lg">
                {heroConstants.about}
              </p>
              <GotoPage />
            </div>
            <p className="px-8 break-words text-md text-gray-400 mt-2">
              {heroConstants.aboutInfo}
            </p>
          </BentoBlock>
        </section>
        <section className="flex w-full gap-[2%] relative flex-w h-[33%] ">
          {" "}
          <BentoBlock size="w-[30%]">
            <p className="text-white font-semibold text-lg p-8 mt-5">
              {heroConstants.projects}
            </p>
            <ProjectCard />
          </BentoBlock>
          <BentoBlock size="w-[33%]">
            <p className="text-white font-semibold text-lg p-8 mt-5">
              {heroConstants.skills}
            </p>
            <SkillRadio />
          </BentoBlock>
          <BentoBlock size="w-[33%]">
            <MusicPlayer />
          </BentoBlock>
        </section>
      </div>
      <section className="flex flex-wrap h-full gap-2 w-3/12  ">
        {" "}
        <BentoBlock size="w-full h-[28%]">
          <CodingTracker />
        </BentoBlock>
        <GithubCard />
        <LinkedInCard />
        <BlueskyCard />
        <TwitterCard />
        <BentoBlock size="w-full h-[60%]">
          {" "}
          <p className="text-white font-semibold text-lg p-8 mt-5">
            {heroConstants.experience}
          </p>
          <ExpOverview />
        </BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
