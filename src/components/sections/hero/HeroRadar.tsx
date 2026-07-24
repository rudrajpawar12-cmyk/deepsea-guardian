import { motion } from "framer-motion";

export default function HeroRadar() {
  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute right-[-250px] top-16 w-[820px] h-[820px]"
      >
        <div className="absolute inset-0 rounded-full border border-cyan-500/10" />

        <div className="absolute inset-[70px] rounded-full border border-cyan-500/10" />

        <div className="absolute inset-[140px] rounded-full border border-cyan-500/10" />

        <div className="absolute inset-[210px] rounded-full border border-cyan-500/10" />

        <div className="absolute inset-[280px] rounded-full border border-cyan-500/10" />
      </motion.div>

      {/* Radar Sweep */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="
        absolute
        right-[-250px]
        top-16
        w-[820px]
        h-[820px]
        "
      >
        <div
          className="
          absolute
          left-1/2
          top-1/2
          w-[2px]
          h-[390px]
          origin-bottom
          bg-gradient-to-t
          from-cyan-400
          via-cyan-300
          to-transparent
          shadow-[0_0_30px_#22d3ee]
          "
        />
      </motion.div>

      {/* Radar Center */}

      <div
        className="
        absolute
        right-[145px]
        top-[410px]
        w-5
        h-5
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_#22d3ee]
        animate-pulse
        "
      />

      {/* Scanning Pulse */}

      <motion.div
        animate={{
          scale: [0.2, 1.1],
          opacity: [1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        right-[120px]
        top-[385px]
        w-16
        h-16
        rounded-full
        border
        border-cyan-400
        "
      />

      <motion.div
        animate={{
          scale: [0.2, 1.4],
          opacity: [1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        absolute
        right-[95px]
        top-[360px]
        w-28
        h-28
        rounded-full
        border
        border-cyan-400/50
        "
      />
    </>
  );
}