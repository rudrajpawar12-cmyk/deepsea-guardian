import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Map,
  BrainCircuit,
  ChartColumn,
  Bell,
  Waves,
  Activity,
  Menu,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "map",
    title: "Ocean Map",
    icon: Map,
  },
  {
    id: "ai",
    title: "AI Copilot",
    icon: BrainCircuit,
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: ChartColumn,
  },
  {
    id: "alerts",
    title: "Alerts",
    icon: Bell,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMobileOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}

      <div className="flex items-center gap-4 mb-12">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center animate-glow">

          <Waves
            className="text-cyan-400"
            size={30}
          />

        </div>

        <div>

          <h2 className="text-xl font-black">
            DeepSea
          </h2>

          <p className="text-cyan-400 text-sm">
            Guardian
          </p>

        </div>

      </div>

      {/* Menu */}

      <nav className="space-y-2 flex-1">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                active === item.id
                  ? "bg-cyan-500/20 border border-cyan-400/20 text-cyan-300"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </button>
          );
        })}

      </nav>

      {/* Status */}

      <div className="glass rounded-3xl p-5 mt-10">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">

            <Activity
              className="text-green-400"
              size={20}
            />

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              AI Status
            </p>

            <h3 className="text-green-400 font-bold">
              ONLINE
            </h3>

          </div>

        </div>

        <div className="mt-5 space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-slate-400">
              Oceans
            </span>

            <span>3</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Sensors
            </span>

            <span>128</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Accuracy
            </span>

            <span className="text-cyan-400">
              97.2%
            </span>
          </div>

        </div>

      </div>
    </>
  );

  return (
    <>
      {/* Desktop */}

      <aside className="hidden lg:flex flex-col w-72 min-h-screen glass border-r border-white/10 px-6 py-8 sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Button */}

      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 glass p-3 rounded-xl"
      >
        <Menu />
      </button>

      {/* Mobile Drawer */}

      <AnimatePresence>

        {mobileOpen && (

          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 h-screen w-72 glass p-6 z-50 flex flex-col"
            >

              <button
                className="self-end mb-6"
                onClick={() => setMobileOpen(false)}
              >
                <X />
              </button>

              <SidebarContent />

            </motion.aside>

          </>

        )}

      </AnimatePresence>
    </>
  );
}