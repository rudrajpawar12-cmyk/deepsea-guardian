import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#01040A] via-[#031625] to-[#020817]" />

      {/* Ocean Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        bottom-[-450px]
        -translate-x-1/2
        w-[1700px]
        h-[950px]
        rounded-full
        bg-cyan-500
        blur-[260px]
        "
      />

      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "150px 150px",
          ],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        inset-0
        opacity-20
        bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* Radar Rings */}

      {[1700, 1400, 1100, 800].map((size, index) => (

        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 100 + index * 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-cyan-500/10"
          style={{
            width: size,
            height: size,
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />

      ))}

      {/* Radar Sweep */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        left-1/2
        top-1/2
        w-[1700px]
        h-[1700px]
        -translate-x-1/2
        -translate-y-1/2
        "
      >

        <div
          className="
          absolute
          left-1/2
          top-1/2
          w-[2px]
          h-[850px]
          origin-bottom
          -translate-x-1/2
          -translate-y-full
          bg-gradient-to-t
          from-cyan-400
          via-cyan-400/20
          to-transparent
          "
        />

      </motion.div>

      {/* Sonar Pulse */}

      <motion.div
        animate={{
          scale: [.8, 1.5],
          opacity: [.45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        w-[320px]
        h-[320px]
        rounded-full
        border
        border-cyan-400/20
        -translate-x-1/2
        -translate-y-1/2
        "
      />

      {/* Floating Particles */}

      {Array.from({ length: 40 }).map((_, index) => (

        <motion.div
          key={index}
          animate={{
            y: [-40, 40, -40],
            opacity: [.2, 1, .2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
        />

      ))}

    </div>
  );
}