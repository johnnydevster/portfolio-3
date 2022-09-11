import AvatarImage from "../public/assets/Avatar.png";

import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="relative z-[-10] rounded-full h-80 w-80 p-4 bg-slate-dark-lighter">
        <Image src={AvatarImage} className="rounded-full" />
      </div>
      <div className="flex flex-col gap-2 justify-center bg-slate-dark-lighter p-11 rounded-r-xl relative -left-24 pl-28 z-[-20]">
        <h1 className="heading text-slate-100">Johnny</h1>
        <hr className="border-slate-800" />
        <h2 className="label uppercase text-base text-slate-300">
          front end web developer
        </h2>
      </div>
    </>
  );
}
