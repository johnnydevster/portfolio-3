import AvatarImage from "../public/assets/Avatar.png";

import Image from "next/image";

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
        <div className="absolute top-0 bottom-0 right-0 w-10 z-[-30] rounded-full bg-sky-200"></div>
      </div>
    </div>
  );
}
