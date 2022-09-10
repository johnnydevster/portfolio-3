import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const variants = {
  hovered: {
    x: 0,
    y: 0,
    width: "100%",
  },
  unhovered: {
    rotate: 1,
    x: -3,
    y: 3,
    width: 0,
  },
};

export default function NextLink({ href, children, className }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span className={className}>
      <Link href={href} passHref>
        <a
          className="relative inline"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {children}
          <motion.div
            animate={hovered ? "hovered" : "unhovered"}
            variants={variants}
            className="absolute inline w-0 -left-0 -right-0 -bottom-[3px] bg-gradient-to-r from-yellow-500 to-red-400 h-[2px] rounded-full"
          />
        </a>
      </Link>
    </span>
  );
}
