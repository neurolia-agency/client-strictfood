import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";

const LaPromesse = dynamic(() => import("@/components/sections/la-promesse"));
const NosArtisans = dynamic(() => import("@/components/sections/nos-artisans"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const AvisConfiance = dynamic(
  () => import("@/components/sections/avis-confiance")
);

export default function Home() {
  return (
    <>
      <Hero />
      <LaPromesse />
      <NosArtisans />
      <Experience />
      <AvisConfiance />
    </>
  );
}
