import Hero from "@/components/sections/Hero";
import WhyLEDs from "@/components/sections/WhyLEDs";
import CompletedHomes from "@/components/sections/CompletedHomes";
import AppControl from "@/components/sections/AppControl";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import KeyAdvantages from "@/components/sections/KeyAdvantages";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyLEDs />
      <CompletedHomes />
      <AppControl />
      <Stats />
      <Process />
      <KeyAdvantages />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

