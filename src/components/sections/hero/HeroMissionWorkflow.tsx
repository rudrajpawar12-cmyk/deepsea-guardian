import { motion } from "framer-motion";
import {
  Satellite,
  Waves,
  BrainCircuit,
  Radar,
  ShieldAlert,
  Ship,
  FileText,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    icon: Satellite,
    title: "Satellite Detection",
    desc: "ISRO & remote sensing identify marine anomalies.",
    color: "text-cyan-400",
  },
  {
    icon: Waves,
    title: "Ocean Sensors",
    desc: "Buoys and IoT stations stream environmental data.",
    color: "text-blue-400",
  },
  {
    icon: BrainCircuit,
    title: "Gemini AI",
    desc: "AI analyzes pollution spread and predicts impact.",
    color: "text-purple-400",
  },
  {
    icon: Radar,
    title: "Risk Analysis",
    desc: "Threat zones and affected coastline are calculated.",
    color: "text-yellow-400",
  },
  {
    icon: ShieldAlert,
    title: "Government Alert",
    desc: "Emergency notifications are issued instantly.",
    color: "text-red-400",
  },
  {
    icon: Ship,
    title: "Mission Deployment",
    desc: "Cleanup teams and Coast Guard are dispatched.",
    color: "text-green-400",
  },
  {
    icon: FileText,
    title: "Official Report",
    desc: "Government-ready reports generated automatically.",
    color: "text-cyan-300",
  },
];

export default function HeroMissionWorkflow() {
  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-cyan-400 text-sm"
        >
          Operational Workflow
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black mt-5"
        >
          How DeepSea Guardian Works
        </motion.h2>

        <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
          From satellite detection to government action,
          every stage is automated using artificial intelligence,
          real-time monitoring and decision support.
        </p>

      </div>

      <div className="max-w-6xl mx-auto">

        {workflow.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{
                opacity: 0,
                y: 25,
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
            >
              <div className="glass rounded-3xl p-8 border border-cyan-500/10 hover:border-cyan-400/30 transition-all">

                <div className="flex flex-col lg:flex-row lg:items-center gap-8">

                  <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center">

                    <Icon
                      size={36}
                      className={step.color}
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold">

                      {step.title}

                    </h3>

                    <p className="text-slate-400 mt-3 leading-8">

                      {step.desc}

                    </p>

                  </div>

                  <div className="text-5xl font-black text-slate-700">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                </div>

              </div>

              {index !== workflow.length - 1 && (

                <div className="flex justify-center py-5">

                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >

                    <ArrowDown
                      size={28}
                      className="text-cyan-400"
                    />

                  </motion.div>

                </div>

              )}

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}