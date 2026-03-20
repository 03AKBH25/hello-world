import crimsonSecrets from "../assets/crimson-secret.png";
import liveCryptoTracker from "../assets/live-crypto-tracker.png";


const projects = [
  {
    title: "Crimson Streets",
    description: "A confession-based social media platform where users can share anonymous posts and interact with the community.",
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets" ],
    github: "https://github.com/03AKBH25/CRIMSON-STREETS",
    live: "#",
    image: crimsonSecrets
  },
  {
  title: "AI-Powered Real-Time Decision Support Assistant",
  description: "A job tracking platform integrated with AI to analyze interview responses, generate contextual follow-up questions, and assist decision-making using retrieval-augmented generation (RAG).",
  tech: [
    "React", "Node.js", "Express", "MongoDB", "LangChain", "OpenAI API"
  ],
  github: "https://github.com/03AKBH25/jobby-app-2",
  live: "#",
  image: "Joker"
},
  {
    title: "Realtime Chat App",
    description: "A real-time messaging application with private chats, typing indicators and live notifications using WebSockets.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/realtime-chat",
    live: "#",
    image: "R"
  },
  {
    title: "Crypto Currency Dashboard",
    description: "A dashboard to track cryptocurrency prices and trends.",
    tech: ["React", "CoinGecko API"],
    github: "https://github.com/03AKBH25/crypto-dashboard",
    live: "https://cryptotracker-35wpp69.public.builtwithrocket.new",
    image: liveCryptoTracker
  },
  {
    title: "Job Queue System",
    description: "Designed and implemented a scalable asynchronous job processing system with distributed workers, retry strategies, and fault tolerance for high-throughput backend workloads.",
    tech: ["React", "Express.JS", "Redis", "Docker", "Prisma", "PostgreSQL"],
    github: "https://github.com/03AKBH25/job-queue-system",
    live: "#",
    image: "J"
  },
  {
    title: "Task Collaboration Platform",
    description: "A collaborative productivity tool where teams can manage tasks, track progress and communicate in real time.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/task-collab",
    live: "#",
    image: "T"
  }
]

export default projects
