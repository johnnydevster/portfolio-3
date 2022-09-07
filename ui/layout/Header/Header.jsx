import AnimationElements from "./subcomponents/AnimationElements";
import NavBar from "./subcomponents/NavBar";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 h-header-lg flex items-center group">
        <AnimationElements />
        <NavBar />
      </header>
    </>
  );
}
