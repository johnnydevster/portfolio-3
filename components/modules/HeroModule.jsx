import PlanetOne from "../../public/assets/svgs/PlanetOne";
import Star from "../../public/assets/svgs/Star";
import Avatar from "../Avatar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from "framer-motion";
import Waves from "../ForeGround";

export default function HeroModule() {
  return (
    <section className="h-[calc(100vh-var(--header-height-minimized))] relative overflow-hidden grid grid-cols-2 place-items-center">
      <div className="flex flex-col gap-2">
        <span className="label text-slate-300">👋 hey there, I&apos;m</span>
        <h1 className="heading-lg text-slate-100">Johnny Backlund</h1>
        <h2 className="label text-sky-200 text-2xl">
          <motion.span
            initial={{
              x: 200,
            }}
            animate={{
              x: 100,
            }}
          >
            <KeyboardArrowLeftIcon />
          </motion.span>
          <motion.span animate={{ x: 100 }}>
            Front End Web Developer
          </motion.span>
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </h2>
      </div>

      <Avatar />
      <PlanetOne />
      <Star y={5} x={5} />
      <Star y={20} x={25} />
      <Star y={12} x={50} />
      <Star y={10} x={80} />
      <Star y={40} x={95} />
      <Star y={65} x={10} />
      <Star y={65} x={40} />
      <Star y={65} x={80} />

      <Waves />
    </section>
  );
}
