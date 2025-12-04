"use client";

import React from "react";
import { motion } from "framer-motion";

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
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-20 px-4 z-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
        <div className="text-[40px] font-bold mt-[10px] text-center mb-[15px] text-white">
          Featured Projects
        </div>

        <div className="text-[20px] text-gray-300 mt-[5px] text-center max-w-[800px]">
          Enterprise-grade AI solutions and data science projects showcasing expertise in real-time systems, machine learning, and intelligent automation.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] w-full z-10">
        {projects.map((project, index) => {
          return (
            <motion.a
              key={project.title}
              href={project.url}
              target={project.url !== "#" ? "_blank" : "_self"}
              rel={project.url !== "#" ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`relative h-auto w-full bg-[#110C2A]/30 backdrop-blur-sm border border-[#2A0E61]/50 rounded-xl p-6 overflow-hidden shadow-lg cursor-pointer block transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] group`}
            >

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30`}>
                    {project.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === 'Completed' ? 'bg-green-900/30 text-green-300 border border-green-500/30' :
                      project.status === 'In Progress' ? 'bg-blue-900/30 text-blue-300 border border-blue-500/30' :
                        'bg-orange-900/30 text-orange-300 border border-orange-500/30'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-white transition-all duration-300`}>{project.title}</h3>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed h-[80px] overflow-hidden">{project.description}</p>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-[#2A0E61]/50 border border-purple-500/20 rounded text-gray-300 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};