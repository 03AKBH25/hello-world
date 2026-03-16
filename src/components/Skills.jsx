import { FaGitAlt, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiKubernetes, SiJavascript, SiRedis, SiPostgresql, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-black via-[#14072e] to-[#020617]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-10">
          Skills
        </h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-10 text-4xl text-purple-400">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2
              hover:scale-125 hover:text-purple-300
              transition duration-300"
            >
              {skill.icon}
              <span className="text-sm text-gray-400">
                {skill.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}