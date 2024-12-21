import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const GotoPage = () => {
  return (
    <button className="Btn bg-transparent border-[1px] border-gray-200">
      <div className="sign">
        <TbArrowUpRight className="text-gray-200 text-xs" />
      </div>
      <div className="texts">About me</div>
    </button>
  );
};

export default GotoPage;
