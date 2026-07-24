import { motion } from "framer-motion";
import {
  Satellite,
  Waves,
  BrainCircuit,
  ShieldAlert,
  Ship,
 BarChart3,
  FileText,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    icon: Satellite,
    title: "Satellite Detection",
    description:
      "ISRO satellite imagery identifies an abnormal pollution signature.",
    color: "text-cyan-400",
  },
  {
    icon: Waves,
    title: "Ocean Sensor Validation",
    description:
      "Buoys verify chemical concentration and water quality changes.",
    color: "text-blue-400",
  },
  {
    icon: BrainCircuit,
    title: "Gemini AI Analysis",
    description:
      "AI predicts pollution spread and recommends the best response.",
    color: "text-violet-400",
  },
  {
    icon: ShieldAlert,
    title: "National Alert",
    description:
      "Government agencies receive instant operational notifications.",
    color: "text-red-400",
  },
  {
    icon: Ship,
    title: "Mission Deployment",
    description:
      "Cleanup vessels and Coast Guard units are dispatched.",
    color: "text-green-400",
  },
  {
    icon: BarChart3,
    title: "Live Monitoring",
    description:
      "Real-time GIS dashboards track mission progress continuously.",
    color: "text-yellow-400",
  },
  {
    icon: FileText,
    title: "Government Report",
    description:
      "Official incident report generated automatically.",
    color: "text-orange-400",
  },
  {
    icon: CheckCircle2,
    title: "Mission Completed",
    description:
      "Marine ecosystem recovery confirmed and archived.",
    color: "text-emerald-400",
  },
];

export default function HeroDemoTimeline() {
  return (
    <section className="py-32">

      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">

          Operational Lifecycle

        </p>

        <h2 className="text-5xl lg:text-6xl font-black mt-5">

          From Detection to Recovery

        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">

          DeepSea Guardian transforms satellite observations,
          AI intelligence and government coordination into one
          seamless national response workflow.

        </p>

      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Timeline Line */}

        <div className="
          hidden
          lg:block
          absolute
          top-16
          left-0
          w-full
          h-[2px]
          bg-gradient-to-r
          from-cyan-500/20
          via-cyan-400
          to-cyan-500/20
        " />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {timeline.map((step, index) => {
            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  relative
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-cyan-500/10
                  hover:border-cyan-400/30
                  transition-all
                "
              >

                {/* Step Number */}

                <div className="
                  absolute
                  -top-4
                  left-8
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-400
                  text-slate-900
                  flex
                  items-center
                  justify-center
                  font-black
                ">

                  {index + 1}

                </div>

                {/* Icon */}

                <div className="
                  mt-6
                  w-20
                  h-20
                  rounded-3xl
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                ">

                  <Icon
                    size={36}
                    className={step.color}
                  />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold mt-8">

                  {step.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-slate-400 leading-7">

                  {step.description}

                </p>

                {/* Status */}

                <div className="
                  mt-8
                  flex
                  justify-between
                  items-center
                  border-t
                  border-white/10
                  pt-5
                ">

                  <span className="text-green-400 text-sm">

                    Automated

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

      </div>

    </section>
  );
}