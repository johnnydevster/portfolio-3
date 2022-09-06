export default function Label({
  component: Component = "span",
  className = "",
  children,
}) {
  return <Component className={`${className}`}>{children}</Component>;
}
