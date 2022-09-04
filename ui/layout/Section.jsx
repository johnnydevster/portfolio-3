import React from "react";

export default function Section({
  children,
  className = "",
  component: Component = "section",
}) {
  return <Component className={`${className} my-10 p-4`}>{children}</Component>;
}
