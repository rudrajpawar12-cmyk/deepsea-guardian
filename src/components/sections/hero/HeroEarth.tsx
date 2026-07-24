import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
} from "lucide-react";

const hotspots = [
  {
    top: "28%",
    left: "42%",
    color: "bg-red-400",
    delay: 0,
  },
  {
    top: "48%",
    left: "64%",
    color: "bg-yellow-400",
    delay: 1,
  },
  {
    top: "68%",
    left: "33%",
    color: "bg-cyan-400",
    delay: 2,
  },
  {
    top: "37%",
    left: "74%",
    color: "bg-orange-400",
    delay: 3,
  },
];

export default function HeroEarth() {
  return (
    <div className="absolute right-16 top-32 z-10 hidden xl:block">

      <div className="relative w-[420px] h-[420px]">

        {/* Outer Glow */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [.25, .45, .25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          inset-0
          rounded-full
          bg-cyan-500/10
          blur-[70px]
          "
        />

        {/* Globe */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
          className="
          absolute
          inset-0
          rounded-full
          border
          border-cyan-400/30
          overflow-hidden
          backdrop-blur-xl
          "
        >

          {/* Latitude */}

          {Array.from({ length: 7 }).map((_, i) => (

            <div
              key={i}
              className="absolute left-0 w-full border-t border-cyan-500/10"
              style={{
                top: `${15 + i * 12}%`,
              }}
            />

          ))}

          {/* Longitude */}

          {Array.from({ length: 10 }).map((_, i) => (

            <div
              key={i}
              className="absolute top-0 h-full border-l border-cyan-500/10"
              style={{
                left: `${10 + i * 8}%`,
              }}
            />

          ))}

          {/* Center Icon */}

          <div className="absolute inset-0 flex items-center justify-center">

            <Globe
              size={170}
              className="text-cyan-300 opacity-30"
            />

          </div>

        </motion.div>

        {/* Hotspots */}

        {hotspots.map((spot, index) => (

          <motion.div
            key={index}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: [1, 1.6, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: spot.delay,
            }}
            className="absolute"
            style={{
              top: spot.top,
              left: spot.left,
            }}
          >

            <MapPin
              className={`${spot.color.replace("bg", "text")}`}
              size={18}
            />

            <motion.div
              animate={{
                scale: [1, 2.5],
                opacity: [.6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: spot.delay,
              }}
              className={`
              absolute
              inset-0
              rounded-full
              ${spot.color}
              blur-md
              `}
            />

          </motion.div>

        ))}

        {/* Orbit Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 45,
            ease: "linear",
          }}
          className="
          absolute
          -inset-8
          rounded-full
          border
          border-dashed
          border-cyan-400/20
          "
        />

        {/* Orbit Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 70,
            ease: "linear",
          }}
          className="
          absolute
          -inset-16
          rounded-full
          border
          border-cyan-400/10
          "
        />

      </div>

    </div>
  );
}