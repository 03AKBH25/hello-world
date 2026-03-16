export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#0f0224] to-[#020617] overflow-hidden"
    >
      {/* Glow background effects */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[150px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-600/20 blur-[150px] bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div className="space-y-8">

            <h1 className="text-6xl font-extrabold text-white tracking-tight leading-tight">
              Aniket Kumar
            </h1>

            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 text-transparent bg-clip-text">
              Full Stack Developer • Cloud Engineer
            </h2>

            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
              I build scalable web applications with modern technologies
              and design cloud infrastructure that powers reliable,
              high-performance digital products.
            </p>

            <div className="flex gap-5 pt-4">

              <a
                href="#projects"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-purple-900/40 hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border border-purple-500/40 text-purple-300 backdrop-blur-md hover:bg-purple-900/30 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">

              {/* Glow Layer */}
              <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Aniket Kumar"
                className="relative w-72 h-102 object-cover rounded-full border-4 border-purple-500/40 shadow-2xl"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}