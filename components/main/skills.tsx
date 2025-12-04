"use client";

const allSkills = [
  // Programming & Languages
  "Python", "JavaScript", "TypeScript", "SQL", "Node.js", "FastAPI", "React", "Next.js",

  // Advanced AI & Machine Learning
  "Machine Learning", "Deep Learning", "Natural Language Processing", "Generative AI",
  "AI Agents", "LLMs", "Transformer Models", "Computer Vision", "PyTorch", "TensorFlow",
  "Scikit-learn", "Keras", "OpenAI API", "Anthropic Claude", "HuggingFace", "Langchain",

  // Multimodal AI Systems
  "Multimodal AI", "Vision-Language Models", "CLIP", "BLIP", "GPT-4V", "LLaVA",
  "Multimodal Embeddings", "Cross-modal Retrieval", "Vision-Text Alignment", "Multimodal Fusion",
  "Image-to-Text Generation", "Text-to-Image Synthesis", "Audio-Visual Learning", "Multimodal RAG",

  // Voice & Audio AI
  "LiveKit", "VAPI", "Speech-to-Text", "Text-to-Speech", "Voice Synthesis", "Audio Processing",
  "Real-time Voice AI", "WebRTC", "Voice Agents", "Conversational AI", "Neural Vocoder",

  // Advanced AI Technologies  
  "RAG Systems", "Vector Databases", "Embedding Models", "Fine-tuning", "RLHF",
  "Prompt Engineering", "AI Orchestration", "Model Optimization", "Neural Architecture Search",
  "Quantization", "Distributed Training", "MLOps", "Model Deployment", "Federated Learning",
  "Meta-Learning", "Few-Shot Learning", "Zero-Shot Learning", "Transfer Learning",

  // Cutting-Edge AI Techniques
  "Diffusion Models", "Stable Diffusion", "ControlNet", "LoRA", "Dreambooth", "Textual Inversion",
  "Neural Radiance Fields", "3D Generation", "Gaussian Splatting", "Neural Rendering",
  "Graph Neural Networks", "Attention Mechanisms", "Self-Supervision", "Contrastive Learning",

  // Data Science & Analytics
  "Data Analysis", "Data Engineering", "Statistical Analysis", "Data Visualization",
  "Predictive Modeling", "Time Series Analysis", "A/B Testing", "Feature Engineering",
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Apache Spark",

  // Cloud & Infrastructure
  "Google Cloud Platform", "Microsoft Azure", "AWS", "Docker", "Kubernetes", "CI/CD",
  "Terraform", "Infrastructure as Code", "Serverless", "Microservices", "API Gateway",

  // Databases & Storage
  "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Pinecone", "Chroma", "FAISS",
  "Database Design", "Query Optimization", "Data Warehousing", "ETL Pipelines",

  // Development & Tools
  "Git", "GitHub Actions", "REST APIs", "GraphQL", "Webhooks", "WebSockets",
  "Jupyter Notebooks", "VS Code", "Linux", "Bash Scripting", "Testing", "Debugging"
];

export const Skills = () => {
  // Split skills into two rows
  const firstRowSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondRowSkills = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-20 px-4 z-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
        <div className="text-[40px] font-bold mt-[10px] text-center mb-[15px] text-white">
          Technical Skills
        </div>

        <div className="text-[20px] text-gray-300 mt-[5px] text-center max-w-[800px]">
          Comprehensive expertise across AI engineering, data science, and cloud technologies with 6+ years of experience delivering enterprise-grade solutions.
        </div>
      </div>

      <div className="w-full max-w-[1400px] space-y-12">
        {/* First Row - Left to Right Animation */}
        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030014] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030014] to-transparent z-10"></div>

          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {[...firstRowSkills, ...firstRowSkills].map((skill, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-[#110C2A]/50 backdrop-blur-sm border border-[#2A0E61] rounded-full px-6 py-3 text-gray-300 text-sm font-medium whitespace-nowrap hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(112,66,248,0.5)] transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left Animation */}
        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030014] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030014] to-transparent z-10"></div>

          <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused]">
            {[...secondRowSkills, ...secondRowSkills].map((skill, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-[#110C2A]/50 backdrop-blur-sm border border-[#2A0E61] rounded-full px-6 py-3 text-gray-300 text-sm font-medium whitespace-nowrap hover:border-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
