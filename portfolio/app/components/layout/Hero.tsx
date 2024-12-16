import React, { useState } from "react";
import BentoBlock from "../ui/BentoBlock";
import { Reorder } from "framer-motion";
// import Office from "../../public/office2.json";

const Hero = () => {
  const [items, setItems] = useState();
  return (
    <main className="flex border border-pink-300 w-9/12 h-[88vh] justify-between  mx-auto mt-20 bg-black">
      <div className="flex flex-col h-full w-9/12">
        <div className="flex h-5/6">
          <section className="flex flex-wrap relative overflow-hidden gap-2 w-4/12 border-8 border-red ">
            {" "}
            <BentoBlock size="small">bento one</BentoBlock>
            <BentoBlock size="xs">bento one</BentoBlock>
          </section>
          <section className="flex overflow-hidden justify-center relative gap-2 mx-auto p-1 flex-wrap w-8/12  flex-w border-8 border-green-400">
            {" "}
            <BentoBlock size="xs">bento two</BentoBlock>
            <BentoBlock size="xs">bento two</BentoBlock>
            <BentoBlock size="main">bento two</BentoBlock>
          </section>
        </div>
        <section className="flex w-full h-2/6 gap-2 p-1 relative overflow-hidden flex-w border-8 border-blue-400">
          {" "}
          <BentoBlock size="large">bento two</BentoBlock>
          <BentoBlock size="xs">bento two</BentoBlock>
        </section>
      </div>
      <section className="flex flex-col h-full gap-2 w-3/12 border-8 border-yellow ">
        {" "}
        <BentoBlock size="largeV">bento two</BentoBlock>
        <BentoBlock size="largeV">bento two</BentoBlock>
      </section>
    </main>
  );
};

export default Hero;
