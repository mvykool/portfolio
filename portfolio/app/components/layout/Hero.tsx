import React, { useState } from "react";
import BentoBlock from "../ui/BentoBlock";
import Image from "next/image";
import { heroConstants } from "@/app/constants/hero-constants";
import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";
import SkillRadio from "../ui/SkillsRadio";
import ExpOverview from "../ui/ExpOverview";
import Card from "../ui/Card";
import MusicPlayer from "../ui/MusicPlayer";

const Hero = () => {
  const [items, setItems] = useState();
  return (
    <main className="flex  w-9/12 h-[88vh] justify-between gap-3  mx-auto mt-20 bg-black">
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
            <Card />
          </BentoBlock>
        </section>
        <section className="flex  relative gap-[2%] h-[33%] mx-auto flex-wrap w-full  flex-w ">
          {" "}
          <BentoBlock size="h-full w-[30%]">
            <Image
              width={800}
              height={800}
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500"
              src="/profile.png"
            />
          </BentoBlock>
          <BentoBlock size="h-full w-[68%]">
            <p className="text-menu-green p-8 mt-5">{heroConstants.about}</p>
            <p className="px-8 break-words text-lg mt-2">
              {heroConstants.aboutInfo}
            </p>
          </BentoBlock>
        </section>
        <section className="flex w-full gap-[2%] relative flex-w h-[33%] ">
          {" "}
          <BentoBlock size="w-[30%]">
            <p className="text-menu-green p-8 mt-5">{heroConstants.projects}</p>
          </BentoBlock>
          <BentoBlock size="w-[33%]">
            <p className="text-menu-green p-8 mt-5">{heroConstants.skills}</p>
            <SkillRadio />
          </BentoBlock>
          <MusicPlayer />
        </section>
      </div>
      <section className="flex flex-wrap h-full gap-2 w-3/12  ">
        {" "}
        <div className="h-[48%] flex gap-[2%] flex-wrap">
          <BentoBlock size="w-[48%] h-[48%] p-12">
            {" "}
            <TbBrandGithub className="text-5xl w-full mx-auto flex items-center h-full" />
          </BentoBlock>
          <BentoBlock size="w-[48%] h-[48%] p-12">
            <TbBrandLinkedin className="text-5xl w-full mx-auto flex items-center h-full" />
          </BentoBlock>
          <BentoBlock size="w-[48%] h-[48%] p-12">
            <TbBrandTwitter className="text-5xl mx-auto w-full flex items-center h-full" />
          </BentoBlock>
          <BentoBlock size="w-[48%] h-[48%] p-12">
            {" "}
            <TbBrandGmail className="text-2xl mx-auto flex w-full items-center h-full" />
          </BentoBlock>
        </div>
        <BentoBlock size="w-full h-[50%]">
          {" "}
          <p className="text-menu-green p-8 mt-5">
            {heroConstants.experience}
            <ExpOverview />
          </p>
        </BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
