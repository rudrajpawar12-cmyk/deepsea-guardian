import { motion } from "framer-motion";
import {
  Globe2,
  ChevronDown,
  MapPinned,
} from "lucide-react";
import { useState } from "react";

const regions = [
  {
    name: "Arabian Sea",
    status: "Critical",
    color: "text-red-400",
  },
  {
    name: "Bay of Bengal",
    status: "High",
    color: "text-orange-400",
  },
  {
    name: "West Coast",
    status: "Moderate",
    color: "text-yellow-400",
  },
  {
    name: "East Coast",
    status: "Low",
    color: "text-green-400",
  },
  {
    name: "Lakshadweep",
    status: "Protected",
    color: "text-cyan-400",
  },
  {
    name: "Andaman & Nicobar",
    status: "Monitoring",
    color: "text-cyan-400",
  },
];

export default function RegionSelector() {
  const [selected, setSelected] = useState(regions[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex justify-between items-center mb-6">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Monitoring Zone
          </p>

          <h2 className="text-2xl font-black mt-2">
            National Region Selector
          </h2>

        </div>

        <Globe2
          className="text-cyan-400"
          size={30}
        />

      </div>

      <div className="space-y-4">

        {regions.map((region) => (

          <motion.button
            key={region.name}
            whileHover={{
              x: 6,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => setSelected(region)}
            className={`w-full rounded-2xl border p-5 transition-all text-left ${
              selected.name === region.name
                ? "border-cyan-500 bg-cyan-500/10"
                : "border-slate-700 bg-slate-900 hover:border-cyan-500/40"
            }`}
          >

            <div className="flex justify-between items-center">

              <div className="flex gap-3 items-center">

                <MapPinned
                  className="text-cyan-400"
                  size={20}
                />

                <div>

                  <h3 className="font-bold">
                    {region.name}
                  </h3>

                  <p className={`text-sm ${region.color}`}>
                    {region.status}
                  </p>

                </div>

              </div>

              <ChevronDown
                size={20}
                className="text-slate-500"
              />

            </div>

          </motion.button>

        ))}

      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="font-bold">
          Active Monitoring Region
        </h3>

        <h1 className="text-4xl font-black mt-3 text-cyan-400">
          {selected.name}
        </h1>

        <p className="text-slate-400 mt-3 leading-7">

          AI Decision Support, GIS monitoring,
          incident reports and cleanup operations
          will synchronize with this selected
          marine region.

        </p>

      </div>

    </motion.section>
  );
}