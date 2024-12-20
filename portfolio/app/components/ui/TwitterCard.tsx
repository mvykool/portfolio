import React from "react";
import { TbBrandX } from "react-icons/tb";

export const TwitterCard = (props: {}) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img">Ui</div>
            <div className="details">
              <div className="name">User</div>
              <div className="username">@username</div>
            </div>
          </div>
          <div className="about">500+ Connections</div>
        </div>
      </div>
      <div className="text">
        <a className="icon" href="https://freecodez.com/">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin">
              <TbBrandX className="text-5xl p-3 mx-auto w-full flex items-center h-full" />
            </span>
          </div>
          <div className="text">LinkedIn</div>
        </a>
      </div>
    </div>
  );
};
