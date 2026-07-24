import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  RotateCcw,
  Waves,
  AlertTriangle,
  BrainCircuit,
  Ship,
  CheckCircle2,
} from "lucide-react";

export default function SimulationPanel() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startSimulation = () => {
    if (running) return;

    setRunning(true);
    setProgress(0);

    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setRunning(false);
      }
    }, 60);
  };

  const reset = () => {
    setRunning(false);
    setProgress(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-8"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">

            Emergency Simulation

          </p>

          <h2 className="text-4xl font-black mt-3">

            Pollution Event Simulator

          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl">

            Demonstrate AI-driven emergency response
            workflow for national marine pollution incidents.

          </p>

        </div>

        <div className="text-right">

          <p className="text-slate-400 text-sm">

            Simulation Status

          </p>

          <h2
            className={`text-3xl font-black mt-2 ${
              running
                ? "text-green-400"
                : "text-slate-400"
            }`}
          >
            {running ? "RUNNING" : "READY"}
          </h2>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-10">

        {/* LEFT */}

        <div className="space-y-5">

          <div className="rounded-2xl bg-slate-900 p-5">

            <div className="flex items-center gap-3">

              <Waves className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">

                  Event Type

                </h3>

                <p className="text-slate-400">

                  Plastic Waste Accumulation

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-slate-900 p-5">

            <div className="flex items-center gap-3">

              <AlertTriangle className="text-red-400" />

              <div>

                <h3 className="font-semibold">

                  Severity

                </h3>

                <p className="text-red-400 font-bold">

                  CRITICAL

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-slate-900 p-5">

            <div className="flex items-center gap-3">

              <BrainCircuit className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">

                  AI Engine

                </h3>

                <p className="text-slate-400">

                  Gemini Decision Support

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="mb-8">

            <div className="flex justify-between mb-3">

              <span>Simulation Progress</span>

              <span>{progress}%</span>

            </div>

            <div className="w-full h-4 rounded-full bg-slate-800">

              <motion.div
                className="h-4 rounded-full bg-cyan-400"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

          <div className="space-y-4">

            <Stage
              icon={<Waves />}
              title="Ocean Monitoring"
              active={progress >= 20}
            />

            <Stage
              icon={<BrainCircuit />}
              title="AI Risk Assessment"
              active={progress >= 40}
            />

            <Stage
              icon={<AlertTriangle />}
              title="Incident Generated"
              active={progress >= 60}
            />

            <Stage
              icon={<Ship />}
              title="Cleanup Fleet Deployed"
              active={progress >= 80}
            />

            <Stage
              icon={<CheckCircle2 />}
              title="Mission Active"
              active={progress >= 100}
            />

          </div>

          <div className="flex gap-4 mt-10">

            <button
              onClick={startSimulation}
              className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3"
            >
              <Play size={20} />

              Launch Simulation

            </button>

            <button
              onClick={reset}
              className="px-6 rounded-2xl border border-slate-700 hover:border-cyan-400"
            >
              <RotateCcw />
            </button>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

function Stage({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  active: boolean;
}) {
  return (
    <motion.div
      animate={{
        opacity: active ? 1 : 0.35,
        scale: active ? 1 : 0.98,
      }}
      className={`rounded-2xl p-4 border ${
        active
          ? "border-green-500 bg-green-500/10"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      <div className="flex items-center gap-4">

        {icon}

        <span className="font-semibold">

          {title}

        </span>

      </div>

    </motion.div>
  );
}