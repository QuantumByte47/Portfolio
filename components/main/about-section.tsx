"use client";

import { useState } from 'react';
import { 
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
// import { ContactForm } from './contact-form';

export const AboutSection = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const stats = [
    { number: "6+", label: "Years Experience", icon: BriefcaseIcon },
    { number: "CS", label: "Degree", icon: AcademicCapIcon },
    { number: "22+", label: "Certifications", icon: AcademicCapIcon },
    { number: "Pakistan", label: "Location", icon: MapPinIcon }
  ];

  const experience = [
    {
      company: "INEXOR",
      role: "Data Scientist",
      period: "05/2025 - Present",
      location: "Islamabad, Onsite",
      description: "Led end-to-end development of RAG-based LLM systems for financial industry, implementing hallucination detection, routing strategies, and response validation frameworks."
    },
    {
      company: "SuperAnnotate", 
      role: "Data Annotator",
      period: "01/2025 - 05/2024",
      location: "Islamabad, Onsite",
      description: "Evaluated and labeled AI chatbot responses to ensure accuracy, relevance, and coherence. Performed response comparison and quality validation for NLP models."
    },
    {
      company: "Voliom",
      role: "Data Analyst and AI Developer", 
      period: "2021 - Dec 2024",
      location: "USA",
      description: "Analyzed large datasets to extract actionable insights, developed data models, created visualizations and dashboards, conducted statistical analysis to identify trends."
    },
    {
      company: "Upwork",
      role: "Freelance ML Engineer",
      period: "01/2022 - 11/2024", 
      location: "USA",
      description: "Developed and implemented stable diffusion models for image story generation using advanced machine learning techniques."
    },
    {
      company: "Volunteer Work",
      role: "AI Researcher",
      period: "01/2021 - 02/2022",
      location: "USA",
      description: "Conducted research on machine learning algorithms and contributed to open-source AI projects."
    }
  ];

  return (
    <section id="about" className="relative py-12 px-4 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            AI Engineer & Data Scientist with 6+ years of experience building real-time AI systems, 
            multi-modal platforms, and enterprise-grade automation solutions. Leading development of 
            scalable AI applications and intelligent voice agents.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-200 border border-gray-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-blue-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Background */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Background</h3>
            <div className="space-y-4 text-black leading-relaxed">
              <p>
                I graduated from Riphah International University with a Bachelor&apos;s degree in Computer Science. 
                My academic focus was on developing and improving computer-based technologies, 
                systems, and solutions with specialization in AI and machine learning.
              </p>
              <p>
                With 6+ years of experience in AI engineering, I specialize in designing and deploying optimization-driven 
                algorithms and real-time inference engines. My expertise spans low-latency speech recognition, 
                transformer architectures, reinforcement learning, and distributed ML pipelines.
              </p>
              <p>
                I lead development of real-time AI systems, multi-modal platforms, and enterprise-grade automation 
                solutions, focusing on scalable products like AI-powered call centers, intelligent voice agents, 
                and multi-model AI applications that integrate seamlessly into business workflows.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={exp.company}
                  className="border-l-2 border-gradient-to-b from-purple-400 to-cyan-400 pl-4"
                >
                  <div 
                    className="cursor-pointer hover:bg-gray-50 transition-colors duration-200 p-2 -ml-2 rounded-lg"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-blue-800">{exp.company}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-black bg-white px-3 py-1 rounded-lg border border-gray-300 font-medium">
                              {exp.period}
                            </span>
                            {expandedExperience === index ? (
                              <ChevronUpIcon className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDownIcon className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                        </div>
                        <p className="text-black font-medium mb-1">{exp.role}</p>
                        <p className="text-gray-600 text-xs">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  {expandedExperience === index && (
                    <div className="mt-3 pl-2 animate-fadeIn">
                      <p className="text-black leading-relaxed text-sm bg-gray-50 p-3 rounded-lg">{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form - temporarily disabled */}
        {/* <ContactForm /> */}
      </div>
    </section>
  );
};