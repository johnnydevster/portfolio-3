import { ExitToApp, GitHub } from "@mui/icons-material";

export default function Links({ links }) {
  return (
    <ul className="flex items-center gap-2 mt-1 h-10">
      {links?.github && (
        <li>
          <a href={links?.github}>
            <GitHub className="fill-yellow-300 hover:fill-yellow-200" />
          </a>
        </li>
      )}
      {links?.live && (
        <li>
          <a href={links?.live}>
            <ExitToApp className="aspect-square h-12 w-[27px] relative top-px fill-yellow-300 hover:fill-yellow-200" />
          </a>
        </li>
      )}
    </ul>
  );
}
