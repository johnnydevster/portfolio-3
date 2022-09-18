import { motion } from "framer-motion";
import Link from "next/link";

export default function NextLink({ href, children, className }) {
  return (
    <span className={className}>
      <Link href={href} passHref>
        <motion.a
          className="relative inline bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0)",
          }}
          whileHover={{
            backgroundClip: "text",
            color: "transparent",
            backgroundImage: [
              "linear-gradient(to right, #bae6fd, #38bdf8)",
              "linear-gradient(to right, #38bdf8, #bae6fd)",
            ],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          {children}
        </motion.a>
      </Link>
    </span>
  );
}
