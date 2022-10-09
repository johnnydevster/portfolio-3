import { useEffect } from "react";
import PlanetOne from "../../../public/assets/svgs/PlanetOne";
import Star from "../../../public/assets/svgs/Star";
import Avatar from "../../Avatar";

import Waves from "./HeroForeground";
import HeroTitle from "./HeroTitle";

export default function HeroModule() {
  function canvasFunction() {
    let c = document.getElementById("canv");
    let $ = c.getContext("2d");

    let col = function (x, y, r, g, b) {
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1, 1);
    };
    let R = function (x, y, t) {
      return Math.floor(100 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    let G = function (x, y, t) {
      return Math.floor(
        200 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    let B = function (x, y, t) {
      return Math.floor(
        400 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    let run = function () {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.08;
      window.requestAnimationFrame(run);
    };

    run();
  }

  useEffect(() => {
    /* canvasFunction(); */
  }, []);

  return (
    <section className="h-[calc(100vh-var(--header-height-minimized))] relative w-full overflow-hidden">
      {/*       <canvas
        width="32"
        height="32"
        id="canv"
        className="absolute inset-0 w-full h-full z-[-9999] mix-blend-plus-lighter"
      /> */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto justify-between items-center my-12 sm:my-24 h-[50%] sm:h-[60%] lg:h-[70%]">
        <HeroTitle />
        <Avatar />
        <PlanetOne />
      </div>

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
