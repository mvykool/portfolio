import React from "react";
import Image from "next/image";

export const ProjectCard = (props: {}) => {
  return (
    <div>
      <Image
        width={500}
        height={500}
        alt="project"
        className="rounded-lg animate-shake mt-3 ml-20 object-contain"
        src="/project.png"
      />
    </div>
  );
};
