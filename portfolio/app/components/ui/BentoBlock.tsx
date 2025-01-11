import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BlockProps {
  size: string;
  children: ReactNode;
  duration: number;
}
const BentoBlock: React.FC<BlockProps> = ({ size, children, duration }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
      transition={{ duration: 0.2, delay: duration }}
      variants={{
        hidden: { opacity: 0, x: -5 },
        visible: { opacity: 1, x: 0 },
      }}
      className={`bg-white dark:bg-dark-card border-[0.5px] border-gray-700  transition-all ease-out duration-300 overflow-hidden rounded-xl ${size}`}
    >
      {children}
    </motion.div>
  );
};

export default BentoBlock;
