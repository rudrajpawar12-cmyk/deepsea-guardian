/*
 * LoadingScreen Component
 * Design: Abyssal Interface - Sonar sweep animation
 */
import { motion } from "framer-motion";
import { Waves } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#020B16] flex items-center justify-center">
      <div className="relative">
        {/* Sonar rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[#00D9FF]/20"
            animate={{
              scale: [1, 3],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            style={{
              width: 80,
              height: 80,
              left: "50%",
              top: "50%",
              marginLeft: -40,
              marginTop: -40,
            }}
          />
        ))}

        {/* Center icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#14F1D9]/10 flex items-center justify-center border border-[#00D9FF]/30">
          <Waves className="w-7 h-7 text-[#00D9FF]" />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-[30%] text-sm text-[#00D9FF]/60 font-mono tracking-widest uppercase"
      >
        Initializing deep scan...
      </motion.p>
    </div>
  );
}
