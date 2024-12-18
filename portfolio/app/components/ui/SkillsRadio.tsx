import React, { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiGit,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiAstro,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiAngular,
  SiSass,
  SiStorybook,
  SiNestjs,
  SiFigma,
  SiLinux,
  SiPostman,
  SiGnubash,
} from "react-icons/si";

export default function SkillCarousel() {
  const [position, setPosition] = useState(0);

  const icons = [
    { Icon: SiHtml5, color: "text-orange-600" },
    { Icon: SiCss3, color: "text-blue-500" },
    { Icon: SiJavascript, color: "text-yellow" },
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiTypescript, color: "text-blue-600" },
    { Icon: SiTailwindcss, color: "text-cyan-400" },
    { Icon: SiRedux, color: "text-purple-300" },
    { Icon: SiSass, color: "text-rose-500" },
    { Icon: SiNextdotjs, color: "text-gray-200" },
    { Icon: SiVite, color: "text-violet-200" },
    { Icon: SiAstro, color: "text-orange-600" },
  ];

  // Create three sets of icons to ensure smooth infinite scrolling
  const allIcons = [...icons, ...icons, ...icons];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const setWidth = icons.length * 50;

        if (prev <= -(setWidth * 2)) {
          return prev + setWidth;
        }
        return prev - 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="w-full overflow-hidden mt-8">
      <div
        className="flex" // removed transition-transform for seamless loop
        style={{
          transform: `translateX(${position}px)`,
          width: `${allIcons.length * 50}px`,
        }}
      >
        {allIcons.map(({ Icon, color }, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3"
            style={{ width: "32px" }}
          >
            <Icon
              className={`${color} h-7 w-7 md:h-8 md:w-8 transition-transform hover:scale-110`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
