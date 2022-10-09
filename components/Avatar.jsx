import AvatarImage from "../public/assets/Avatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const variants = {
  initial: {
    x: 0,
  },
  show: {
    x: [null, 180],
  },
  hide: {
    x: [null, 75],
  },
};

export default function Avatar() {
  const [showSocials, setShowSocials] = useState(true);
  return (
    <div
      onMouseEnter={() => setShowSocials(true)}
      onMouseLeave={() => setShowSocials(false)}
      className="relative z-[999] rounded-full h-80 w-80"
    >
      <Image
        alt="realistically illustrated astronaut with smoke coming out of the suit"
        src={AvatarImage}
        className="rounded-full"
      />
      <div className="absolute -inset-4 z-[-20] rounded-full bg-slate-dark-lighter"></div>
      <motion.div
        initial="initial"
        variants={variants}
        animate={showSocials ? "show" : "hide"}
        transition={{
          duration: 0.4,
          type: "spring",
        }}
        style={{
          clipPath: "polygon(0 20%, 100% 20%, 100% 80%, 0% 80%)",
          padding: "20% 0 20% 0",
        }}
        className="label text-sm text-sky-200 uppercase flex flex-col items-end justify-around absolute -inset-4 z-[-999] rounded-full bg-gradient-to-r from-sky-500/10 to-sky-900/10 border-slate-dark-lighter border-[12px]"
      >
        <Link href="/">
          <a className="mr-[30px] group transition-all duration-500">
            <span className="mr-6 group-hover:text-sky-100">GitHub</span>
            <GitHubIcon
              className={`h-8 w-8 ${
                showSocials ? "fill-yellow-300" : "fill-sky-200"
              } group-hover:fill-yellow-200`}
            />
          </a>
        </Link>
        <Link href="/">
          <a className="mr-[15px] group">
            <span className="mr-6 group-hover:text-sky-100" href="/">
              LinkedIn
            </span>
            <LinkedInIcon
              className={`h-9 w-9 ${
                showSocials ? "fill-yellow-300" : "fill-sky-200"
              } group-hover:fill-yellow-200`}
            />
          </a>
        </Link>
        <Link href="/">
          <a className="mr-[30px] group">
            <span className="mr-6 group-hover:text-sky-100">Resume</span>
            <ArticleIcon
              className={`h-8 w-8 ${
                showSocials ? "fill-yellow-300" : "fill-sky-200"
              } group-hover:fill-yellow-200`}
            />
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
