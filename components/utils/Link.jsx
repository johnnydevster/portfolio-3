import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const variants = {
  hovered: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  unhovered: {
    opacity: 0,
    rotate: 2,
    x: -3,
    y: 3,
    width: "50%",
  },
};

export default function NextLink({ href, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} passHref>
      <motion.a
        className="block relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        <motion.span
          animate={hovered ? "hovered" : "unhovered"}
          variants={variants}
          className="absolute -left-0 -right-0 -bottom-[1px] border-b-4 border-yellow-400"
        />
      </motion.a>
    </Link>
  );
}
