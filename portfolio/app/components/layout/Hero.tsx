import React, { useState } from "react";
import BentoBlock from "../ui/BentoBlock";
import { Reorder } from "framer-motion";
// import Office from "../../public/office2.json";

const Hero = () => {
  const [items, setItems] = useState();
  return (
    <main className="flex  w-9/12 h-[88vh] justify-between gap-3  mx-auto mt-20 bg-black">
      <div className="flex flex-col h-full w-9/12 gap-3">
        <div className="flex h-5/6 gap-3">
          <section className="flex flex-wrap relative overflow-hidden gap-[2%] w-4/12 ">
            {" "}
            <BentoBlock size="w-full h-[59%]">bento one</BentoBlock>
            <BentoBlock size="w-full h-[39%]">bento one</BentoBlock>
          </section>
          <section className="flex justify-between overflow-hidden relative gap-[2%] mx-auto flex-wrap w-8/12  flex-w ">
            {" "}
            <BentoBlock size="h-[40%] w-[49%]">bento two</BentoBlock>
            <BentoBlock size="h-[40%] w-[49%]">bento two</BentoBlock>
            <BentoBlock size="w-full h-[58%]">bento two</BentoBlock>
          </section>
        </div>
        <section className="flex w-full h-2/6 gap-[1%] relative overflow-hidden flex-w ">
          {" "}
          <BentoBlock size="h-full w-[69%]">bento two</BentoBlock>
          <BentoBlock size="w-[30%]">bento two</BentoBlock>
        </section>
      </div>
      <section className="flex flex-col h-full gap-2 w-3/12  ">
        {" "}
        <BentoBlock size="w-full h-3/6">bento two</BentoBlock>
        <BentoBlock size="w-full h-3/6">bento two</BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
