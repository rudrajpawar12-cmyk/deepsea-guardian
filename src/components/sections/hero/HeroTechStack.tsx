import { motion } from "framer-motion";
import {
  BrainCircuit,
  Satellite,
  Map,
  Database,
  Cpu,
  Cloud,
  ShieldCheck,
  Waves,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Google Gemini AI",
    description:
      "Predictive marine pollution analysis and intelligent decision support.",
    color: "text-violet-400",
  },
  {
    icon: Satellite,
    title: "ISRO Satellite Data",
    description:
      "Continuous monitoring of India's coastal waters using satellite imagery.",
    color: "text-cyan-400",
  },
  {
    icon: Map,
    title: "GIS Intelligence",
    description:
      "Interactive geospatial visualization with pollution heatmaps.",
    color: "text-blue-400",
  },
  {
    icon: Database,
    title: "Environmental Database",
    description:
      "Historical marine pollution records and environmental datasets.",
    color: "text-emerald-400",
  },
  {
    icon: Cpu,
    title: "AI Analytics Engine",
    description:
      "Risk scoring, pollution forecasting and response optimization.",
    color: "text-orange-400",
  },
  {
    icon: Cloud,
    title: "Weather Intelligence",
    description:
      "Wind, currents and weather integrated into prediction models.",
    color: "text-sky-400",
  },
  {
    icon: Waves,
    title: "Ocean IoT Sensors",
    description:
      "Real-time salinity, pH, temperature and pollution measurements.",
    color: "text-teal-400",
  },
  {
    icon: ShieldCheck,
    title: "Government Security",
    description:
      "Secure authentication and protected operational infrastructure.",
    color: "text-green-400",
  },
];

export default function HeroTechStack() {
  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
          Technology Stack
        </p>

        <h2 className="text-5xl font-black mt-5">
          Powered By Advanced Intelligence
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-8">
          DeepSea Guardian combines Artificial Intelligence,
          Satellite Monitoring, GIS Intelligence and Ocean Sensor Networks
          into one unified government platform.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative
                glass
                rounded-3xl
                overflow-hidden
                border
                border-cyan-500/10
                hover:border-cyan-400/40
                transition-all
                p-8
              "
            >

              {/* Glow */}

              <div className="
                absolute
                -top-10
                -right-10
                w-36
                h-36
                rounded-full
                bg-cyan-500/10
                blur-3xl
              " />

              {/* Icon */}

              <div className="
                relative
                w-16
                h-16
                rounded-2xl
                bg-slate-900
                flex
                items-center
                justify-center
              ">

                <Icon
                  size={32}
                  className={tech.color}
                />

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold mt-7">

                {tech.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-slate-400 leading-7">

                {tech.description}

              </p>

              {/* Bottom */}

              <div className="
                mt-8
                flex
                items-center
                justify-between
              ">

                <span className="text-cyan-400 text-sm">

                  Operational

                </span>

                <span className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-400
                  animate-pulse
                " />

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}