"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitHubRepos } from "../sub/github-repos";

export const GitHubSection = () => {
  return (
    <section
      id="github-stats"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
        <div className="text-[40px] font-bold mt-[10px] text-center mb-[15px] text-white">
          GitHub Projects
        </div>
        <div className="text-[20px] text-gray-300 mt-[5px] text-center max-w-[800px]">
          Explore my open-source contributions and personal projects showcasing expertise in AI, machine learning, and software development.
        </div>
      </div>

      <GitHubRepos />

      <div className="mt-10">
        <a
          href="https://github.com/QuantumByte47"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 button-primary text-white rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,66,248,0.5)]"
        >
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
};