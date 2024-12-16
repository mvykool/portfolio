import React, { useState } from "react";
import BentoBlock from "../ui/BentoBlock";
import Image from "next/image";
import { heroConstants } from "@/app/constants/hero-constants";

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
          <BentoBlock size="w-[30%] h-full">bento one</BentoBlock>
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
          <BentoBlock size="h-full w-[68%]">bento two</BentoBlock>
        </section>
        <section className="flex w-full h-2/6 gap-[2%] relative flex-w h-[33%] ">
          {" "}
          <BentoBlock size="w-[30%]">bento two</BentoBlock>
          <BentoBlock size="w-[33%]">bento two</BentoBlock>
          <BentoBlock size="w-[33%]">bento two</BentoBlock>
        </section>
      </div>
      <section className="flex flex-wrap h-full gap-2 w-3/12  ">
        {" "}
        <div className="h-[48%] flex gap-[2%] flex-wrap">
          <BentoBlock size="w-[48%] h-[48%]">bento two</BentoBlock>
          <BentoBlock size="w-[48%] h-[48%]">bento two</BentoBlock>
          <BentoBlock size="w-[48%] h-[48%]">bento two</BentoBlock>
          <BentoBlock size="w-[48%] h-[48%]">bento two</BentoBlock>
        </div>
        <BentoBlock size="w-full h-[50%]">bento two</BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
