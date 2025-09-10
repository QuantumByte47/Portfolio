"use client";

const projects = [
  {
    title: "Wortholic AI Assistant",
    description: "Advanced AI Assistant Platform with Multi-Model Support (Claude, GPT-4, Gemini Pro, DeepSeek). Enterprise-ready with Docker deployment.",
    technologies: ["TypeScript", "Next.js", "AI Models", "Docker"],
    category: "AI/ML Enterprise",
    status: "Completed",
    url: "https://github.com/QuantumByte47/wortholic-ai"
  },
  {
    title: "Enterprise AI CRM Platform",
    description: "Next-generation CRM with AI-powered lead scoring, predictive analytics, automated workflows, and intelligent customer insights using advanced ML models.",
    technologies: ["TypeScript", "PostgreSQL", "AI/ML", "Microservices"],
    category: "AI/Enterprise",
    status: "In Progress",
    url: "#"
  },
  {
    title: "Qwen3 Finance AI System",
    description: "GPU-accelerated financial AI system powered by Qwen3-1.7B with specialized finance reasoning and cyberpunk UI.",
    technologies: ["Python", "PyTorch", "CUDA", "FastAPI"],
    category: "AI/Finance", 
    status: "Completed",
    url: "https://github.com/QuantumByte47/Qwen3-Finance-AI-website-"
  },
  {
    title: "Neural Code Intelligence Suite",
    description: "Advanced AI-powered code analysis platform with automated refactoring, vulnerability detection, and intelligent code generation using transformer models.",
    technologies: ["Python", "Transformers", "Static Analysis", "AI"],
    category: "AI/DevTools",
    status: "Pending",
    url: "#"
  },
  {
    title: "WT AI Editor SaaS",
    description: "Comprehensive SaaS platform leveraging AI for content creation, image generation, and resume reviewing.",
    technologies: ["React 19", "Express.js", "PostgreSQL", "Gemini API"],
    category: "AI/SaaS",
    status: "Completed",
    url: "https://github.com/QuantumByte47/WT-AI-Editor-SAAS"
  },
  {
    title: "Multimodal AI Voice Agents",
    description: "Advanced multimodal AI system with voice recognition, emotion detection, and real-time conversational AI capabilities.",
    technologies: ["Python", "Transformers", "Speech AI", "Computer Vision"],
    category: "AI/Multimodal",
    status: "In Progress",
    url: "https://github.com/QuantumByte47/Multimodal-AI-Voice-Agents"
  },
  {
    title: "Quantum-Enhanced ML Framework",
    description: "Revolutionary machine learning framework leveraging quantum computing principles for exponentially faster model training and optimization.",
    technologies: ["Python", "Quantum Computing", "ML", "Research"],
    category: "AI/Research",
    status: "Pending",
    url: "#"
  },
  {
    title: "MCP Server RAG LLMs",
    description: "Model Context Protocol servers with RAG implementation, prompt engineering toolkit, and LLM orchestration for enterprise workflows.",
    technologies: ["Python", "RAG", "LLMs", "MCP Protocol"],
    category: "AI/ML Enterprise",
    status: "Completed",
    url: "https://github.com/QuantumByte47/MCP-Server-RAG-LLMs"
  }
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-12 px-4 bg-white"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="text-[40px] text-blue-800 font-bold mt-[10px] text-center mb-[15px]">
          Featured Projects
        </div>

        <div className="text-[20px] text-black mb-10 mt-[5px] text-center max-w-[800px]">
          Enterprise-grade AI solutions and data science projects showcasing expertise in real-time systems, machine learning, and intelligent automation.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] w-full z-10">
        {projects.map((project, index) => {
          const colors = [
            { theme: 'purple', border: 'border-purple-500/30', bg: 'from-purple-500/5 to-indigo-500/5', text: 'text-purple-300', dot: 'bg-purple-400', tag: 'bg-purple-500/20 text-purple-300' },
            { theme: 'cyan', border: 'border-cyan-500/30', bg: 'from-cyan-500/5 to-blue-500/5', text: 'text-cyan-300', dot: 'bg-cyan-400', tag: 'bg-cyan-500/20 text-cyan-300' },
            { theme: 'green', border: 'border-green-500/30', bg: 'from-green-500/5 to-emerald-500/5', text: 'text-green-300', dot: 'bg-green-400', tag: 'bg-green-500/20 text-green-300' },
            { theme: 'blue', border: 'border-blue-500/30', bg: 'from-blue-500/5 to-indigo-500/5', text: 'text-blue-300', dot: 'bg-blue-400', tag: 'bg-blue-500/20 text-blue-300' }
          ];
          const color = colors[index];
          
          return (
            <a
              key={project.title}
              href={project.url}
              target={project.url !== "#" ? "_blank" : "_self"}
              rel={project.url !== "#" ? "noopener noreferrer" : ""}
              className={`relative h-auto w-full bg-white border border-gray-300 rounded-xl p-6 overflow-hidden shadow-lg cursor-pointer block transition-transform hover:scale-105`}
            >
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-blue-600`}>
                    {project.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className={`text-lg font-bold text-blue-800 mb-3`}>{project.title}</h3>
                
                <p className="text-black text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};