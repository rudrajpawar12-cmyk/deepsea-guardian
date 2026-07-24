import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Satellite,
  BrainCircuit,
  Activity,
} from "lucide-react";

// Hero Modules
import HeroBackgroundEffects from "./hero/HeroBackgroundEffects";
import HeroParticles from "./hero/HeroParticles";
import HeroRadar from "./hero/HeroRadar";
import HeroSatellite from "./hero/HeroSatellite";
import HeroEarth from "./hero/HeroEarth";
import HeroLiveFeed from "./hero/HeroLiveFeed";
import HeroStats from "./hero/HeroStats";
import HeroMissionWorkflow from "./hero/HeroMissionWorkflow";
import HeroTechStack from "./hero/HeroTechStack";
import HeroGovernmentPartners from "./hero/HeroGovernmentPartners";
import HeroImpact from "./hero/HeroImpact";
import HeroDemoTimeline from "./hero/HeroDemoTimeline";
import HeroCTA from "./hero/HeroCTA";
import HeroFooter from "./hero/HeroFooter";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-screen overflow-hidden flex items-center">

        {/* Animated Background */}
        <HeroBackgroundEffects />
        <HeroParticles />
        <HeroRadar />
        <HeroSatellite />
        <HeroEarth />

        {/* Content */}

        <div className="relative z-20 max-w-[1700px] mx-auto px-6 lg:px-10 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2">

                <ShieldCheck
                  className="text-cyan-400"
                  size={18}
                />

                <span className="uppercase tracking-[0.35em] text-xs text-cyan-300 font-semibold">

                  Government of India

                </span>

              </div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .2,
                }}
                className="mt-8 text-6xl lg:text-8xl font-black leading-none"
              >

                DeepSea

                <span className="text-cyan-400">

                  {" "}Guardian

                </span>

              </motion.h1>

              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: .35,
                }}
                className="mt-6 text-2xl lg:text-4xl font-bold text-slate-300"
              >

                AI Powered National Marine Intelligence Platform

              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: .5,
                }}
                className="mt-8 max-w-2xl text-slate-400 text-lg leading-8"
              >

                Protecting India's oceans using
                Artificial Intelligence,
                Satellite Intelligence,
                Predictive Analytics,
                GIS Intelligence,
                and Real-time Environmental Monitoring
                for rapid government decision making.

              </motion.p>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-5">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .97,
                  }}
                  onClick={() => navigate("/login")}
                  className="
                  bg-cyan-400
                  hover:bg-cyan-300
                  text-slate-950
                  font-bold
                  px-8
                  py-5
                  rounded-2xl
                  flex
                  items-center
                  gap-3
                  shadow-xl
                  shadow-cyan-500/20
                  transition-all
                  "
                >

                  Access Secure Command Center

                  <ArrowRight size={22} />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .97,
                  }}
                  className="
                  glass
                  border
                  border-white/10
                  hover:border-cyan-500
                  px-8
                  py-5
                  rounded-2xl
                  flex
                  items-center
                  gap-3
                  transition-all
                  "
                >

                  <PlayCircle />

                  Watch Live Simulation

                </motion.button>

              </div>

              {/* Mini Features */}

              <div className="grid grid-cols-3 gap-5 mt-14">

                <MiniFeature
                  icon={<Satellite size={24} />}
                  title="Satellite"
                />

                <MiniFeature
                  icon={<BrainCircuit size={24} />}
                  title="Gemini AI"
                />

                <MiniFeature
                  icon={<Activity size={24} />}
                  title="24×7 Live"
                />

              </div>

            </motion.div>

            {/* ================================================= */}
            {/* RIGHT */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .8,
              }}
              className="relative min-h-[700px]"
            >

              <HeroLiveFeed />

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* REST OF LANDING */}
      {/* ================================================= */}

      <HeroStats />

      <HeroMissionWorkflow />

      <HeroTechStack />

      <HeroGovernmentPartners />

      <HeroImpact />

      <HeroDemoTimeline />

      <HeroCTA />

      <HeroFooter />
    </>
  );
}

function MiniFeature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      glass
      rounded-2xl
      p-5
      text-center
      "
    >

      <div className="flex justify-center text-cyan-400">

        {icon}

      </div>

      <p className="mt-3 font-semibold">

        {title}

      </p>

    </motion.div>
  );
}