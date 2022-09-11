import { motion, useScroll } from "framer-motion";

export default function SlowHover({ children, className = "" }) {
  return (
    <motion.div
      animate={{ y: 20 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}
