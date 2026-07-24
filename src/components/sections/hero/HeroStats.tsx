import { motion } from "framer-motion";
import {
  Globe2,
  Satellite,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "7,517 km",
    title: "Coastline Monitored",
    color: "text-cyan-400",
  },
  {
    icon: Satellite,
    value: "12",
    title: "Satellites Online",
    color: "text-blue-400",
  },
  {
    icon: BrainCircuit,
    value: "96%",
    title: "AI Prediction Accuracy",
    color: "text-purple-400",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "National Monitoring",
    color: "text-green-400",
  },
];

export default function HeroStats() {
  return (
    <section className="relative mt-24">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              glass
              rounded-3xl
              p-7
              border
              border-cyan-500/10
              relative
              overflow-hidden
              "
            >

              {/* Glow */}

              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center">

                <Icon
                  size={30}
                  className={item.color}
                />

              </div>

              {/* Number */}

              <h2 className={`text-4xl font-black mt-8 ${item.color}`}>

                {item.value}

              </h2>

              {/* Title */}

              <p className="mt-3 text-slate-400 leading-7">

                {item.title}

              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}