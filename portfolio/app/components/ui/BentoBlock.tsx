import React, { ReactNode } from "react";
import { Reorder, useMotionValue } from "framer-motion";

interface BlockProps {
  size: "large" | "main" | "largeV" | "small" | "xs";
  children: ReactNode;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children }) => {
  const sizeClass = {
    large: "w-140 h-70",
    largeV: "w-70 h-140",
    small: "w-70 h-70",
    xs: "w-70 h-56",
    main: "w-full h-full",
  }[size];

  return (
    <div className={`border border-gray-300 p-4 ${sizeClass}`}>{children}</div>
  );
};

export default BentoBlock;
