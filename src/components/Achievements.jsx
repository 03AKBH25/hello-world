import achievements from "../data/achievement"
import { FaTrophy } from "react-icons/fa"
import MovingVectorBackground from "./MovingVectorBackground"

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 overflow-hidden"
    >

      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#05010f] to-[#14072e]"></div>

      {/* moving stars or nodes vector background */}
      <MovingVectorBackground />

      {/* moving stars */}
      <div className="absolute inset-0 star-bg opacity-40"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-16">
          Achievements
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0b0618]/80
              backdrop-blur-sm hover:scale-105 transition duration-300"
            >

              <div className="text-purple-400 text-3xl mb-4 flex justify-center">
                <FaTrophy />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {item.description}
              </p>

              <span className="text-purple-400 text-sm">
                {item.year}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}