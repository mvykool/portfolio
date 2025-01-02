import React from "react";
import { strings } from "@/app/constants/social-media-cards-constants";
import { TbBrandGitlab } from "react-icons/tb";
import Image from "next/image";

export const GitLabCard = (props: {}) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="w-64 p-3 rounded-xl bg-white border-2 border-gray-700 dark:bg-dark-app">
          <div className="user">
            <Image
              width={50}
              height={50}
              alt="profile"
              className="rounded-xl transition duration-500"
              src="/pic.png"
            />

            <div className="details">
              <div className="text-blue-500 text-xs font-extrabold">
                {strings.gitlab.name}
              </div>
              <div className="text-sm mt-2 text-black dark:text-white font-black">
                {strings.gitlab.username}
              </div>
            </div>
          </div>
          <div className="text-black dark:text-white mt-2 flex gap-2 items-center">
            {strings.gitlab.followers}
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
              <TbBrandGitlab className="text-5xl text-black dark:text-white p-3 mx-auto w-full flex items-center h-full" />
            </span>
          </div>
          <div className="text text-black dark:text-white ">
            {strings.gitlab.app}
          </div>
        </a>
      </div>
    </div>
  );
};
