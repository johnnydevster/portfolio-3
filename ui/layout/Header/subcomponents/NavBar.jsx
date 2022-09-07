import Link from "../../../../components/utils/Link";

export default function NavBar() {
  return (
    <nav className="container">
      <ul className="label flex gap-2xl">
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
