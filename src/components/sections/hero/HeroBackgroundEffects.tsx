import { motion } from "framer-motion";

export default function HeroBackgroundEffects() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Ocean Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-72
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[-200px]
          top-[200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[-200px]
          bottom-[150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[150px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-slate-950
        "
      />
    </>
  );
}