import React from "react";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

interface LinkProps {
  link: string;
}

const GotoPage = ({ link }: LinkProps) => {
  return (
    <Link
      href={`/${link}`}
      className="Btn hover:scale-125 bg-transparent border-[1px] border-gray-700 dark:border-gray-200"
    >
      <div className="sign">
        <TbArrowUpRight className="text-gray-700 dark:text-gray-200 text-xs" />
      </div>
    </Link>
  );
};

export default GotoPage;
