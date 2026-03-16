import { FaLock, FaServer, FaCloud } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-[#020617] via-[#0b0320] to-[#020617] overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[160px] top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-600/20 blur-[160px] bottom-[-120px] right-[-120px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-slate-400 leading-relaxed text-lg">
            I'm <span className="text-white font-medium">Aniket Kumar</span>, a Computer Science engineer focused on building
            scalable full-stack applications and reliable backend systems.
            I enjoy designing secure architectures, solving real-world
            problems through code, and deploying modern applications
            using cloud infrastructure. My goal is to create software
            that is efficient, secure, and built to scale.
          </p>

        </div>

        {/* Credibility Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 text-center">

          <div className="bg-slate-900/40 border border-purple-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-400">18+</h3>
            <p className="text-slate-400 text-sm">Projects Built</p>
          </div>

          <div className="bg-slate-900/40 border border-purple-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-400">MERN</h3>
            <p className="text-slate-400 text-sm">Stack Developer</p>
          </div>

          <div className="bg-slate-900/40 border border-purple-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-400">Cloud</h3>
            <p className="text-slate-400 text-sm">Deployment Focus</p>
          </div>

          <div className="bg-slate-900/40 border border-purple-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-400">Open</h3>
            <p className="text-slate-400 text-sm">Source Mindset</p>
          </div>

        </div>

        {/* What I Do */}
        <h3 className="text-3xl font-semibold text-center text-white mb-12">
          What I Build
        </h3>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Backend Security */}
          <div className="group relative bg-slate-900/40 border border-purple-900/40 rounded-2xl p-8 backdrop-blur-lg hover:border-purple-500/60 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <FaLock className="text-purple-400 text-3xl mb-4" />

            <h4 className="text-xl font-semibold text-white mb-3">
              Secure Backend Systems
            </h4>

            <p className="text-slate-400 leading-relaxed">
              Designing authentication systems, authorization layers,
              and secure API architectures that protect applications
              and ensure reliable data access.
            </p>

          </div>

          {/* Full Stack Apps */}
          <div className="group relative bg-slate-900/40 border border-purple-900/40 rounded-2xl p-8 backdrop-blur-lg hover:border-purple-500/60 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <FaServer className="text-purple-400 text-3xl mb-4" />

            <h4 className="text-xl font-semibold text-white mb-3">
              Scalable Full-Stack Applications
            </h4>

            <p className="text-slate-400 leading-relaxed">
              Building modern applications using the MERN stack with
              clean architecture, maintainable codebases, and efficient
              backend logic for real-world use cases.
            </p>

          </div>

          {/* Cloud */}
          <div className="group relative bg-slate-900/40 border border-purple-900/40 rounded-2xl p-8 backdrop-blur-lg hover:border-purple-500/60 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

            <FaCloud className="text-purple-400 text-3xl mb-4" />

            <h4 className="text-xl font-semibold text-white mb-3">
              Cloud Deployment
            </h4>

            <p className="text-slate-400 leading-relaxed">
              Deploying applications on modern cloud platforms while
              focusing on performance, scalability, and infrastructure
              reliability.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}