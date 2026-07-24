import AnimatedBackground from "../components/landing/AnimatedBackground";
import Hero from "../components/landing/Hero";
import AgencyStatus from "../components/landing/AgencyStatus";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#020617]">

      <AnimatedBackground />

      <Hero />

      <AgencyStatus />

    </main>
  );
}