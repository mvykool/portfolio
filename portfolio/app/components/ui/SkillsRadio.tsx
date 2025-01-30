import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiAstro,
  SiMysql,
  SiExpress,
  SiAngular,
  SiSass,
  SiStorybook,
  SiNestjs,
  SiLinux,
  SiGnubash,
  SiArchlinux,
} from "react-icons/si";

export default function SkillCarousel() {
  const Icons = [
    { Icon: SiHtml5, color: "text-orange-600" },
    { Icon: SiCss3, color: "text-blue-500" },
    { Icon: SiJavascript, color: "text-yellow" },
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiTypescript, color: "text-blue-600" },
    { Icon: SiAngular, color: "text-rose-700" },
    { Icon: SiRedux, color: "text-purple-500" },
    { Icon: SiSass, color: "text-pink-500" },
    { Icon: SiAstro, color: "text-orange-500" },
    { Icon: SiTailwindcss, color: "text-cyan-300" },
    { Icon: SiNextdotjs, color: "text-gray-400 dark:text-gray-200" },
    { Icon: SiStorybook, color: "text-pink-500" },

    { Icon: SiArchlinux, color: "text-blue-400" },
    { Icon: SiLinux, color: "text-black dark:text-white" },
    { Icon: SiNodedotjs, color: "text-green-500" },
    { Icon: SiExpress, color: "text-black dark:text-white" },
    { Icon: SiNestjs, color: "text-red" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: SiMysql, color: "text-blue-600 dark:text-blue-200" },
    { Icon: SiDocker, color: "text-blue-500" },
    { Icon: SiGnubash, color: "text-black dark:text-white" },
  ];

  return (
    <div className="w-full overflow-hidden space-y-3 mt-2">
      <div className="relative">
        {/* First row - moving left */}
        <div className="flex">
          <div className=" hidden md:flex justify-center gap-1 flex-wrap">
            {Icons.map(({ Icon, color }, index) => (
              <div
                key={`front-1-${index}`}
                className="flex-shrink-0 mx-2 justify-center mt-2"
              >
                <Icon
                  className={`${color} size-4 md:size-5 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
          <div className=" flex md:hidden justify-center gap-1 flex-wrap">
            {Icons.slice(0, 12).map(({ Icon, color }, index) => (
              <div
                key={`front-1-${index}`}
                className="flex-shrink-0 w-8 mx-2 md:mx-3 my-1"
              >
                <Icon
                  className={`${color} h-4 w-4 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
