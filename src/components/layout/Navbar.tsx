export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-cyan-400 text-2xl font-black">
          🌊 DeepSea Guardian
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-cyan-400">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>

        </ul>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold">
          Dashboard
        </button>

      </div>

    </nav>
  );
}