import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home
      <div className="absolute -z-10 inset-0">
        <Image
          src="/home.jpg"
          alt="car factory"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
