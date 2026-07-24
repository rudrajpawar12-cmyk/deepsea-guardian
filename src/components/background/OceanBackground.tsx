import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => i);

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

      {/* Top Glow */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[170px]"
      />

      {/* Floating Particles */}

      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute rounded-full bg-cyan-300/30"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
}