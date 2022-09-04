export default function Container({
  component: Component = "div",
  children,
  className = "",
}) {
  return (
    <Component className={`${className} container mx-auto`}>
      {children}
    </Component>
  );
}
