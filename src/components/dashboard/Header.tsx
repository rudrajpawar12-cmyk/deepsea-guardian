import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Activity,
} from "lucide-react";

export default function Header() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-10"
    >
      {/* Left */}

      <div>

        <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
          DeepSea Guardian
        </p>

        <h1 className="text-5xl font-black mt-2">
          {greeting}, Rudraj 👋
        </h1>

        <p className="text-slate-400 mt-3 max-w-2xl leading-7">
          Welcome back. Your AI-powered ocean monitoring system
          is actively tracking marine pollution, ecosystem health,
          and environmental risks across monitored regions.
        </p>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}

        <div className="glass flex items-center gap-3 px-5 py-3 rounded-2xl min-w-[280px]">

          <Search
            className="text-slate-400"
            size={18}
          />

          <input
            placeholder="Search dashboard..."
            className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-500"
          />

        </div>

        {/* Notifications */}

        <button className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover-lift">

          <Bell
            className="text-cyan-400"
            size={22}
          />

        </button>

        {/* Status */}

        <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <div>

            <p className="text-xs text-slate-400">
              AI Status
            </p>

            <h3 className="text-green-400 font-semibold">
              ONLINE
            </h3>

          </div>

        </div>

        {/* Avatar */}

        <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-black">
            R
          </div>

          <div>

            <p className="font-semibold">
              Rudraj
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>
    </motion.header>
  );
}