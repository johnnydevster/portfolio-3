import PlanetOne from "../../public/assets/svgs/PlanetOne";
import Star from "../../public/assets/svgs/Star";
import Avatar from "../Avatar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function HeroModule() {
  return (
    <section className="h-[calc(100vh-var(--header-height-minimized))] relative overflow-hidden grid grid-cols-2 place-items-center">
      <div className="flex flex-col gap-2">
        <span className="label text-slate-300">👋 hey there, I'm</span>
        <h1 className="heading-lg text-slate-100">Johnny Backlund</h1>
        <h2 className="label text-sky-200 text-2xl">
          <span>
            <KeyboardArrowLeftIcon />
          </span>
          Front End Web Developer
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </h2>
      </div>

      <Avatar />

      {/*  <PlanetOne />
      <Star /> */}
    </section>
  );
}
