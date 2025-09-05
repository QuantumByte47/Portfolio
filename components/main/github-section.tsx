"use client";
import { 
  CodeBracketIcon, 
  StarIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon 
} from "@heroicons/react/24/outline";

const githubProjects = [
  {
    name: "AI-Powered-Chatbot",
    description: "Intelligent chatbot using advanced NLP models and machine learning algorithms for enhanced user interactions.",
    language: "Python",
    stars: 45,
    forks: 12,
    updated: "2 days ago",
    url: "https://github.com/QuantumByte47/AI-Powered-Chatbot"
  },
  {
    name: "Real-Time-Data-Analytics",
    description: "Real-time data processing and analytics dashboard with live visualization and automated insights.",
    language: "JavaScript", 
    stars: 78,
    forks: 23,
    updated: "5 days ago",
    url: "https://github.com/QuantumByte47/Real-Time-Data-Analytics"
  },
  {
    name: "ML-Model-Deployment",
    description: "Production-ready machine learning model deployment pipeline with Docker and cloud integration.",
    language: "Python",
    stars: 92,
    forks: 31,
    updated: "1 week ago",
    url: "https://github.com/QuantumByte47/ML-Model-Deployment"
  },
  {
    name: "Voice-Recognition-System",
    description: "Advanced voice recognition and speech-to-text system with real-time processing capabilities.",
    language: "Python",
    stars: 67,
    forks: 18,
    updated: "3 days ago",
    url: "https://github.com/QuantumByte47/Voice-Recognition-System"
  },
  {
    name: "Financial-Forecasting-AI",
    description: "AI-driven financial forecasting system with deep learning models for market prediction.",
    language: "Python",
    stars: 124,
    forks: 45,
    updated: "1 day ago",
    url: "https://github.com/QuantumByte47/Financial-Forecasting-AI"
  },
  {
    name: "Automated-Testing-Suite",
    description: "Comprehensive automated testing framework for data science and machine learning projects.",
    language: "Python",
    stars: 38,
    forks: 9,
    updated: "6 days ago",
    url: "https://github.com/QuantumByte47/Automated-Testing-Suite"
  },
  {
    name: "Computer-Vision-Pipeline",
    description: "End-to-end computer vision pipeline for object detection and image classification tasks.",
    language: "Python",
    stars: 156,
    forks: 62,
    updated: "4 days ago",
    url: "https://github.com/QuantumByte47/Computer-Vision-Pipeline"
  },
  {
    name: "NLP-Text-Processing",
    description: "Advanced natural language processing toolkit for text analysis and sentiment classification.",
    language: "Python",
    stars: 89,
    forks: 27,
    updated: "1 week ago",
    url: "https://github.com/QuantumByte47/NLP-Text-Processing"
  },
  {
    name: "Data-Visualization-Tools",
    description: "Interactive data visualization library with custom charts and real-time data binding.",
    language: "TypeScript",
    stars: 73,
    forks: 21,
    updated: "2 days ago",
    url: "https://github.com/QuantumByte47/Data-Visualization-Tools"
  },
  {
    name: "API-Integration-Framework",
    description: "Robust API integration framework for seamless data exchange and service orchestration.",
    language: "Node.js",
    stars: 95,
    forks: 34,
    updated: "3 days ago",
    url: "https://github.com/QuantumByte47/API-Integration-Framework"
  }
];

const getLanguageColor = (language: string) => {
  const colors: { [key: string]: string } = {
    Python: "bg-yellow-500",
    JavaScript: "bg-yellow-400", 
    TypeScript: "bg-blue-500",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] w-full z-10">
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