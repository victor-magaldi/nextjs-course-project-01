import Link from "next/link";

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/performance"}>Performance</Link>
        </li>
        <li>
          <Link href={"/reliability"}>Reliability</Link>
        </li>
        <li>
          <Link href={"/scale"}>Scale</Link>
        </li>
      </ul>
    </header>
  );
}
