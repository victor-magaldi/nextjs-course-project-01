import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/performance"}>performance</Link>
        <Link href={"/reliability"}>reliability</Link>
        <Link href={"/scale"}>scale</Link>
      </div>
      Home
    </div>
  );
}
