import { useState } from "react";

export default function Header() {
  const [headerHovered, setHeaderHovered] = useState(false);
  return (
    <>
      <header
        onMouseEnter={() => {
          setHeaderHovered(true);
        }}
        onMouseLeave={() => {
          setHeaderHovered(false);
        }}
        className="h-header-lg bg-slate-dark fixed z-10 inset-0 rounded-lg group"
      ></header>
      <div
        className={`absolute h-header-lg top-1 left-1 right-1 z-[-10] bg-gradient-to-r from-yellow-600 to-red-400 rounded-lg group-hover:top-2 transition ${
          headerHovered ? "translate-y-[2px]" : ""
        }`}
      />
    </>
  );
}
