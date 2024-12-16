import React, { ReactNode } from "react";
import { Reorder, useMotionValue } from "framer-motion";

interface BlockProps {
  size: string;
  children: ReactNode;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children }) => {
  return <div className={`border border-gray-300 p-4 ${size}`}>{children}</div>;
};

export default BentoBlock;
