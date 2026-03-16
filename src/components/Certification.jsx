import certificates from "../data/certificate"
import { FaCertificate } from "react-icons/fa"

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 bg-[#14072e]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16
        bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300
        text-transparent bg-clip-text">
          Certifications
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-xl
              bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500
              hover:scale-[1.03] transition duration-300"
            >

              {/* inner card */}
              <div className="h-full rounded-xl bg-[#0b0618] p-6">

                {/* icon */}
                <div className="text-purple-400 text-3xl mb-4
                group-hover:text-purple-300 transition">
                  <FaCertificate />
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">
                  {cert.title}
                </h3>

                <p className="text-purple-400 text-sm mb-3">
                  {cert.issuer} • {cert.date}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  className="text-sm text-purple-300 hover:text-purple-200"
                >
                  View Certificate →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}