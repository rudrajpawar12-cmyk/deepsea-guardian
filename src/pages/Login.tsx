import { motion } from "framer-motion";
import { ShieldCheck, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [officerId, setOfficerId] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    navigate("/boot");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#031525] to-black" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute bottom-[-350px] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full bg-cyan-500 blur-[180px]"
      />

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Login */}

      <div className="relative z-20 flex min-h-screen items-center justify-center px-6">

        <motion.form
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .7,
          }}
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-2xl p-10"
        >

          <div className="flex justify-center">

            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

              <ShieldCheck
                size={40}
                className="text-cyan-400"
              />

            </div>

          </div>

          <h1 className="mt-8 text-center text-4xl font-black">

            DEEPSEA GUARDIAN

          </h1>

          <p className="mt-3 text-center text-cyan-400 tracking-[0.3em] uppercase text-xs">

            Government Officer Login

          </p>

          {/* Officer */}

          <div className="mt-10">

            <label className="text-sm text-slate-400">

              Officer ID

            </label>

            <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-slate-950 px-4">

              <User size={18} className="text-cyan-400" />

              <input
                value={officerId}
                onChange={(e) => setOfficerId(e.target.value)}
                className="w-full bg-transparent px-4 py-4 outline-none"
                placeholder="Officer ID"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label className="text-sm text-slate-400">

              Password

            </label>

            <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-slate-950 px-4">

              <Lock size={18} className="text-cyan-400" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent px-4 py-4 outline-none"
                placeholder="Password"
              />

            </div>

          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-xl bg-cyan-500 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition"
          >

            LOGIN TO COMMAND CENTER

          </button>

          <p className="mt-8 text-center text-xs tracking-[0.25em] uppercase text-slate-500">

            Government of India • Secure Network

          </p>

        </motion.form>

      </div>

    </div>
  );
}