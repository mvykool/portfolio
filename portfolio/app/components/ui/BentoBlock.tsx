import React, { ReactNode } from "react";
import { useMotionValue, Reorder } from "framer-motion";

interface BlockProps {
  size: "large" | "largeV" | "small";
  item: string;
}
const BentoBlock: React.FC<BlockProps> = ({ size, item }) => {
  const sizeClass = {
    large: "w-6/12 h-70",
    largeV: "w-70 h-96",
    small: "w-70 h-70",
  }[size];
  const x = useMotionValue(0);

  return (
    <Reorder.Item
      value={item}
      className={`border border-gray-300 p-4 ${sizeClass}`}
      style={{ x }}
    >
      {item}
    </Reorder.Item>
  );
};

export default BentoBlock;
