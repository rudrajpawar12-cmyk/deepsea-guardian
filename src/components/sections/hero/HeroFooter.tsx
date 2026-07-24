import { motion } from "framer-motion";
import {
  ShieldCheck,
  Satellite,
  BrainCircuit,
  Globe2,
  Lock,
  Activity,
} from "lucide-react";

const quickLinks = [
  "Mission Overview",
  "Technology",
  "Government Partners",
  "Impact",
  "Command Center",
];

const systems = [
  {
    icon: Satellite,
    title: "Satellite Network",
    status: "ONLINE",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "Gemini AI",
    status: "ACTIVE",
    color: "text-violet-400",
  },
  {
    icon: Globe2,
    title: "GIS Engine",
    status: "CONNECTED",
    color: "text-blue-400",
  },
  {
    icon: Lock,
    title: "Security Layer",
    status: "SECURED",
    color: "text-green-400",
  },
];

export default function HeroFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-slate-950">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* ================================= */}

          {/* Left */}

          {/* ================================= */}

          <div>

            <div className="flex items-center gap-3">

              <ShieldCheck
                className="text-cyan-400"
                size={32}
              />

              <div>

                <h2 className="text-3xl font-black">

                  DeepSea Guardian

                </h2>

                <p className="text-cyan-400 text-sm">

                  Government Command Platform

                </p>

              </div>

            </div>

            <p className="mt-8 text-slate-400 leading-8">

              AI-powered marine intelligence platform
              built for national environmental protection,
              rapid response and government decision support.

            </p>

            <div className="mt-10 flex items-center gap-3">

              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-green-400">

                National Monitoring Active

              </span>

            </div>

          </div>

          {/* ================================= */}

          {/* Quick Links */}

          {/* ================================= */}

          <div>

            <h3 className="text-xl font-bold">

              Quick Navigation

            </h3>

            <div className="mt-8 space-y-4">

              {quickLinks.map((link) => (

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  key={link}
                  className="text-slate-400 hover:text-cyan-400 transition-all cursor-pointer"
                >

                  {link}

                </motion.div>

              ))}

            </div>

          </div>

          {/* ================================= */}

          {/* Systems */}

          {/* ================================= */}

          <div>

            <h3 className="text-xl font-bold">

              National Systems

            </h3>

            <div className="mt-8 space-y-5">

              {systems.map((system) => {
                const Icon = system.icon;

                return (

                  <motion.div
                    key={system.title}
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="
                    glass
                    rounded-2xl
                    p-4
                    flex
                    justify-between
                    items-center
                    "
                  >

                    <div className="flex items-center gap-4">

                      <Icon
                        className={system.color}
                        size={22}
                      />

                      <span>

                        {system.title}

                      </span>

                    </div>

                    <span className={`${system.color} font-semibold`}>

                      {system.status}

                    </span>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="text-slate-500 text-sm">

            © 2026 Government of India • DeepSea Guardian

          </div>

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">

              <Activity
                size={16}
                className="text-green-400"
              />

              <span className="text-green-400 text-sm">

                Operational

              </span>

            </div>

            <div className="text-slate-500 text-sm">

              Version 2.0.1

            </div>

            <div className="text-cyan-400 text-sm">

              Security Level V

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}