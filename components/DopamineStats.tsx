"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TrendingUp, CheckCircle2, Award, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface DopamineStatsProps {
    progress: number;
    atsScore: number;
    message?: string;
}

const DopamineStats = ({ progress, atsScore, message = "This is looking amazing ✨" }: DopamineStatsProps) => {
    const [displayScore, setDisplayScore] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        // Animate score count-up
        let start = 0;
        const end = atsScore;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayScore(end);
                clearInterval(timer);
            } else {
                setDisplayScore(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [atsScore]);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass dark:glass-dark rounded-[24px] p-6 border border-white/20 shadow-glow-purple flex flex-col md:flex-row items-center gap-8 overflow-hidden"
            >
                {/* Progress System */}
                <div className="flex-1 w-full space-y-3">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">Adventure Progress</p>
                            <p className="text-sm font-bold text-text-primary dark:text-white flex items-center gap-2">
                                {message}
                            </p>
                        </div>
                        <span className="text-2xl font-black text-brand-primary">{progress}%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-brand shadow-glow-purple relative"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-shimmer"></div>
                        </motion.div>
                    </div>
                </div>

                {/* ATS Score System */}
                <div className="flex items-center gap-6 pl-0 md:pl-8 border-l-0 md:border-l border-white/10">
                    <div className="relative">
                        <svg className="w-20 h-20 -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="6"
                                className="text-gray-100 dark:text-zinc-800"
                            />
                            <motion.circle
                                cx="40"
                                cy="40"
                                r="36"
                                fill="transparent"
                                stroke="url(#ats-gradient)"
                                strokeWidth="6"
                                strokeDasharray={226}
                                initial={{ strokeDashoffset: 226 }}
                                animate={{ strokeDashoffset: 226 - (226 * atsScore) / 100 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="ats-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4F46E5" />
                                    <stop offset="100%" stopColor="#06B6D4" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xl font-black">{displayScore}</span>
                            <span className="text-[8px] font-black uppercase text-text-secondary tracking-tighter">ATS Score</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-success font-black text-xs uppercase tracking-widest">
                            <TrendingUp className="w-4 h-4" />
                            Level Up!
                        </div>
                        <p className="text-[10px] text-text-secondary dark:text-gray-400 font-medium max-w-[140px]">
                            Your resume is stronger than <span className="text-brand-primary font-bold">82%</span> of others.
                        </p>
                    </div>
                </div>

                {/* Floating Celebration Elements */}
                {progress === 100 && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-0 right-0 p-2"
                    >
                        <Sparkles className="w-6 h-6 text-brand-accent animate-ping" />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default DopamineStats;
