"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Briefcase, GraduationCap, Cpu, CheckCircle, Smartphone, Rocket, Palette, ScrollText, Globe, Star, Zap } from "lucide-react";
import { useResumeStore } from "@/store/useResumeStore";
import { cn } from "@/lib/utils";

const templates = [
    {
        id: "gold",
        name: "Gold Standard",
        type: "Professional",
        color: "from-amber-500/20 to-orange-500/20",
        icon: <Trophy className="w-6 h-6" />,
        description: "The classic executive look. Perfection in every line.",
    },
    {
        id: "tech",
        name: "Silicon Valley",
        type: "Tech",
        color: "from-blue-500/20 to-cyan-500/20",
        icon: <Cpu className="w-6 h-6" />,
        description: "Modern tech aesthetic. Optimized for high-growth engineers.",
    },
    {
        id: "professional",
        name: "Wall Street",
        type: "Professional",
        color: "from-slate-500/20 to-zinc-500/20",
        icon: <Briefcase className="w-6 h-6" />,
        description: "High-impact design for finance and leadership roles.",
    },
    {
        id: "chrono",
        name: "The Chrono",
        type: "Fresher",
        color: "from-purple-500/20 to-pink-500/20",
        icon: <ScrollText className="w-6 h-6" />,
        description: "Strong focus on career progression and timeline.",
    },
    {
        id: "startup",
        name: "Startup Ready",
        type: "Tech",
        color: "from-emerald-500/20 to-green-500/20",
        icon: <Rocket className="w-6 h-6" />,
        description: "Fast-paced, high-energy layout for innovators.",
    },
    {
        id: "creative",
        name: "Creative Portfolio",
        type: "Creative",
        color: "from-rose-500/20 to-orange-500/20",
        icon: <Palette className="w-6 h-6" />,
        description: "Break the mold with this visually striking layout.",
    },
    {
        id: "tokyo",
        name: "Tokyo Clean",
        type: "Professional",
        color: "from-indigo-500/20 to-blue-500/20",
        icon: <Globe className="w-6 h-6" />,
        description: "Ultra-minimalist and perfectly balanced design.",
    },
    {
        id: "elegant",
        name: "Elegant Gold",
        type: "Executive",
        color: "from-yellow-500/20 to-amber-600/20",
        icon: <Star className="w-6 h-6" />,
        description: "Sophisticated and luxurious centered layout.",
    }
];

const categories = ["All", "Tech", "Professional", "Executive", "Fresher", "Creative"];

const TemplateGallery = () => {
    const [filter, setFilter] = useState("All");
    const router = useRouter();
    const setTemplate = useResumeStore((state) => state.setTemplate);

    const filteredTemplates = filter === "All"
        ? templates
        : templates.filter(t => t.type === filter);

    const handleSelectTemplate = (id: string) => {
        setTemplate(id);
        router.push("/builder");
    };

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
                        <Zap className="w-4 h-4 text-brand-accent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                            Recruiter-Approved Designs
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
                                    template.color
                                )}></div>

                                <div className="relative glass dark:glass-dark rounded-[32px] p-6 border border-white/10 shadow-soft h-full flex flex-col gap-6 overflow-hidden">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-inner",
                                        template.color
                                    )}>
                                        {React.cloneElement(template.icon as React.ReactElement<any>, { className: "w-6 h-6 text-brand-primary" })}
                                    </div>


                                    <div className="space-y-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-lg font-bold leading-tight">{template.name}</h3>
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-[9px] font-black uppercase text-success border border-success/20 shrink-0"
                                            >
                                                <CheckCircle className="w-2 h-2" />
                                                ATS Perfect
                                            </motion.div>
                                        </div>
                                        <p className="text-xs text-text-secondary dark:text-gray-400 line-clamp-2">
                                            {template.description}
                                        </p>
                                    </div>

                                    {/* Mock Shell - Visual Preview */}
                                    <div className="flex-1 w-full bg-white/40 dark:bg-black/40 rounded-2xl p-4 space-y-3 border border-white/5 shadow-inner">
                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-2 w-1/2 bg-brand-primary/30 rounded"></div>
                                            <div className="h-4 w-4 bg-brand-primary/20 rounded-full"></div>
                                        </div>
                                        {/* Experience blocks */}
                                        <div className="space-y-4">
                                            <div className="space-y-1.5">
                                                <div className="h-1.5 w-1/3 bg-text-primary/10 dark:bg-white/10 rounded"></div>
                                                <div className="h-1 w-full bg-text-secondary/5 dark:bg-white/5 rounded"></div>
                                                <div className="h-1 w-full bg-text-secondary/5 dark:bg-white/5 rounded"></div>
                                            </div>
                                            <div className="space-y-1.5 opacity-50">
                                                <div className="h-1.5 w-1/4 bg-text-primary/10 dark:bg-white/10 rounded"></div>
                                                <div className="h-1 w-full bg-text-secondary/5 dark:bg-white/5 rounded"></div>
                                                <div className="h-1 w-5/6 bg-text-secondary/5 dark:bg-white/5 rounded"></div>
                                            </div>
                                        </div>
                                        {/* Buttons/Stats area */}
                                        <div className="pt-2 grid grid-cols-3 gap-2">
                                            <div className="h-1.5 bg-success/20 rounded-full"></div>
                                            <div className="h-1.5 bg-brand-primary/20 rounded-full"></div>
                                            <div className="h-1.5 bg-brand-accent/20 rounded-full"></div>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleSelectTemplate(template.id)}
                                        className="w-full py-3 rounded-xl bg-text-primary dark:bg-white dark:text-black font-bold text-sm shadow-soft group-hover:bg-gradient-brand transition-all duration-500 group-hover:text-white"
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
