import AvatarImage from "../public/assets/Avatar.png";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <div>
      <div className="relative z-[-10] rounded-full h-80 w-80">
        <Image
          alt="realistically illustrated astronaut with smoke coming out of the suit"
          src={AvatarImage}
          className="rounded-full"
        />
        <div className="absolute -inset-4 z-[-20] rounded-full bg-slate-dark-lighter"></div>
        <motion.div
          style={{
            clipPath: "polygon(0 30%, 100% 30%, 100% 70%, 0% 70%)",
            padding: "35% 0 35% 0",
            x: 50,
          }}
          animate={{
            clipPath: "polygon(0 10%, 100% 30%, 100% 70%, 0% 90%)",
            x: 60,
          }}
          className="flex flex-col items-end justify-around absolute -inset-1 z-[-999] rounded-full bg-sky-900 border-[10px] border-yellow-500"
        >
          <div>Hejsan</div>
          <div>Hejsan</div>
          <div>Hejsan</div>
        </motion.div>
      </div>
    </div>
  );
}
