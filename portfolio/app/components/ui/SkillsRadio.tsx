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
  SiVite,
  SiGit,
  SiFirebase,
  SiAstro,
  SiMysql,
  SiExpress,
  SiAngular,
  SiSass,
  SiStorybook,
  SiNestjs,
  SiLinux,
  SiGnubash,
} from "react-icons/si";

export default function SkillCarousel() {
  const frontendIcons = [
    { Icon: SiHtml5, color: "text-orange-600" },
    { Icon: SiCss3, color: "text-blue-500" },
    { Icon: SiJavascript, color: "text-yellow" },
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiTypescript, color: "text-blue-600" },
    { Icon: SiAngular, color: "text-rose-700" },
    { Icon: SiRedux, color: "text-purple-500" },
    { Icon: SiSass, color: "text-pink-500" },
    { Icon: SiAstro, color: "text-orange-500" },
    { Icon: SiVite, color: "text-purple-300" },
    { Icon: SiTailwindcss, color: "text-cyan-300" },
    { Icon: SiNextdotjs, color: "text-gray-400 dark:text-gray-200" },
    { Icon: SiStorybook, color: "text-pink-500" },
  ];

  const backendIcons = [
    { Icon: SiLinux, color: "text-black dark:text-white" },
    { Icon: SiNodedotjs, color: "text-green-500" },
    { Icon: SiExpress, color: "text-black dark:text-white" },
    { Icon: SiNestjs, color: "text-red" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: SiFirebase, color: "text-yellow" },
    { Icon: SiMysql, color: "text-blue-600 dark:text-blue-200" },
    { Icon: SiDocker, color: "text-blue-500" },
    { Icon: SiGnubash, color: "text-black dark:text-white" },
    { Icon: SiGit, color: "text-orange-600" },
  ];

  return (
    <div className="w-full overflow-hidden space-y-8 mt-4">
      <div className="relative">
        {/* First row - moving left */}
        <div className="flex">
          <div className="animate-scroll-left flex">
            {frontendIcons.map(({ Icon, color }, index) => (
              <div
                key={`front-1-${index}`}
                className="flex-shrink-0 mx-3"
                style={{ width: "32px" }}
              >
                <Icon
                  className={`${color} h-7 w-7 md:h-6 md:w-6 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
          <div className="animate-scroll-left flex" aria-hidden="true">
            {frontendIcons.map(({ Icon, color }, index) => (
              <div
                key={`front-2-${index}`}
                className="flex-shrink-0 mx-3"
                style={{ width: "32px" }}
              >
                <Icon
                  className={`${color} h-7 w-7 md:h-6 md:w-6 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Second row - moving right */}
        <div className="flex">
          <div className="animate-scroll-right flex">
            {backendIcons.map(({ Icon, color }, index) => (
              <div
                key={`back-1-${index}`}
                className="flex-shrink-0 mx-3"
                style={{ width: "32px" }}
              >
                <Icon
                  className={`${color} h-7 w-7 md:h-6 md:w-6 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
          <div className="animate-scroll-right flex" aria-hidden="true">
            {backendIcons.map(({ Icon, color }, index) => (
              <div
                key={`back-2-${index}`}
                className="flex-shrink-0 mx-3"
                style={{ width: "32px" }}
              >
                <Icon
                  className={`${color} h-7 w-7 md:h-6 md:w-6 transition-transform hover:scale-110`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
