import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -80 },
  show: { x: 0, transition: { duration: 1, type: "spring" } },
};

export default function HeroTitle() {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        <motion.span variants={item} className="label text-slate-300">
          👋 hey there, I&apos;m
        </motion.span>
        <motion.h1 variants={item} className="heading-lg text-slate-100">
          Johnny Backlund
        </motion.h1>
        <motion.h2 variants={item} className="label text-sky-200 text-2xl">
          <span>
            <KeyboardArrowLeftIcon />
          </span>
          <span>Front End Web Developer</span>
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </motion.h2>
      </motion.div>
    </AnimatePresence>
  );
}
