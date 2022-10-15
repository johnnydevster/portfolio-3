import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  initial: {
    clipPath: "polygon(0 50%, 20% 0, 100% 0, 100% 50%, 80% 100%, 0 100%)",
  },

  animate: {
    clipPath: "polygon(50% 0, 50% 100%)",
  },
};

export default function TechStack({ techStack }) {
  const [hover, setHover] = useState(false);

  return (
    <ul className="uppercase font-semibold text-sky-900 text-sm flex gap-2">
      {techStack?.map((tech) => (
        <li
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="bg-sky-300 bg-opacity-90 inline-block p-1 px-2 rounded relative"
          key={tech._id}
        >
          <motion.div
            variants={variants}
            animate={hover ? "animate" : "initial"}
            className="absolute inset-0 bg-sky-300 rounded"
          />
          <span className="relative">{tech.title}</span>
        </li>
      ))}
    </ul>
  );
}
