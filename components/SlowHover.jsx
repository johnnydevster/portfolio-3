import { motion, useScroll } from "framer-motion";

export default function SlowHover({ children, className = "" }) {
  return (
    <motion.div
      style={{ height: "18rem", width: "18rem" }}
      animate={{ y: 20 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`relative z-[-10] ${className}`}
    >
      {children}
    </motion.div>
  );
}
