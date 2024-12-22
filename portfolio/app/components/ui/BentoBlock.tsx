import React, { ReactNode } from "react";
import { Reorder, useMotionValue } from "framer-motion";

interface BlockProps {
  size: string;
  children: ReactNode;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children }) => {
  return (
    <div
      className={`bg-white dark:bg-dark-card border-[0.5px] border-gray-700 hover:cursor-pointer transition-all ease-out duration-300 overflow-hidden rounded-xl ${size}`}
    >
      {children}
    </div>
  );
};

export default BentoBlock;
