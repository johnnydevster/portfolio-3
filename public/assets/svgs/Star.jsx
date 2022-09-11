import { motion } from "framer-motion";

export default function Star() {
  return (
    <motion.div
      className="relative z-[-10]"
      style={{ height: 30, width: 30 }}
      animate={{
        rotate: 360,
        scale: [1.2, 0.8, 1.2, 0.8, 1.2, 0.8, 1.2, 0.8, 1.2],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg fill="rgb(253 224 71)" viewBox="1171.682 610.044 51.03 51.04">
        <polygon
          points="1233.53 603.99 1237.24 625.79 1259.04 629.51 1237.24 633.22 1233.53 655.03 1229.81 633.22 1208.01 629.51 1229.81 625.79 1233.53 603.99"
          transform="matrix(1, 0, 0, 1, -36.328035, 6.054436)"
        ></polygon>
      </svg>
    </motion.div>
  );
}
