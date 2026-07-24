import { motion } from "framer-motion";
import {
  AlertTriangle,
  Waves,
  Wind,
  ThermometerSun,
  TrendingUp,
  Target,
} from "lucide-react";

import { useCommandCenter } from "../../context/CommandCenterContext";

export default function AIRiskGauge() {
  const { selectedIncident } = useCommandCenter();

  const incident =
    selectedIncident ??
    {
      title: "Mumbai Oil Spill",
      severity: "Critical",
      location: "Mumbai Coast",
    };

  return (
    <div className="glass rounded-3xl border border-red-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-red-400 text-xs">

            AI RISK ENGINE

          </p>

          <h2 className="text-3xl font-black mt-3">

            Threat Assessment

          </h2>

        </div>

        <AlertTriangle
          className="text-red-400"
          size={40}
        />

      </div>

      {/* Selected Incident */}

      <div className="p-8">

        <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-6">

          <p className="text-slate-400 text-sm">

            Selected Incident

          </p>

          <h2 className="text-2xl font-bold mt-2">

            {incident.title}

          </h2>

          <p className="text-cyan-400 mt-2">

            {incident.location}

          </p>

        </div>

        {/* Main Gauge */}

        <div className="mt-10 text-center">

          <motion.div
            initial={{
              scale: .8,
            }}
            animate={{
              scale: 1,
            }}
            className="
            w-48
            h-48
            rounded-full
            border-[14px]
            border-red-500
            mx-auto
            flex
            flex-col
            items-center
            justify-center
            bg-red-500/10
            shadow-[0_0_80px_rgba(239,68,68,0.25)]
            "
          >

            <h1 className="text-6xl font-black text-red-400">

              98%

            </h1>

            <p className="text-slate-400 mt-2">

              Risk Score

            </p>

          </motion.div>

        </div>

        {/* Metrics */}

        <div className="grid md:grid-cols-2 gap-5 mt-12">

          <Metric
            icon={<Waves className="text-cyan-400" />}
            label="Spread Radius"
            value="28 km²"
          />

          <Metric
            icon={<Wind className="text-blue-400" />}
            label="Wind Impact"
            value="High"
          />

          <Metric
            icon={<ThermometerSun className="text-orange-400" />}
            label="Water Temp"
            value="31°C"
          />

          <Metric
            icon={<TrendingUp className="text-green-400" />}
            label="Growth Rate"
            value="+14%"
          />

        </div>

        {/* AI Prediction */}

        <div className="mt-10 rounded-2xl bg-red-500/10 border border-red-500/20 p-6">

          <div className="flex gap-4">

            <Target
              className="text-red-400 mt-1"
              size={24}
            />

            <div>

              <h3 className="font-bold text-lg">

                AI Prediction

              </h3>

              <p className="text-slate-300 leading-8 mt-3">

                Without intervention,
                pollution is expected to
                expand toward the
                north-east coastline within
                the next <b>3 hours</b>.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-5">

      <div className="flex items-center gap-4">

        {icon}

        <div>

          <p className="text-slate-500 text-sm">

            {label}

          </p>

          <h3 className="font-bold mt-2">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}