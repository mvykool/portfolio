import { strings } from "@/app/constants/social-media-cards-constants";
import React from "react";
import { TbBrandX } from "react-icons/tb";
import Image from "next/image";

export const TwitterCard = (props: {}) => {
  return (
    <div className="tooltip-container">
      <a
        href={`${strings.x.link}`}
        target="_blank"
        rel="noreferrer"
        className="tooltip"
      >
        <div className="w-64 p-3 rounded-xl bg-white dark:bg-dark-app border-2 border-gray-700">
          <div className="user">
            <Image
              width={50}
              height={50}
              alt="profile"
              className="rounded-xl transition duration-500"
              src="/yusuke.jpeg"
            />

            <div className="details">
              <div className="text-blue-500 text-xs font-extrabold">
                {strings.x.name}
              </div>
              <div className="text-sm mt-2 text-black dark:text-white font-black">
                {strings.x.username}
              </div>
            </div>
          </div>
          <div className="text-black dark:text-white  mt-2">
            {strings.x.followers}
          </div>
        </div>
      </a>
      <div className="text">
        <div className="icon">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="bg-white dark:bg-dark-card">
              <TbBrandX className="text-5xl text-black dark:text-white p-3 mx-auto w-full flex items-center h-full" />
            </span>
          </div>
          <div className="text text-black dark:text-white">{strings.x.app}</div>
        </div>
      </div>
    </div>
  );
};
