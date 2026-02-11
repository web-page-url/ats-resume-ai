"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Briefcase, GraduationCap, Cpu, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
    {
        id: 1,
        name: "Silicon Valley",
        type: "Tech",
        color: "from-blue-500/20 to-cyan-500/20",
        icon: <Cpu className="w-6 h-6" />,
        description: "Perfect for software engineers and data scientists.",
    },
    {
        id: 2,
        name: "Wall Street",
        type: "Professional",
        color: "from-indigo-500/20 to-purple-500/20",
        icon: <Briefcase className="w-6 h-6" />,
        description: "High-impact design for finance and management roles.",
    },
    {
        id: 3,
        name: "Ivy League",
        type: "Academic",
        color: "from-emerald-500/20 to-teal-500/20",
        icon: <GraduationCap className="w-6 h-6" />,
        description: "Clean and structured layout for researchers and students.",
    },
    {
        id: 4,
        name: "Rising Star",
        type: "Fresher",
        color: "from-orange-500/20 to-yellow-500/20",
        icon: <Sparkles className="w-6 h-6" />,
        description: "Highlights potential and core skills for new graduates.",
    },
];

const categories = ["All", "Tech", "Professional", "Academic", "Fresher"];

const TemplateGallery = () => {
    const [filter, setFilter] = useState("All");

    const filteredTemplates = filter === "All"
        ? templates
        : templates.filter(t => t.type === filter);

    return (
        <section id="templates" className="py-24 px-4 bg-white dark:bg-black/20">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark border border-brand-accent/20"
                    >
                        <Trophy className="w-4 h-4 text-brand-accent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                            World-Class Templates
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Choose Your <span className="text-gradient-brand">Career Catalyst</span>
                    </h2>
                    <p className="text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
                        Each template is engineered for ATS readability and recruiter delight.
                        Pick the one that tells your story best.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 border",
                                filter === cat
                                    ? "bg-gradient-brand text-white border-transparent shadow-glow-purple scale-105"
                                    : "glass dark:glass-dark border-white/10 text-text-secondary hover:border-brand-primary/50"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredTemplates.map((template) => (
                            <motion.div
                                key={template.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className={cn(
                                    "absolute inset-0 rounded-[32px] bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                                    template.color.replace('from-', 'from-').replace('to-', 'to-')
                                )}></div>

                                <div className="relative glass dark:glass-dark rounded-[32px] p-6 border border-white/10 shadow-soft h-full flex flex-col gap-6 overflow-hidden">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110",
                                        template.color
                                    )}>
                                        {React.cloneElement(template.icon as React.ReactElement<any>, { className: "w-6 h-6 text-brand-primary" })}
                                    </div>


                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-bold">{template.name}</h3>
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/20 text-[10px] font-black uppercase text-success border border-success/30"
                                            >
                                                <CheckCircle className="w-2 h-2" />
                                                ATS Perfect
                                            </motion.div>
                                        </div>
                                        <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-2">
                                            {template.description}
                                        </p>
                                    </div>

                                    {/* Mock Shell */}
                                    <div className="flex-1 w-full bg-white/50 dark:bg-black/50 rounded-2xl p-4 space-y-3 border border-white/5">
                                        <div className="h-2 w-3/4 bg-gray-100 dark:bg-zinc-800 rounded"></div>
                                        <div className="h-1.5 w-full bg-gray-50 dark:bg-zinc-800/50 rounded"></div>
                                        <div className="h-1.5 w-5/6 bg-gray-50 dark:bg-zinc-800/50 rounded"></div>
                                        <div className="pt-2 grid grid-cols-2 gap-2">
                                            <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg"></div>
                                            <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 rounded-xl bg-text-primary dark:bg-white dark:text-black font-bold text-sm shadow-soft group-hover:bg-gradient-brand transition-colors duration-500 group-hover:text-white"
                                    >
                                        Use This Template
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TemplateGallery;
