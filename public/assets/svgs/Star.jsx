import { motion } from "framer-motion";

export default function Star({ size, x, y }) {
  return (
    <motion.div
      className="absolute z-[-10] text-sky-200"
      style={{
        height: 30,
        width: 30,
        top: `${y}%`,
        left: `${x}%`,
        opacity: 0.2,
      }}
      animate={{
        rotate: 360,
        scale: [1.15, 0.8, 1.15, 0.8, 1.15, 0.8, 1.15, 0.8, 1.15],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg fill="rgb(165, 243, 252)" viewBox="1171.682 610.044 51.03 51.04">
        <polygon
          points="1233.53 603.99 1237.24 625.79 1259.04 629.51 1237.24 633.22 1233.53 655.03 1229.81 633.22 1208.01 629.51 1229.81 625.79 1233.53 603.99"
          transform="matrix(1, 0, 0, 1, -36.328035, 6.054436)"
        ></polygon>
      </svg>
    </motion.div>
  );
}
