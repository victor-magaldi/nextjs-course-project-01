import Image from "next/image";

export default function Scale() {
  return (
    <div>
      Scale
      <div style={{ height: "400px", position: "relative" }}>
        <Image
          src="/scale.jpg"
          alt="car factory"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
