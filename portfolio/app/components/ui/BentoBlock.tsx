import React, { ReactNode } from "react";

interface BlockProps {
  size: "large" | "largeV" | "small";
  children: ReactNode;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children }) => {
  const sizeClass = {
    large: "w-6/12 h-70",
    largeV: "w-70 h-96",
    small: "w-70 h-70",
  }[size];

  return (
    <div className={`border border-gray-300 p-4 ${sizeClass}`}>{children}</div>
  );
};

export default BentoBlock;
