import React from "react";
import Image from "next/image";

export const ProjectCard = (props: {}) => {
  return (
    <div>
      <Image
        width={500}
        height={500}
        alt="project"
        className="rounded-lg animate-shake ml-20 object-contain"
        src="/project.png"
      />
    </div>
  );
};
