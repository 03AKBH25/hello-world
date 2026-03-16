import { useEffect, useRef } from "react"
import projects from "../data/projects"

export default function Projects() {
  const trackRef = useRef(null)
  const reflTrackRef = useRef(null)
  const total = projects.length
  const radius = 420

  useEffect(() => {
    let animFrameId
    let paused = false
    let currentAngle = 0
    const track = trackRef.current
    const reflTrack = reflTrackRef.current

    const pause = () => { paused = true }
    const resume = () => { paused = false }
    track.addEventListener("mouseenter", pause)
    track.addEventListener("mouseleave", resume)

    const animate = () => {
      if (!paused) {
        currentAngle += 0.15
        const cards = track.querySelectorAll(".carousel-card")
        const reflCards = reflTrack.querySelectorAll(".carousel-card-refl")
        cards.forEach((card, i) => {
          const angle = (360 / total) * i + currentAngle
          card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`
        })
        reflCards.forEach((card, i) => {
          const angle = (360 / total) * i + currentAngle
          card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`
        })
      }
      animFrameId = requestAnimationFrame(animate)
    }

    animFrameId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animFrameId)
      track.removeEventListener("mouseenter", pause)
      track.removeEventListener("mouseleave", resume)
    }
  }, [])

  return (
    <section id="projects" className="py-32 bg-black overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center
        bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400
        text-transparent bg-clip-text">
          Featured Projects
        </h2>
      </div>

      <div className="carousel">

        {/* ── main cards ── */}
        <div className="carousel-track" ref={trackRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{
                transform: `rotateY(${(360 / total) * index}deg) translateZ(${radius}px)`
              }}
            >
              <div className="project-card">

                {/* project screenshot */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={e => {
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextSibling.style.display = "flex"
                    }}
                  />
                  {/* fallback placeholder */}
                  <div className="project-image-placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                </div>

                <h3 className="text-lg text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-purple-900/40 text-purple-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a href={project.github} className="text-purple-400">GitHub</a>
                  <a href={project.live} className="text-purple-400">Live</a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── reflection cards (below ground line) ── */}
        <div className="carousel-track carousel-track-refl" ref={reflTrackRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-card-refl"
              style={{
                transform: `rotateY(${(360 / total) * index}deg) translateZ(${radius}px)`
              }}
            >
              <div className="project-card-refl">
                <div className="project-image-refl">
                  <img
                    src={project.image}
                    alt=""
                    onError={e => {
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextSibling.style.display = "flex"
                    }}
                  />
                  <div className="project-image-placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                </div>
                <h3 className="text-lg text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}