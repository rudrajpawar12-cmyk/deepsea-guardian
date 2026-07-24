import { motion } from "framer-motion";
import {
  Waves,
  Fish,
  BrainCircuit,
  Clock3,
  Ship,
  Globe2,
} from "lucide-react";

const impacts = [
  {
    icon: Waves,
    value: "7,517 km",
    label: "Indian Coastline Protected",
    description: "Continuous AI-assisted surveillance across the national coastline.",
    color: "text-cyan-400",
  },
  {
    icon: Fish,
    value: "2.4 M",
    label: "Marine Species Protected",
    description: "Potentially safeguarded through early pollution detection.",
    color: "text-emerald-400",
  },
  {
    icon: BrainCircuit,
    value: "96%",
    label: "AI Prediction Accuracy",
    description: "Gemini-powered pollution forecasting and impact assessment.",
    color: "text-violet-400",
  },
  {
    icon: Clock3,
    value: "<5 Min",
    label: "Average Detection Time",
    description: "Rapid incident detection using satellites and sensor fusion.",
    color: "text-orange-400",
  },
  {
    icon: Ship,
    value: "1,200+",
    label: "Simulated Response Missions",
    description: "Operational scenarios executed for preparedness.",
    color: "text-sky-400",
  },
  {
    icon: Globe2,
    value: "24 × 7",
    label: "National Monitoring",
    description: "Always-on surveillance powered by AI and remote sensing.",
    color: "text-green-400",
  },
];

export default function HeroImpact() {
  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-cyan-400 text-sm"
        >
          National Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black mt-5"
        >
          Protecting India's Blue Economy
        </motion.h2>

        <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
          DeepSea Guardian combines Artificial Intelligence,
          satellite intelligence and environmental analytics
          to enable faster and smarter marine protection.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {impacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                relative
                glass
                rounded-3xl
                p-8
                overflow-hidden
                border
                border-cyan-500/10
                hover:border-cyan-400/40
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-36
                  h-36
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />

              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                "
              >

                <Icon
                  size={30}
                  className={item.color}
                />

              </div>

              {/* Value */}

              <h2
                className={`text-5xl font-black mt-8 ${item.color}`}
              >
                {item.value}
              </h2>

              {/* Label */}

              <h3 className="text-xl font-bold mt-5">
                {item.label}
              </h3>

              {/* Description */}

              <p className="text-slate-400 mt-4 leading-7">
                {item.description}
              </p>

              {/* Bottom */}

              <div className="mt-8 flex justify-between items-center">

                <span className="text-green-400 text-sm">

                  Operational Impact

                </span>

                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}