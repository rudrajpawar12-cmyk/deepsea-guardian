import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
  Satellite,
  Waves,
  CloudSun,
  ArrowRight,
  RadioTower,
  Clock3,
  MapPinned,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function MissionBriefing() {
  const navigate = useNavigate();

  const { officer } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div
          className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:70px_70px]
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-12">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-12"
        >

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">

            Government of India

          </p>

          <h1 className="text-5xl font-black mt-4">

            National Mission Briefing

          </h1>

          <p className="text-slate-400 mt-5 max-w-3xl leading-8">

            Officer authentication successful.
            National Marine Intelligence Network synchronized.
            Review today's operational briefing before entering
            the Command Center.

          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid xl:grid-cols-12 gap-8">

          {/* Left */}

          <div className="xl:col-span-8 space-y-8">

            {/* Officer */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .1,
              }}
              className="glass rounded-3xl p-8"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">

                    Officer Profile

                  </p>

                  <h2 className="text-4xl font-black mt-5">

                    {officer?.name || "Officer"}

                  </h2>

                  <p className="text-slate-400 mt-4">

                    {officer?.role}

                  </p>

                  <p className="text-slate-500 mt-2">

                    {officer?.agency}

                  </p>

                </div>

                <div className="text-right">

                  <div className="inline-flex items-center gap-3 rounded-full bg-green-500/10 border border-green-500/30 px-5 py-2">

                    <ShieldCheck className="text-green-400" />

                    VERIFIED

                  </div>

                  <p className="mt-5 text-cyan-400">

                    Clearance {officer?.clearance}

                  </p>

                </div>

              </div>

            </motion.div>

            {/* Mission */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .2,
              }}
              className="glass rounded-3xl p-8"
            >

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

                Today's Mission

              </p>

              <h2 className="text-4xl font-black mt-5">

                Arabian Sea Surveillance

              </h2>

              <p className="text-slate-400 mt-5 leading-8">

                Monitor high-risk marine pollution zones,
                validate satellite anomalies,
                coordinate AI analysis and prepare
                emergency response if required.

              </p>

            </motion.div>
                        {/* Mission Status */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .3,
              }}
              className="grid md:grid-cols-2 gap-6"
            >

              <StatusCard
                icon={<AlertTriangle className="text-red-400" />}
                title="Threat Level"
                value="HIGH"
                color="text-red-400"
              />

              <StatusCard
                icon={<BrainCircuit className="text-violet-400" />}
                title="Gemini AI"
                value="ONLINE"
                color="text-violet-400"
              />

              <StatusCard
                icon={<Satellite className="text-cyan-400" />}
                title="Satellite Network"
                value="CONNECTED"
                color="text-cyan-400"
              />

              <StatusCard
                icon={<RadioTower className="text-green-400" />}
                title="Sensor Grid"
                value="ACTIVE"
                color="text-green-400"
              />

            </motion.div>

          </div>

          {/* ================= RIGHT PANEL ================= */}

          <div className="xl:col-span-4">

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: .35,
              }}
              className="glass rounded-3xl p-8 sticky top-10"
            >

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

                Live Environment

              </p>

              <div className="space-y-6 mt-8">

                <InfoRow
                  icon={<CloudSun className="text-yellow-400" />}
                  label="Weather"
                  value="Moderate"
                />

                <InfoRow
                  icon={<Waves className="text-blue-400" />}
                  label="Ocean Current"
                  value="South-West"
                />

                <InfoRow
                  icon={<MapPinned className="text-cyan-400" />}
                  label="Critical Incidents"
                  value="04 Active"
                />

                <InfoRow
                  icon={<Clock3 className="text-green-400" />}
                  label="Response Time"
                  value="4 Minutes"
                />

              </div>

              {/* Divider */}

              <div className="my-10 border-t border-white/10" />

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .98,
                }}
                onClick={() => navigate("/dashboard")}
                className="
                w-full
                bg-cyan-400
                hover:bg-cyan-300
                transition-all
                text-slate-950
                rounded-2xl
                py-5
                font-bold
                flex
                justify-center
                items-center
                gap-3
                shadow-lg
                shadow-cyan-500/30
                "
              >

                Enter Command Center

                <ArrowRight />

              </motion.button>

              <p className="text-center text-slate-500 text-sm mt-5">

                Secure Government Session Established

              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* ========================================================= */

function StatusCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="glass rounded-3xl p-6">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center">

          {icon}

        </div>

        <div>

          <p className="text-slate-400 text-sm">

            {title}

          </p>

          <h3 className={`text-2xl font-bold mt-1 ${color}`}>

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}

/* ========================================================= */

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-4">

        {icon}

        <span>

          {label}

        </span>

      </div>

      <span className="text-cyan-400 font-semibold">

        {value}

      </span>

    </div>
  );
}