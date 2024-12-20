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
    { Icon: SiNextdotjs, color: "text-gray-300" },
    { Icon: SiStorybook, color: "text-pink-500" },
  ];

  const backendIcons = [
    { Icon: SiLinux, color: "text-white" },
    { Icon: SiNodedotjs, color: "text-green-500" },
    { Icon: SiExpress, color: "text-white" },
    { Icon: SiNestjs, color: "text-red" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: SiFirebase, color: "text-yellow" },
    { Icon: SiMysql, color: "text-blue-200" },
    { Icon: SiDocker, color: "text-blue-500" },
    { Icon: SiGnubash, color: "text-white" },
    { Icon: SiGit, color: "text-orange-600" },
  ];

  // Duplicate icons for seamless loop
  const allFrontendIcons = [
    ...frontendIcons,
    ...frontendIcons,
    ...frontendIcons,
  ];
  const allBackendIcons = [...backendIcons, ...backendIcons, ...backendIcons];

  return (
    <div className="w-full overflow-hidden space-y-8 mt-4">
      {/* First row - moving left */}
      <div
        className="flex animate-scroll-left"
        style={{
          width: `${allFrontendIcons.length * 50}px`,
          animation: "scrollLeft 40s linear infinite",
        }}
      >
        {allFrontendIcons.map(({ Icon, color }, index) => (
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

      {/* Second row - moving right */}
      <div
        className="flex animate-scroll-right"
        style={{
          width: `${allBackendIcons.length * 50}px`,
          animation: "scrollRight 40s linear infinite",
        }}
      >
        {allBackendIcons.map(({ Icon, color }, index) => (
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

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
