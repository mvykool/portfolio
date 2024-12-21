import React from "react";
import { TbTerminal2 } from "react-icons/tb";

export const Logo = (props: {}) => {
  return (
    <div className="w-16 h-10 rounded-lg m-2 bg-black p-4 flex justify-center items-center">
      <span className="flex justify-center items-center">
        MH <TbTerminal2 />
      </span>
    </div>
  );
};
