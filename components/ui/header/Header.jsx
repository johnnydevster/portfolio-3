import AnimationElements from "./AnimationElements";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 flex items-center group z-[9999] h-20">
        <AnimationElements />
        <NavBar />
      </header>
    </>
  );
}
