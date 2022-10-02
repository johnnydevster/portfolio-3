import AnimationElements from "./AnimationElements";
import NavBar from "./NavBar";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowScroll } from "@mantine/hooks";

export default function Header() {
  const [expandHeader, setExpandHeader] = useState(false);
  const [scroll] = useWindowScroll();

  useEffect(() => {
    if (scroll.y > 0) {
      setExpandHeader(true);
    }
  }, [scroll.y]);

  return (
    <>
      <motion.header
        initial={false}
        transition={{ duration: 0.08 }}
        animate={{
          height: expandHeader
            ? "var(--header-height-minimized)"
            : "var(--header-height-expanded)",
        }}
        className="sticky top-0 flex items-center group z-[9999]"
      >
        <AnimationElements />
        <NavBar />
      </motion.header>
    </>
  );
}
