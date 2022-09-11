import { useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function useScrollScaling() {
  const { scrollY } = useScroll();
  const [scale, setScale] = useState();
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScale(1 + latest * -0.0005);
    });
  }, []);
  return [scale, setScale];
}
