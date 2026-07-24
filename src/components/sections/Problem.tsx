import {
  AlertTriangle,
  Waves,
  Fish,
  Brain,
  Satellite,
  ShieldCheck,
} from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Waves size={34} className="text-cyan-400" />,
      title: "Ocean Pollution",
      description:
        "Plastic waste and chemical pollutants continue to threaten marine ecosystems worldwide.",
    },
    {
      icon: <Fish size={34} className="text-cyan-400" />,
      title: "Marine Life at Risk",
      description:
        "Thousands of marine species are affected by pollution, habitat destruction, and climate change.",
    },
    {
      icon: <AlertTriangle size={34} className="text-cyan-400" />,
      title: "Slow Detection",
      description:
        "Traditional monitoring methods are expensive, manual, and often detect problems too late.",
    },
  ];

  const solutions = [
    {
      icon: <Brain size={34} className="text-green-400" />,
      title: "AI Detection",
      description:
        "AI models analyze environmental data to identify pollution hotspots quickly.",
    },
    {
      icon: <Satellite size={34} className="text-green-400" />,
      title: "Satellite Monitoring",
      description:
        "Combine satellite imagery with environmental datasets for broad ocean coverage.",
    },
    {
      icon: <ShieldCheck size={34} className="text-green-400" />,
      title: "Real-Time Alerts",
      description:
        "Notify researchers and authorities before environmental damage becomes severe.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why DeepSea Guardian?
        </h2>

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          Oceans are changing faster than traditional monitoring systems can
          respond. DeepSea Guardian uses AI to detect, predict, and help prevent
          environmental threats.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 rounded-2xl p-8 border border-red-500/20"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="text-slate-400 mt-4">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 rounded-2xl p-8 border border-green-500/20"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="text-slate-400 mt-4">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}