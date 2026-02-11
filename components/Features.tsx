"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Eye, MousePointer2, Sparkles, Layout } from "lucide-react";

const features = [
    {
        title: "Intelligence",
        desc: "AI that suggests high-impact verbs and keywords tailored to job descriptions.",
        icon: <Brain className="w-6 h-6" />,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Real-time Preview",
        desc: "See changes instantly. No more guessing how your PDF will look.",
        icon: <Eye className="w-6 h-6" />,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: "One-Click Layouts",
        desc: "Switch templates without losing a single character of your hard work.",
        icon: <Layout className="w-6 h-6" />,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Dopamine UI",
        desc: "Micro-interactions that celebrate every step of your career journey.",
        icon: <Sparkles className="w-6 h-6" />,
        color: "bg-amber-500/10 text-amber-500",
    },
];

const Features = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass dark:glass-dark p-8 rounded-[32px] border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
