import React from "react";
import Image from "next/image";

export const ProjectCard = (props: {}) => {
  return (
    <div className="relative h-full">
      <div className="e-card playing">
        <div className="image"></div>

        <div className="wave dark:hidden"></div>
        <div className="wave dark:hidden"></div>
        <div className="wave dark:hidden"></div>
        <div className="wave dark:hidden"></div>

        <div className="infotop"></div>
        <Image
          width={500}
          height={500}
          alt="project"
          className="rounded-lg z-10 absolute -rotate-12 mt-28 ml-20 object-contain"
          src="/project.png"
        />
      </div>
    </div>
  );
};
