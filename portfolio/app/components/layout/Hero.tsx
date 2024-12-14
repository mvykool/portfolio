import React, { useState } from "react";
import BentoBlock from "../ui/BentoBlock";
import { Reorder } from "framer-motion";
// import Office from "../../public/office2.json";

const Hero = () => {
  const [items, setItems] = useState(["1", "2", "3"]);

  return (
    <Reorder.Group
      axis="x"
      values={items}
      onReorder={setItems}
      className="flex border border-red w-9/12  mx-auto mt-32"
    >
      {items.map((item, index) => (
        <BentoBlock item={item} key={index} size="small" />
      ))}
    </Reorder.Group>
  );
};

export default Hero;
