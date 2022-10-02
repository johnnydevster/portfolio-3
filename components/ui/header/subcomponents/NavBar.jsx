import Link from "../../../utils/Link";

export default function NavBar() {
  return (
    <nav className="container relative z-20">
      <ul className="label flex gap-10">
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
