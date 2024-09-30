import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      Home
      <div className="absolute -z-10 inset-0">
        <Hero
          imgData="/home.jpg"
          imgAlt="car factory"
          title="Professional Cloud Hosting"
        />
      </div>
    </div>
  );
}
