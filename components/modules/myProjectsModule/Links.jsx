import React from "react";

export default function Links({ links }) {
  return (
    <ul>
      {links?.github && (
        <li>
          <a href={links?.github}>GitHub</a>
        </li>
      )}
      {links?.live && (
        <li>
          <a href={links?.live}>Live site</a>
        </li>
      )}
    </ul>
  );
}
