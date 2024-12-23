import React from "react";
import { SiNeovim } from "react-icons/si";

export const CodingTracker = (props: {}) => {
  return (
    <>
      {" "}
      <div className="flex mt-10 items-center">
        <SiNeovim className="text-green-500 text-4xl ml-10" />
        <div>
          <div className="flex flex-col ml-3">
            {" "}
            <span className="text-green-500">Coding Session:</span>{" "}
            <span className="text-green-500">5h : 28m</span>
          </div>
        </div>
      </div>
      <div className="w-full px-8 mt-2 flex gap-2 flex-wrap">
        <span className="test-white rounded-xl bg-blue-400 p-1 px-2 text-sm">
          React TS - 5H
        </span>
        <span className="test-white rounded-xl bg-violet-700 p-1 px-2 text-sm">
          CSS - 23m
        </span>
        <span className="test-white rounded-xl bg-yellow p-1 px-2 text-sm">
          JavaScript - 5m
        </span>
      </div>
    </>
  );
};
