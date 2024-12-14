import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import BentoBlock from "../ui/BentoBlock";
// import Office from "../../public/office2.json";

const Hero = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="flex border border-red w-9/12 gap-5 mx-auto mt-32">
      <BentoBlock size="large">bento one</BentoBlock>
      <BentoBlock size="small">bento two</BentoBlock>
      <BentoBlock size="largeV">bento three</BentoBlock>
    </section>
  );
};

export default Hero;
