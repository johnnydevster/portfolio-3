import PlanetOne from "../../../public/assets/svgs/PlanetOne";
import Star from "../../../public/assets/svgs/Star";
import Avatar from "../../Avatar";

import Waves from "./HeroForeground";
import HeroTitle from "./HeroTitle";

export default function HeroModule() {
  return (
    <section className="h-[calc(100vh-var(--header-height-minimized))] relative overflow-hidden grid grid-cols-2 place-items-center">
      <HeroTitle />

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
