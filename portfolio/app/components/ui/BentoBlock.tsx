import React, { ReactNode } from "react";
import { Reorder, useMotionValue } from "framer-motion";

interface BlockProps {
  size: string;
  children: ReactNode;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children }) => {
  return (
    <div
      className={`border border-gray-300 hover:scale-105 hover:cursor-pointer transition-all ease-out duration-300 overflow-hidden rounded-xl ${size}`}
    >
      {children}
    </div>
  );
};

export default BentoBlock;
