import { motion } from "framer-motion";

export default function Waves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[1000]">
      <motion.div className="relative">
        <motion.svg
          className="absolute bottom-0 left-[40%] scale-[1.4] z-[1000]"
          viewBox="-592.615 304.995 1600 198"
          width="1600"
          height="198"
        >
          <defs>
            <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
              <stop stopColor="#364968" stopOpacity="1" offset="0"></stop>
              <stop stopColor="#2c4772" offset="1"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M -592.615 304.995 C -592.615 304.995 -182.717 502.995 218.385 502.995 C 555.05 502.995 1007.385 304.995 1007.385 304.995 L -592.615 304.995 Z"
            transform="matrix(-1, 0, 0, -1, 414.770032, 807.990381)"
          ></path>
        </motion.svg>
        <motion.svg
          className="absolute -bottom-5 left-[-40%] z-0"
          viewBox="-592.615 304.995 1600 198"
          width="1600"
          height="198"
        >
          <defs>
            <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
              <stop stopColor="#7dd3fc" stopOpacity="1" offset="0"></stop>
              <stop stopColor="#bae6fd" offset="1"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M -592.615 304.995 C -592.615 304.995 -182.717 502.995 218.385 502.995 C 555.05 502.995 1007.385 304.995 1007.385 304.995 L -592.615 304.995 Z"
            transform="matrix(-1, 0, 0, -1, 414.770032, 807.990381)"
          ></path>
        </motion.svg>
        <motion.svg
          className="absolute -bottom-5 left-[0] opacity-90 z-[-100]"
          viewBox="-592.615 304.995 1600 198"
          width="1600"
          height="198"
        >
          <defs>
            <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
              <stop stopColor="#7dd3fc" stopOpacity=".8" offset="0"></stop>
              <stop stopColor="#bae6fd" offset="1"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M -592.615 304.995 C -592.615 304.995 -182.717 502.995 218.385 502.995 C 555.05 502.995 1007.385 304.995 1007.385 304.995 L -592.615 304.995 Z"
            transform="matrix(-1, 0, 0, -1, 414.770032, 807.990381)"
          ></path>
        </motion.svg>
      </motion.div>
    </div>
  );
}
