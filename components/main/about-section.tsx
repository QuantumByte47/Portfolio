"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export const AboutSection = () => {
  const stats = [
    { number: "4+", label: "Years Experience", icon: BriefcaseIcon },
    { number: "CS", label: "Degree", icon: AcademicCapIcon },
    { number: "22+", label: "Certifications", icon: AcademicCapIcon },
    { number: "Pakistan", label: "Location", icon: MapPinIcon }
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden z-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between complex AI research and practical enterprise solutions.
            Dedicated to building systems that not only perform but also scale and evolve.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-[#110C2A] border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-purple-900/20 flex items-center justify-center group-hover:bg-purple-900/40 transition-colors">
                  <stat.icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Background Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-[#030014] p-8 rounded-2xl border border-[#2A0E61]">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-yellow-400" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a strong foundation in Computer Science from Riphah International University, I have dedicated my career to mastering the complexities of Artificial Intelligence. My journey is defined by a commitment to excellence and a passion for solving hard problems.
                </p>
                <p>
                  I have successfully led AI engineering initiatives for global enterprises, transitioning from hands-on development to strategic architectural leadership. My expertise spans high-concurrency Voice AI, enterprise-grade RAG systems, and autonomous agentic workflows.
                </p>
                <p>
                  I believe in building software that is not just intelligent, but reliable and scalable. My focus is on delivering tangible business value through robust AI solutions, ensuring that every line of code contributes to a secure and efficient future.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-[#2A0E61]">
            {/* Placeholder for an image or abstract graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110C2A] to-[#030014] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-white mb-2">Always Learning</h4>
                <p className="text-gray-400 text-sm">Exploring new frontiers in AI every day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};