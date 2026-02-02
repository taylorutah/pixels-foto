import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocationSection } from "@/components/sections/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CTABanner />
      <LocationSection />
    </>
  );
}
