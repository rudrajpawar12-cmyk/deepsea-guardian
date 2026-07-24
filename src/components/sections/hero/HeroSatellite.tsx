import { motion } from "framer-motion";
import {
  Satellite,
  Wifi,
} from "lucide-react";

export default function HeroSatellite() {
  return (
    <>
      {/* Orbit Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        right-[-80px]
        top-6
        w-[600px]
        h-[600px]
        "
      >

        <div
          className="
          absolute
          inset-0
          rounded-full
          border
          border-dashed
          border-cyan-500/20
          "
        />

        {/* Satellite */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          left-1/2
          -top-4
          -translate-x-1/2
          "
        >

          <div className="relative">

            {/* Engine Glow */}

            <motion.div
              animate={{
                scale: [1, 1.6, 1],
                opacity: [.3, .8, .3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/30
              blur-xl
              "
            />

            {/* Satellite Body */}

            <div
              className="
              relative
              w-14
              h-14
              rounded-2xl
              bg-slate-900
              border
              border-cyan-400/40
              flex
              items-center
              justify-center
              shadow-[0_0_30px_#22d3ee55]
              "
            >

              <Satellite
                className="text-cyan-400"
                size={28}
              />

            </div>

          </div>

        </motion.div>

      </motion.div>

      {/* Communication Pulse */}

      <motion.div
        animate={{
          opacity: [0, .8, 0],
          scale: [.2, 1.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
        absolute
        right-[208px]
        top-[245px]
        w-10
        h-10
        rounded-full
        border
        border-cyan-400
        "
      />

      <motion.div
        animate={{
          opacity: [0, .5, 0],
          scale: [.2, 1.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
        }}
        className="
        absolute
        right-[198px]
        top-[235px]
        w-14
        h-14
        rounded-full
        border
        border-cyan-400/50
        "
      />

      {/* Signal */}

      <motion.div
        animate={{
          opacity: [.2, 1, .2],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
        absolute
        right-[220px]
        top-[260px]
        text-cyan-400
        "
      >

        <Wifi size={18} />

      </motion.div>

      {/* Beam */}

      <motion.div
        animate={{
          opacity: [.15, .45, .15],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        right-[215px]
        top-[270px]
        w-[2px]
        h-[300px]
        bg-gradient-to-b
        from-cyan-400
        to-transparent
        "
      />
    </>
  );
}