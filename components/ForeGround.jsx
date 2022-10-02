import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

export default function Waves() {
  const parallaxForeground = useParallax({
    speed: -6,
  });

  const parallaxMiddleground = useParallax({
    speed: -8,
  });

  const parallaxBackground = useParallax({
    speed: -10,
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 z-[1000] opacity-50 scale-[0.8]">
      <motion.div className="relative">
        <div ref={parallaxForeground.ref}>
          <motion.svg
            className="absolute -bottom-[50px] left-[40%] scale-[1.1] z-[800]"
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
        </div>
        <div ref={parallaxBackground.ref}>
          <motion.svg
            className="absolute -bottom-[100px] left-[0] opacity-30 z-[500]"
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
        </div>
        <div ref={parallaxMiddleground.ref} className="z-[500]">
          <svg
            className="absolute -bottom-20 left-[-40%] z-[400]"
            viewBox="-592.615 304.995 1600 198"
            width="1600"
            height="198"
          >
            <defs>
              <linearGradient id="b" x1="50%" x2="50%" y1="-10.959%" y2="100%">
                <stop stopColor="#345383" stopOpacity="1" offset="0"></stop>
                <stop stopColor="#2e4161" offset="1"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#b)"
              fillRule="evenodd"
              d="M -592.615 304.995 C -592.615 304.995 -182.717 502.995 218.385 502.995 C 555.05 502.995 1007.385 304.995 1007.385 304.995 L -592.615 304.995 Z"
              transform="matrix(-1, 0, 0, -1, 414.770032, 807.990381)"
            ></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
