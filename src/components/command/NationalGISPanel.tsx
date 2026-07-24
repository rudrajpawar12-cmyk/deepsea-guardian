import { motion } from "framer-motion";
import {
  Globe2,
  Layers3,
  Shield,
  Ship,
  AlertTriangle,
  RadioTower,
} from "lucide-react";

import OceanMap from "../dashboard/OceanMap";

export default function NationalGISPanel() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl overflow-hidden"
    >
      {/* ================= HEADER ================= */}

      <div className="border-b border-slate-800 p-6 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">

            National GIS

          </p>

          <h2 className="text-3xl font-black mt-2">

            Marine Surveillance Network

          </h2>

          <p className="text-slate-400 mt-2">

            Real-time environmental monitoring and operational awareness.

          </p>

        </div>

        <div className="rounded-xl bg-green-500/10 border border-green-500/30 px-5 py-3">

          <span className="text-green-400 font-semibold flex items-center gap-2">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            LIVE SATELLITE FEED

          </span>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="grid xl:grid-cols-12">

        {/* MAP */}

        <div className="xl:col-span-9 h-[700px]">

          <OceanMap />

        </div>

        {/* RIGHT PANEL */}

        <div className="xl:col-span-3 border-l border-slate-800 bg-slate-950/40">

          {/* Layers */}

          <div className="p-6 border-b border-slate-800">

            <div className="flex items-center gap-2 mb-5">

              <Layers3
                className="text-cyan-400"
                size={22}
              />

              <h3 className="font-bold">

                Active Layers

              </h3>

            </div>

            <div className="space-y-4">

              <LayerItem
                color="bg-red-500"
                text="Critical Pollution Zones"
              />

              <LayerItem
                color="bg-orange-500"
                text="Active Incidents"
              />

              <LayerItem
                color="bg-cyan-500"
                text="Cleanup Vessels"
              />

              <LayerItem
                color="bg-green-500"
                text="Protected Marine Areas"
              />

              <LayerItem
                color="bg-purple-500"
                text="Monitoring Stations"
              />

            </div>

          </div>

          {/* Statistics */}

          <div className="p-6 border-b border-slate-800">

            <h3 className="font-bold mb-5">

              National Statistics

            </h3>

            <Stat
              icon={<AlertTriangle size={18} />}
              label="Active Incidents"
              value="17"
            />

            <Stat
              icon={<Ship size={18} />}
              label="Cleanup Missions"
              value="12"
            />

            <Stat
              icon={<Shield size={18} />}
              label="Protected Areas"
              value="31"
            />

            <Stat
              icon={<RadioTower size={18} />}
              label="Sensor Stations"
              value="148"
            />

          </div>

          {/* Region */}

          <div className="p-6">

            <div className="flex gap-2 items-center mb-5">

              <Globe2
                className="text-cyan-400"
                size={22}
              />

              <h3 className="font-bold">

                Current Region

              </h3>

            </div>

            <div className="rounded-2xl bg-slate-900 p-5">

              <h2 className="text-3xl font-black">

                Arabian Sea

              </h2>

              <p className="text-slate-400 mt-3 leading-7">

                High-density monitoring due to
                elevated plastic accumulation and
                increased marine traffic.

              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

function LayerItem({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex gap-3 items-center">

        <span className={`w-3 h-3 rounded-full ${color}`} />

        <span>{text}</span>

      </div>

      <input
        defaultChecked
        type="checkbox"
      />

    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center py-3">

      <div className="flex gap-3 items-center text-slate-300">

        {icon}

        <span>{label}</span>

      </div>

      <span className="font-bold text-cyan-400">

        {value}

      </span>

    </div>
  );
}