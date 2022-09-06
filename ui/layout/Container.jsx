export default function Container({
  component: Component = "div",
  children,
  className = "",
}) {
  return (
    <Component className={`container mx-auto ${className}`}>
      {children}
    </Component>
  );
}
