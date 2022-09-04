import { twMerge } from "tailwind-merge";

export default function Heading({
  component: Component = "h1",
  color = "yellow",
  size = "xl",
  children,
  className = "",
}) {
  let colors;
  let sizes;

  switch (color) {
    case "yellow":
      colors = "from-yellow-400 to-yellow-300";
      break;
    case "purple":
      colors = "from-purple-400 to-purple-300";
      break;
    case "blue":
      colors = "from-sky-400 to-sky-300";
  }

  switch (size) {
    case "xl":
      sizes = "text-6xl";
      Component = "h1";
      break;
    case "lg":
      sizes = "text-4xl";
      Component = "h2";
      break;
    case "md":
      sizes = "text-2xl";
      Component = "h3";
      break;
    case "sm":
      sizes = "text-xl";
      Component = "h4";
      break;
  }

  const finalClass = twMerge(
    `pb-1 -mb-1 font-bold tracking-wide ${colors} ${sizes} ${className}`
  );

  return (
    <Component className={finalClass}>
      <span className="bg-gradient-to-r bg-clip-text text-transparent">
        {children}
      </span>
    </Component>
  );
}
