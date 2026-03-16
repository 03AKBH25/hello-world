import education from "../data/education"

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 bg-gradient-to-b from-[#14072e] via-black to-[#14072e]"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20
        bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400
        text-transparent bg-clip-text">
          Education
        </h2>

        <div className="relative">

          {/* timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2
          w-[2px] h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-indigo-500 opacity-40"></div>

          <div className="space-y-16">

            {education.map((item, index) => {

              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative flex items-center">

                  {isLeft && (
                    <div className="w-1/2 pr-10 text-right">
                      <div className="bg-slate-900/40 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
                        <h3 className="text-white font-semibold text-lg">
                          {item.degree}
                        </h3>
                        <p className="text-purple-400 text-sm">
                          {item.institution}
                        </p>
                        <p className="text-slate-400 text-sm mt-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2
                  w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

                  {!isLeft && (
                    <div className="w-1/2 ml-auto pl-10">
                      <div className="bg-slate-900/40 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition">
                        <h3 className="text-white font-semibold text-lg">
                          {item.degree}
                        </h3>
                        <p className="text-purple-400 text-sm">
                          {item.institution}
                        </p>
                        <p className="text-slate-400 text-sm mt-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              )
            })}

          </div>
        </div>
      </div>

    </section>
  )
}