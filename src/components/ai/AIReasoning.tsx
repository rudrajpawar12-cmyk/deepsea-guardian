import { motion } from "framer-motion";
import {
  BrainCircuit,
  Satellite,
  Waves,
 Wind,
  ThermometerSun,
  Sparkles,
} from "lucide-react";

import { useCommandCenter } from "../../context/CommandCenterContext";

export default function AIReasoning() {
  const { selectedIncident } = useCommandCenter();

  const incident =
    selectedIncident ??
    {
      title: "Mumbai Oil Spill",
      severity: "Critical",
      location: "Mumbai Coast",
    };

  const reasoning =
    incident.severity === "Critical"
      ? [
          "Satellite imagery confirms rapid pollutant expansion.",
          "Ocean currents are transporting contaminants north-east.",
          "Wind velocity increases spread probability by 34%.",
          "Nearby fishing zones may be impacted within 3 hours.",
          "Immediate deployment is strongly recommended.",
        ]
      : incident.severity === "High"
      ? [
          "Environmental indicators exceed normal thresholds.",
          "Spread remains localized but expanding slowly.",
          "Weather conditions may accelerate contamination.",
          "Continuous satellite monitoring is advised.",
          "Response teams should remain on standby.",
        ]
      : [
          "Current environmental impact is limited.",
          "No immediate escalation detected.",
          "Continue monitoring through satellite feeds.",
          "Collect additional water quality samples.",
          "Reassess conditions every 30 minutes.",
        ];

  return (
    <div className="glass rounded-3xl border border-violet-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-violet-400 text-xs">

            GEMINI AI

          </p>

          <h2 className="text-3xl font-black mt-3">

            AI Reasoning Engine

          </h2>

        </div>

        <BrainCircuit
          size={40}
          className="text-violet-400"
        />

      </div>

      {/* Incident */}

      <div className="p-8">

        <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-6">

          <p className="text-slate-400 text-sm">

            Active Analysis

          </p>

          <h2 className="text-2xl font-bold mt-2">

            {incident.title}

          </h2>

          <p className="text-cyan-400 mt-2">

            {incident.location}

          </p>

        </div>

        {/* Sensors */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <Sensor
            icon={<Satellite className="text-cyan-400" />}
            title="Satellite"
            value="Live Imagery Synced"
          />

          <Sensor
            icon={<Waves className="text-blue-400" />}
            title="Ocean Current"
            value="North-East Drift"
          />

          <Sensor
            icon={<Wind className="text-green-400" />}
            title="Wind Speed"
            value="22 km/h"
          />

          <Sensor
            icon={<ThermometerSun className="text-orange-400" />}
            title="Water Temp"
            value="31°C"
          />

        </div>

        {/* AI Reasoning */}

        <div className="mt-10">

          <div className="flex items-center gap-3 mb-6">

            <Sparkles
              className="text-violet-400"
              size={22}
            />

            <h3 className="font-bold text-xl">

              AI Reasoning

            </h3>

          </div>

          <div className="space-y-4">

            {reasoning.map((point, index) => (

              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                rounded-2xl
                bg-slate-900/60
                border
                border-white/5
                p-5
                flex
                gap-4
                "
              >

                <div className="w-3 h-3 rounded-full bg-violet-400 mt-2" />

                <p className="leading-7 text-slate-300">

                  {point}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

function Sensor({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-5">

      <div className="flex items-center gap-4">

        {icon}

        <div>

          <p className="text-slate-500 text-sm">

            {title}

          </p>

          <h3 className="font-semibold mt-2">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}