"use client";

import React, { useEffect, useState } from "react";
import { GitHubRepoCard } from "./github-repo-card";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export const GitHubRepos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/QuantumByte47/repos?sort=updated&per_page=6");
                if (!response.ok) throw new Error("Failed to fetch repos");
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center py-10">
                <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-20">
            {repos.map((repo, index) => (
                <GitHubRepoCard key={repo.id} repo={repo} index={index} />
            ))}
        </div>
    );
};
