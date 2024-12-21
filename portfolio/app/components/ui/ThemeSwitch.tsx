import React from "react";

export const ThemeSwitch = (props: {}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <label
        htmlFor="switch"
        className="switch rounded-3xl ring ring-gray-400 ring-offset-black ring-offset-4 ring-opacity-70"
      >
        <input id="switch" type="checkbox" />
        <span className="slider"></span>
        <span className="decoration"></span>
      </label>
    </div>
  );
};
