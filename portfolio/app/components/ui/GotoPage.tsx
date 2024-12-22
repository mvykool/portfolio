import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const GotoPage = () => {
  return (
    <button className="Btn bg-transparent border-[1px] border-gray-700 dark:border-gray-200">
      <div className="sign">
        <TbArrowUpRight className="text-gray-700 dark:text-gray-200 text-xs" />
      </div>
      <div className="texts text-black dark:text-white">About me</div>
    </button>
  );
};

export default GotoPage;
