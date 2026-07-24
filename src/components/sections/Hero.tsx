import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={18} />
            AI Powered Ocean Monitoring
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Protect Our Oceans
            <span className="block text-cyan-400">
              Before It's Too Late
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
            DeepSea Guardian combines Artificial Intelligence,
            satellite imagery, environmental analytics and
            real-time monitoring to detect marine pollution,
            predict risks and help protect our oceans.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-4 rounded-xl font-bold transition">
              Explore Dashboard
              <ArrowRight size={18} />
            </button>

            <button className="border border-cyan-500 px-7 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-slate-900/70 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-lg shadow-2xl">

          <h2 className="text-2xl font-bold text-cyan-400 mb-8">
            Live Ocean Intelligence
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between">
              <span>Marine Health</span>
              <span className="text-green-400 font-bold">82%</span>
            </div>

            <div className="flex justify-between">
              <span>Plastic Waste</span>
              <span className="text-red-400 font-bold">
                1,248 kg
              </span>
            </div>

            <div className="flex justify-between">
              <span>Pollution Risk</span>
              <span className="text-yellow-400 font-bold">
                Moderate
              </span>
            </div>

            <div className="flex justify-between">
              <span>AI Prediction</span>
              <span className="text-cyan-400 font-bold">
                Rising in 48 hrs
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}