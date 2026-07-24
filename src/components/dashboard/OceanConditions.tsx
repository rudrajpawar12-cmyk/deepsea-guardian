import { motion } from "framer-motion";
import {
  Thermometer,
  Waves,
  Wind,
  RefreshCw,
} from "lucide-react";

import { useOceanData } from "../../hooks/useOceanData";

export default function OceanConditions() {
  const { data, loading, refresh } = useOceanData();

  const cards = [
    {
      title: "Water Temperature",
      value: `${data.temperature.toFixed(1)} °C`,
      icon: <Thermometer className="text-red-400" size={24} />,
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Wave Height",
      value: `${data.waveHeight.toFixed(2)} m`,
      icon: <Waves className="text-cyan-400" size={24} />,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Wind Speed",
      value: `${data.windSpeed.toFixed(1)} km/h`,
      icon: <Wind className="text-green-400" size={24} />,
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            🌊 Live Ocean Conditions
          </h2>

          <p className="text-slate-400 mt-1">
            Real-time marine data powered by Open-Meteo
          </p>

        </div>

        <button
          onClick={refresh}
          disabled={loading}
          className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-3 transition"
        >
          <RefreshCw
            size={18}
            className={loading ? "animate-spin" : ""}
          />
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {cards.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className={`rounded-2xl bg-gradient-to-br ${card.color} border border-white/10 p-6`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-400 text-sm">
                  {card.title}
                </p>

                <h3 className="text-3xl font-black mt-3">
                  {loading ? "--" : card.value}
                </h3>

              </div>

              <div className="w-14 h-14 rounded-xl bg-slate-900/70 flex items-center justify-center">
                {card.icon}
              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-between items-center">

        <div className="flex items-center gap-2 text-green-400">

          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm">
            Live API Connected
          </span>

        </div>

        <p className="text-xs text-slate-500">
          Updates every 5 minutes
        </p>

      </div>

    </motion.div>
  );
}