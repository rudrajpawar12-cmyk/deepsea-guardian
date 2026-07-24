import { motion } from "framer-motion";
import {
  History,
  Clock3,
  BrainCircuit,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const history = [
  {
    time: "09:42",
    incident: "Mumbai Oil Spill",
    confidence: "98%",
    status: "Critical",
  },
  {
    time: "08:30",
    incident: "Goa Chemical Leakage",
    confidence: "91%",
    status: "High",
  },
  {
    time: "07:15",
    incident: "Arabian Sea Plastic Accumulation",
    confidence: "95%",
    status: "High",
  },
  {
    time: "06:10",
    incident: "Andaman Floating Debris",
    confidence: "88%",
    status: "Monitoring",
  },
];

export default function AIAnalysisHistory() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">
            AI LOGS
          </p>

          <h2 className="text-3xl font-black mt-3">
            Analysis History
          </h2>

        </div>

        <History
          size={36}
          className="text-cyan-400"
        />

      </div>

      {/* Timeline */}

      <div className="p-8 space-y-6">

        {history.map((item, index) => (

          <motion.div
            key={item.time}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            p-6
            "
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-bold text-lg">

                  {item.incident}

                </h3>

                <div className="flex items-center gap-2 mt-3 text-slate-400">

                  <Clock3 size={16} />

                  {item.time}

                </div>

              </div>

              <span
                className={`
                px-3
                py-1
                rounded-full
                text-xs
                font-bold

                ${
                  item.status === "Critical"
                    ? "bg-red-500/20 text-red-400"
                    : item.status === "High"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-green-500/20 text-green-400"
                }
                `}
              >
                {item.status}
              </span>

            </div>

            {/* Footer */}

            <div className="mt-6 flex justify-between items-center">

              <div className="flex items-center gap-2">

                <BrainCircuit
                  className="text-violet-400"
                  size={18}
                />

                <span className="text-slate-300">

                  Confidence

                </span>

              </div>

              <span className="font-bold text-violet-400">

                {item.confidence}

              </span>

            </div>

            <div className="mt-5 flex items-center gap-2 text-green-400">

              <CheckCircle2 size={18} />

              Analysis Completed Successfully

            </div>

          </motion.div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6 flex items-center justify-center gap-3 text-cyan-400">

        <AlertTriangle size={18} />

        AI Engine continuously evaluates incoming satellite data.

      </div>

    </div>
  );
}