"use client";
import { 
  CodeBracketIcon, 
  StarIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon 
} from "@heroicons/react/24/outline";

const githubProjects = [
  {
    name: "wortholic-with-loveable",
    description: "AI-powered React app builder that instantly clones websites and generates code with advanced automation capabilities.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/wortholic-with-loveable"
  },
  {
    name: "wortholic-researcher",
    description: "AI-powered research assistant with multi-agent capabilities, web scraping, and comprehensive document analysis tools.",
    language: "Python",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/wortholic-researcher"
  },
  {
    name: "wortholic-ai",
    description: "Multi-model AI assistant platform with GPT-4, Claude, Gemini Pro & DeepSeek integration for enterprise productivity.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/wortholic-ai"
  },
  {
    name: "WT-AI-Editor-SAAS",
    description: "SaaS platform with AI-powered tools for writing, image generation, editing, and resume optimization using Google Gemini.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/WT-AI-Editor-SAAS"
  },
  {
    name: "RAG-Legal-Assistant",
    description: "AI-powered legal assistant using RAG architecture, Pinecone vector database, and LangChain for document processing.",
    language: "Python",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/RAG-Legal-Assistant"
  },
  {
    name: "multi-tenant-voice-ai-platform",
    description: "Scalable infrastructure for building and managing enterprise-grade voice agents with multi-tenant architecture.",
    language: "Python",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/multi-tenant-voice-ai-platform"
  },
  {
    name: "Qwen3-Finance-AI-website-",
    description: "GPU-accelerated financial AI system powered by Qwen3-1.7B with specialized finance reasoning and real-time analysis.",
    language: "HTML",
    stars: 0,
    forks: 0,
    updated: "recently",
    url: "https://github.com/QuantumByte47/Qwen3-Finance-AI-website-"
  },
];

const getLanguageColor = (language: string) => {
  const colors: { [key: string]: string } = {
    Python: "bg-yellow-500",
    JavaScript: "bg-yellow-400", 
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-500",
    Dart: "bg-blue-400",
    "Jupyter Notebook": "bg-orange-400",
    "Node.js": "bg-green-500",
    Java: "bg-orange-500",
    Go: "bg-cyan-400",
    Rust: "bg-orange-400",
    C: "bg-blue-400",
    "C++": "bg-blue-600"
  };
  return colors[language] || "bg-gray-500";
};

export const GitHubSection = () => {
  return (
    <section
      id="github"
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-12 px-4 bg-white"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="text-[40px] text-blue-800 font-bold mt-[10px] text-center mb-[15px]">
          GitHub Projects
        </div>

        <div className="text-[20px] text-black mb-10 mt-[5px] text-center max-w-[800px]">
          Explore my open-source contributions and personal projects showcasing expertise in AI, machine learning, and software development.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full z-10">
        {githubProjects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-auto w-full bg-white border border-gray-300 rounded-xl p-6 overflow-hidden cursor-pointer block shadow-lg"
          >
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CodeBracketIcon className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-800">
                    {project.name}
                  </h3>
                </div>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-600" />
              </div>
              
              <p className="text-black text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span>{project.language}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-600">
                Updated {project.updated}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/QuantumByte47"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-8 bg-blue-600 text-white font-bold rounded-xl shadow-lg flex items-center gap-2"
        >
          <CodeBracketIcon className="w-5 h-5" />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};