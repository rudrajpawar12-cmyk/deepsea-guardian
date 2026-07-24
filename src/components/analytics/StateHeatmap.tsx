import { motion } from "framer-motion";
import {
  Map,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const states = [
  {
    state: "Maharashtra",
    risk: "Critical",
    incidents: 8,
    score: 98,
    color: "bg-red-500",
    text: "text-red-400",
  },
  {
    state: "Gujarat",
    risk: "High",
    incidents: 6,
    score: 89,
    color: "bg-orange-500",
    text: "text-orange-400",
  },
  {
    state: "Goa",
    risk: "Moderate",
    incidents: 3,
    score: 68,
    color: "bg-yellow-500",
    text: "text-yellow-400",
  },
  {
    state: "Tamil Nadu",
    risk: "Low",
    incidents: 1,
    score: 34,
    color: "bg-green-500",
    text: "text-green-400",
  },
  {
    state: "Kerala",
    risk: "Low",
    incidents: 2,
    score: 40,
    color: "bg-green-500",
    text: "text-green-400",
  },
];

export default function StateHeatmap() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between">

        <div>

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

            NATIONAL HEATMAP

          </p>

          <h2 className="text-3xl font-black mt-3">

            Coastal Risk Overview

          </h2>

        </div>

        <Map
          className="text-cyan-400"
          size={38}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-8 p-8">

        {/* Left */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 h-[500px] flex items-center justify-center relative overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.15),transparent_70%)]" />

          <div className="relative text-center">

            <Map
              size={150}
              className="text-cyan-400 mx-auto"
            />

            <h3 className="text-2xl font-bold mt-8">

              Interactive India Heatmap

            </h3>

            <p className="text-slate-400 mt-4 max-w-sm">

              Next version will display the real
              India coastline with AI-generated
              pollution intensity overlays.

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-5">

          {states.map((state, index) => (

            <motion.div
              key={state.state}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              className="
              rounded-2xl
              bg-slate-900/60
              border
              border-white/10
              p-5
              "
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="font-bold text-xl">

                    {state.state}

                  </h3>

                  <p className="text-slate-400 mt-2">

                    {state.incidents} Active Incidents

                  </p>

                </div>

                <div className="text-right">

                  <span className={`${state.text} font-bold`}>

                    {state.risk}

                  </span>

                  <h2 className="text-3xl font-black mt-2">

                    {state.score}

                  </h2>

                </div>

              </div>

              <div className="mt-6 h-3 bg-slate-800 rounded-full overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${state.score}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className={`h-full ${state.color}`}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      <div className="border-t border-white/10 p-6 grid grid-cols-3 gap-6">

        <Legend
          color="bg-red-500"
          label="Critical"
        />

        <Legend
          color="bg-orange-500"
          label="High Risk"
        />

        <Legend
          color="bg-green-500"
          label="Low Risk"
        />

      </div>

    </div>
  );
}

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <span
        className={`w-4 h-4 rounded-full ${color}`}
      />

      <span>{label}</span>

    </div>
  );
}