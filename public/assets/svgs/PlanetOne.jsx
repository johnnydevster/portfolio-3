import { AnimatePresence, motion, useScroll } from "framer-motion";
import SlowHover from "../../../components/utils/SlowHover";
import useScrollScaling from "../../../hooks/useScrollScaling";

export default function PlanetOne() {
  const [scale] = useScrollScaling();

  return (
    <SlowHover className="absolute z-[-10] left-20 bottom-20">
      <AnimatePresence>
        <motion.div
          initial={{
            y: 1500,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 3,
            type: "spring",
          }}
          style={{ height: 500, width: 300 }}
          className="opacity-30"
        >
          <svg viewBox="613.01 536.447 180.038 137.518">
            <defs>
              <radialGradient
                id="radial-gradient-13"
                cx="738"
                cy="566.75"
                r="48.62"
                gradientTransform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 636.009806, -351.719955)"
              ></radialGradient>
              <radialGradient
                id="radial-gradient-2"
                cx="508.4"
                cy="507.94"
                r="37.45"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#8cbdb7"></stop>
                <stop offset="1" stopColor="#1f768f"></stop>
              </radialGradient>
              <radialGradient
                id="radial-gradient-14"
                cx="744.2"
                cy="593.43"
                r="67.95"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -4.843711, 7.265668)"
              >
                <stop offset="0.29" stopColor="aqua"></stop>
                <stop offset="1" stopColor="#0af"></stop>
              </radialGradient>
              {/*  <style>.cls-1{fill:url(#radial-gradient);}.cls-10,.cls-2,.cls-20,.cls-21{fill:#fff;}.cls-2{opacity:0.05;}.cls-3{fill:url(#radial-gradient-2);}.cls-4{fill:url(#radial-gradient-3);}.cls-5{fill:url(#radial-gradient-4);}.cls-6{fill:url(#radial-gradient-5);}.cls-7{fill:url(#radial-gradient-6);}.cls-8{fill:url(#radial-gradient-7);}.cls-9{fill:url(#radial-gradient-8);}.cls-11{fill:url(#radial-gradient-9);}.cls-12{fill:url(#radial-gradient-10);}.cls-13{fill:url(#radial-gradient-11);}.cls-14{fill:url(#radial-gradient-12);}.cls-15,.cls-16{fill:#f9e600;}.cls-15{opacity:0.13;}.cls-16{opacity:0.53;}.cls-17{fill:#1a013c;}.cls-18{fill:url(#radial-gradient-13);}.cls-19{fill:url(#radial-gradient-14);}.cls-20{font-size:86.75px;}.cls-20,.cls-21{font-family:Abel-Regular, Abel;}.cls-21{font-size:24px;}.cls-22{letter-spacing:-0.01em;}</style> */}
            </defs>
            <circle
              class="cls-18"
              cx="742.57"
              cy="591.88"
              r="48.62"
              transform="matrix(0.707107, -0.707107, 0.707107, 0.707107, -242.201683, 711.760146)"
              fill="url(#radial-gradient-14)"
            ></circle>
            <motion.path
              fill="url(#radial-gradient-2)"
              d="M 829.156 578.756 C 826.766 568.946 804.976 565.246 775.156 568.066 C 776.086 569.196 776.976 570.366 777.806 571.566 C 799.526 569.926 814.746 572.496 816.396 579.246 C 819.006 589.916 786.646 606.986 744.126 617.366 C 701.606 627.746 665.026 627.526 662.416 616.856 C 660.876 610.536 671.586 601.976 689.416 593.856 C 689.586 592.286 689.836 590.736 690.146 589.216 C 663.756 600.216 647.226 613.086 649.556 622.606 C 652.976 636.606 695.976 638.166 745.556 626.046 C 795.136 613.926 832.606 592.776 829.156 578.756 Z"
              transform="matrix(1, 0, 0, 1, -36.328035, 6.054436)"
              initial={{ y: [1000], x: 1000 }}
              animate={{
                rotate: -6,
                x: [-36.328035, -36.328035],
                y: [6.054, 6.054],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.path>
          </svg>
        </motion.div>
      </AnimatePresence>
    </SlowHover>
  );
}
