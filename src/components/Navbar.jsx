export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-purple-900/40">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 text-transparent bg-clip-text">
          Aniket Kumar
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-slate-300 font-medium text-sm md:text-base">

          <li>
            <a
              href="#about"
              className="relative hover:text-purple-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative hover:text-purple-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative hover:text-purple-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className="relative hover:text-purple-400 transition duration-300"
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="relative hover:text-purple-400 transition duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="relative hover:text-purple-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-900/40 hover:scale-105 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  )
}