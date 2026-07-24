import { motion } from "framer-motion";
import {
  Satellite,
  BrainCircuit,
  ShieldAlert,
  Ship,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const operations = [
  {
    id: 1,
    time: "09:18 IST",
    title: "Satellite Anomaly Detected",
    description:
      "Remote sensing imagery identified abnormal floating debris concentration in the Arabian Sea.",
    icon: Satellite,
    color: "text-cyan-400",
  },
  {
    id: 2,
    time: "09:24 IST",
    title: "AI Risk Assessment Completed",
    description:
      "DeepSea Guardian AI classified the anomaly as a high-confidence pollution event.",
    icon: BrainCircuit,
    color: "text-purple-400",
  },
  {
    id: 3,
    time: "09:31 IST",
    title: "Incident Created",
    description:
      "Incident DG-2026-0001 registered and escalated to the National Marine Pollution Command Center.",
    icon: ShieldAlert,
    color: "text-red-400",
  },
  {
    id: 4,
    time: "09:42 IST",
    title: "Cleanup Mission Assigned",
    description:
      "Western Coast Guard and Marine Pollution Response Team deployed.",
    icon: Ship,
    color: "text-green-400",
  },
  {
    id: 5,
    time: "Estimated 18 hrs",
    title: "Mission Completion Forecast",
    description:
      "AI predicts pollution containment within 18 hours with 94% confidence.",
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
];

export default function OperationsTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black">
            National Operations Timeline
          </h2>

          <p className="text-slate-400 mt-2">
            Complete operational history of the currently active marine pollution response.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">

          <Clock3
            size={18}
            className="text-cyan-400"
          />

          <span className="text-cyan-400 font-semibold">
            LIVE TRACKING
          </span>

        </div>

      </div>

      {/* Timeline */}

      <div className="relative border-l-2 border-cyan-500/30 ml-5">

        {operations.map((step, index) => {

          const Icon = step.icon;

          return (

            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="relative mb-10 ml-10"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[53px] w-10 h-10 rounded-full bg-slate-900 border border-cyan-500 flex items-center justify-center">

                <Icon
                  size={20}
                  className={step.color}
                />

              </div>

              {/* Card */}

              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">

                <div className="flex justify-between items-center mb-3">

                  <h3 className="font-bold text-lg">
                    {step.title}
                  </h3>

                  <span className="text-cyan-400 text-sm font-semibold">
                    {step.time}
                  </span>

                </div>

                <p className="text-slate-400 leading-7">
                  {step.description}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 p-5">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-bold">
              Current Operational Status
            </h3>

            <p className="text-slate-400 mt-2">
              Cleanup mission is currently active. AI predicts successful containment if response continues according to plan.
            </p>

          </div>

          <div className="text-right">

            <h1 className="text-5xl font-black text-green-400">
              72%
            </h1>

            <p className="text-slate-400">
              Mission Progress
            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}