"use client";

const projects = [
  {
    title: "RAG-based LLM System for Finance",
    description: "Enterprise RAG-based LLM systems with vector databases and knowledge-grounding mechanisms.",
    technologies: ["Python", "LangChain", "Vector DB", "RAG"],
    category: "AI/ML Enterprise",
    status: "Completed"
  },
  {
    title: "Predictive Retail Analytics",
    description: "Advanced predictive models for CLV prediction, sales forecasting, and churn prediction.",
    technologies: ["Python", "Random Forest", "Time Series", "ML"],
    category: "Data Science", 
    status: "Completed"
  },
  {
    title: "Stable Diffusion Image Gen",
    description: "Custom stable diffusion models for creative image story generation.",
    technologies: ["Stable Diffusion", "Python", "Computer Vision"],
    category: "AI/Creative",
    status: "Completed"
  },
  {
    title: "Multi-modal Voice Systems",
    description: "Real-time AI voice systems with speech recognition and emotion awareness.",
    technologies: ["Python", "Speech AI", "Deep Learning"],
    category: "AI Systems",
    status: "Completed"
  },
  {
    title: "Neural Language Translator",
    description: "Real-time multilingual translation system with context awareness and cultural adaptation.",
    technologies: ["Transformer", "BERT", "PyTorch", "NLP"],
    category: "AI/ML Enterprise",
    status: "In Progress"
  },
  {
    title: "Smart IoT Analytics Platform",
    description: "IoT data processing platform with predictive maintenance and anomaly detection.",
    technologies: ["Python", "IoT", "Time Series", "ML"],
    category: "Data Science",
    status: "In Progress"
  },
  {
    title: "3D Scene Generation AI",
    description: "Advanced 3D scene generation using Neural Radiance Fields and Gaussian Splatting.",
    technologies: ["NeRF", "Gaussian Splatting", "3D AI"],
    category: "AI/Creative",
    status: "Working"
  },
  {
    title: "Distributed AI Training",
    description: "Scalable distributed training infrastructure for large language models and multimodal AI.",
    technologies: ["Kubernetes", "PyTorch", "Distributed Training"],
    category: "AI Systems", 
    status: "Working"
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
            <div
              key={project.title}
              className={`relative h-auto w-full bg-white border border-gray-300 rounded-xl p-6 overflow-hidden shadow-lg`}
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
            </div>
          );
        })}
      </div>
    </section>
  );
};