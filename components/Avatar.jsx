import AvatarImage from "../public/assets/Avatar.png";

import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="relative z-[-10] rounded-full h-80 w-80 p-4 bg-slate-dark-lighter">
        <Image alt="" src={AvatarImage} className="rounded-full" />
      </div>
    </>
  );
}
