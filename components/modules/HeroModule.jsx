import PlanetOne from "../../public/assets/svgs/PlanetOne";
import Star from "../../public/assets/svgs/Star";
import Avatar from "../Avatar";

export default function HeroModule() {
  return (
    <section className="h-[calc(100vh-var(--header-height-minimized))] flex w-full justify-center items-center relative overflow-hidden">
      <div className="flex flex-col gap-2">
        <h1 className="heading-lg">Johnny Backlund</h1>
        <h2 className="label">Front End Web Developer</h2>
      </div>
      <PlanetOne />
      <Star />
    </section>
  );
}
