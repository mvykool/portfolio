import React from "react";
import { strings } from "@/app/constants/social-media-cards-constants";
import { TbBrandLinkedin } from "react-icons/tb";
import Image from "next/image";

export const LinkedInCard = (props: {}) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="w-64 p-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-700">
          <div className="user">
            <Image
              width={50}
              height={50}
              alt="profile"
              className="rounded-xl transition duration-500"
              src="/profile.png"
            />

            <div className="details">
              <div className="text-blue-500 text-xs font-extrabold">
                {strings.linkedin.name}
              </div>
              <div className="text-sm mt-2 text-black dark:text-white font-black">
                {strings.linkedin.username}
              </div>
            </div>
          </div>
          <div className="text-black dark:text-gray-300 mt-2">
            {strings.linkedin.connections}
          </div>
        </div>
      </div>
      <div className="text">
        <a className="icon" href="https://freecodez.com/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="bg-white dark:bg-dark-card">
              <TbBrandLinkedin className="text-5xl text-black dark:text-white p-3 mx-auto w-full flex items-center h-full" />
            </span>
          </div>
          <div className="text text-black dark:text-white">
            {strings.linkedin.app}
          </div>
        </a>
      </div>
    </div>
  );
};
