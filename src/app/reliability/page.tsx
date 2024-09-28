import Image from "next/image";

export default function Reliability() {
  return (
    <div>
      Reliability
      <div style={{ height: "400px", position: "relative" }}>
        <Image
          src="/reliability.jpg"
          alt="car factory"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
