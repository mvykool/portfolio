import React from "react";
import { strings } from "@/app/constants/social-media-cards-constants";
import { TbBrandBluesky } from "react-icons/tb";
import Image from "next/image";

export const BlueskyCard = (props: {}) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="w-64 p-3 rounded-xl bg-gray-800">
          <div className="user">
            <Image
              width={50}
              height={50}
              alt="profile"
              className="rounded-xl transition duration-500"
              src="/bsy.jpg"
            />

            <div className="details">
              <div className="text-blue-500 text-xs font-extrabold">
                {strings.bluesky.name}
              </div>
              <div className="text-sm mt-2">{strings.bluesky.username}</div>
            </div>
          </div>
          <div className="about">{strings.bluesky.followers}</div>
        </div>
      </div>
      <div className="text">
        <a className="icon" href="https://freecodez.com/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="bg-dark-card">
              <TbBrandBluesky className="text-5xl p-3 mx-auto w-full flex items-center h-full" />
            </span>
          </div>
          <div className="text">LinkedIn</div>
        </a>
      </div>
    </div>
  );
};
