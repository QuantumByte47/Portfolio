"use client";

import React from "react";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const experienceData = [
    {
        company: "Wortholic",
        role: "Lead AI Engineer",
        period: "Aug 2025 - Present",
        location: "Rawalpindi, Punjab, Pakistan · On-site",
        description: "Leading the strategic vision and execution of AI-driven enterprise solutions and SaaS platforms. Architecting end-to-end product lifecycles, combining cutting-edge AI research with production-grade engineering practices.",
        highlights: [
            "Developed NaturalFlow.ai, flagship Voice AI platform with custom LLM integration",
            "Architected AI call center hub processing 10K+ concurrent calls",
            "Led multidisciplinary teams across AI engineering and data science",
            "Deployed multiple AI MVPs and enterprise automation systems",
            "Implemented production-ready ML pipelines with 99.9% uptime"
        ],
        skills: ["LLMs (GPT-4, Claude)", "Voice AI", "Agentic AI", "RAG Systems", "Python", "TensorFlow", "Cloud Architecture"]
    },
    {
        company: "SimpleTalk AI",
        role: "Senior AI Engineer",
        period: "Jul 2025 - Aug 2025",
        location: "United States · Remote",
        description: "Led development of complex AI automation systems and LLM-powered enterprise applications.",
        highlights: [
            "Deployed enterprise automation system serving 50K+ users",
            "Reduced operational costs by 60% through intelligent workflow automation",
            "Architected scalable automation platforms for Fortune 500 clients"
        ],
        skills: ["Multi-Agent Systems", "LLMs", "Enterprise Architecture", "Advanced Automation"]
    },
    {
        company: "SimpleTalk AI",
        role: "AI Specialist",
        period: "Apr 2025 - Jun 2025",
        location: "United States · Remote",
        description: "Engineered the backend architecture for LLM orchestration, focusing on reliable function calling and server-side integration.",
        highlights: [
            "Designed control logic for precise tool calls",
            "Built robust Python APIs bridging LLMs with enterprise data",
            "Implemented strict JSON validation for production-ready outputs"
        ],
        skills: ["Python", "FastAPI", "Function Calling", "LLM Orchestration", "Backend Engineering"]
    },
    {
        company: "INEXOR",
        role: "Senior Data Scientist",
        period: "Apr 2025 - Jul 2025",
        location: "Islamabad, Pakistan · On-site",
        description: "Led AI research initiatives and advanced LLM system architecture for production-grade financial applications.",
        highlights: [
            "Architected multi-modal RAG system reducing response latency by 65%",
            "Led team of 4 data scientists in building production LLM applications",
            "Published internal research on hallucination mitigation techniques"
        ],
        skills: ["Advanced RAG", "LLM Fine-tuning", "MLOps", "Vector Databases", "Deep Learning"]
    },
    {
        company: "INEXOR",
        role: "Data Scientist",
        period: "Jan 2025 - Mar 2025",
        location: "Islamabad, Pakistan · On-site",
        description: "Developed advanced RAG-based LLM systems for financial applications, focusing on accuracy, reliability, and real-time data integration.",
        highlights: [
            "Reduced LLM hallucination rate by 73% through custom validation",
            "Implemented vector database optimization reducing query time by 60%",
            "Built real-time financial data pipelines processing 1M+ transactions daily"
        ],
        skills: ["RAG", "LLMs", "Vector Databases", "Financial Modeling", "Python", "TensorFlow"]
    },
    {
        company: "SuperAnnotate",
        role: "Senior Data Annotator",
        period: "Jul 2024 - Jun 2025",
        location: "California, United States · Remote",
        description: "Led data annotation projects for LLM evaluation and conversational AI quality assurance.",
        highlights: [
            "Evaluated 50K+ AI responses with 98% consistency score",
            "Developed annotation guidelines adopted across 3 client projects",
            "Reduced annotation errors by 45% through team training"
        ],
        skills: ["LLMs", "NLP", "Data Analysis", "Quality Assurance", "Python"]
    },
    {
        company: "Voliom",
        role: "Senior Data Analyst",
        period: "Jan 2023 - Jan 2025",
        location: "United States · Remote",
        description: "Led data science initiatives and advanced analytics projects with focus on machine learning and custom algorithm development.",
        highlights: [
            "Deployed 20+ machine learning models into production",
            "Built custom recommendation algorithm improving conversion by 45%",
            "Created automated ML pipeline reducing model training time by 80%"
        ],
        skills: ["Machine Learning", "Custom Algorithms", "Advanced Python", "Statistical Modeling"]
    },
    {
        company: "Voliom",
        role: "Data Analyst",
        period: "Jan 2022 - May 2023",
        location: "Pakistan",
        description: "Focused on statistical modeling, data visualization, and analytical application development.",
        highlights: [
            "Created 50+ automated dashboards for real-time business intelligence",
            "Implemented custom algorithms for data anomaly detection",
            "Reduced reporting time by 70% through automated visualization systems"
        ],
        skills: ["Python", "Pandas", "Statistical Analysis", "Machine Learning", "Data Visualization"]
    },
    {
        company: "Upwork",
        role: "Freelance Machine Learning Engineer",
        period: "Mar 2019 - Apr 2020",
        location: "Remote",
        description: "Developed and implemented stable diffusion models for image story generation.",
        highlights: [
            "Leveraged advanced machine learning techniques",
            "Worked with generative AI tools for image creation"
        ],
        skills: ["Image Generation", "Generative AI Tools", "Machine Learning"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-20">

            <div className="text-[40px] font-bold text-white py-10 text-center">
                Professional Experience
            </div>

            <div className="w-full max-w-6xl px-4 flex flex-col gap-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block"></div>

                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#030014] transform -translate-x-1/2 z-30 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

                        {/* Content Card */}
                        <div className="flex-1 md:w-1/2">
                            <div className="p-8 border border-[#2A0E61]/50 bg-[#110C2A]/30 backdrop-blur-md rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(112,66,248,0.2)] transition-all duration-300 group">
                                <div className="flex flex-col justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-white transition-all duration-300">{item.role}</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-gray-400 text-sm flex items-center gap-2 bg-[#030014]/50 px-3 py-1 rounded-full border border-[#2A0E61]">
                                            <CalendarIcon className="w-4 h-4 text-purple-400" />
                                            {item.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-lg font-semibold text-purple-300">{item.company}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                    <span className="text-gray-400 text-sm flex items-center gap-1">
                                        <MapPinIcon className="w-4 h-4" />
                                        {item.location}
                                    </span>
                                </div>

                                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="mb-6 bg-[#030014]/30 p-4 rounded-xl border border-[#2A0E61]/30">
                                    <ul className="list-none space-y-2">
                                        {item.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-[#2A0E61]/30 rounded-full border border-cyan-500/20 hover:bg-cyan-500/10 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Empty space for the other side of the timeline */}
                        <div className="hidden md:block flex-1"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
