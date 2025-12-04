"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon, CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface RepoProps {
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}

export const GitHubRepoCard = ({ repo, index }: { repo: RepoProps; index: number }) => {
    return (
        <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block w-full"
        >
            <div className="h-full p-6 rounded-xl bg-[#110C2A] border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                            {repo.name}
                        </h3>
                        <CodeBracketIcon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                        {repo.description || "No description available for this project."}
                    </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                            <span>{repo.language || "Code"}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M6 3v12" />
                                <circle cx="18" cy="6" r="3" />
                                <circle cx="6" cy="18" r="3" />
                                <path d="M18 9a9 9 0 0 1-9 9" />
                            </svg>
                            <span>{repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};
