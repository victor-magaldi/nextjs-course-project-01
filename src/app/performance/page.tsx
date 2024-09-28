import Image from "next/image";

export default function Performance() {
  return (
    <div>
      Performance
      <div style={{ height: "400px", position: "relative" }}>
        <Image
          src="/performance.jpg"
          alt="car factory"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
