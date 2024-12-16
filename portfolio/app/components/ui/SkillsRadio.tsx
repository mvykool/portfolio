import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function SkillRadio() {
  return (
    <div className="flex mt-8 gap-3 mx-auto justify-center">
      <SiHtml5 className="text-orange-600 h-7 w-7 md:h-8 md:w-8" />
      <SiCss3 className="text-blue-500 h-7 w-7 md:h-8 md:w-8" />
      <SiJavascript className="text-yellow h-7 w-7 md:h-8 md:w-8" />
      <SiReact className="text-cyan-400 h-7 w-7 md:h-8 md:w-8" />
      <SiTypescript className="text-blue-600 h-7 w-7 md:h-8 md:w-8" />
    </div>
  );
}
