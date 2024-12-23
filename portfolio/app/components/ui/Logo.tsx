import React from "react";
import { TbTerminal2 } from "react-icons/tb";

export const Logo = (props: {}) => {
  return (
    <div className="w-16 h-10 rounded-lg m-2 bg-transparent dark:border-[0.5px] border-2 border-gray-700 text-black dark:text-white p-4 flex justify-center items-center">
      <span className="flex justify-center items-center">
        MH <TbTerminal2 />
      </span>
    </div>
  );
};
