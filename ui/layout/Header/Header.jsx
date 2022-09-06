import { useWindowScroll } from "@mantine/hooks";
import { useState } from "react";
import AnimationElements from "./AnimationElements";
import NavBar from "./NavBar";

export default function Header() {
  const [headerHovered, setHeaderHovered] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <header className="sticky top-0 h-header-lg flex items-center group">
        <AnimationElements />
        <NavBar />
      </header>
    </>
  );
}
