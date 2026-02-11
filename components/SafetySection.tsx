"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

const SafetySection = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group p-[2px] rounded-[32px] overflow-hidden"
                >
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-brand animate-spin-slow opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white dark:bg-[#0F172A] rounded-[30px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-soft group-hover:shadow-glow-purple transition-all duration-700">
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-secondary/10 blur-[80px] rounded-full"></div>

                        <div className="flex-1 space-y-8 relative z-10">
                            <div className="flex items-center gap-3 text-brand-primary font-bold">
                                <ShieldCheck className="w-8 h-8" />
                                <span className="uppercase tracking-[0.2em] text-sm">Emotional Safety</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                You don’t need design skills. <br />
                                <span className="text-gradient-brand">We’ve already done the hard part.</span>
                            </h2>

                            <p className="text-xl text-text-secondary dark:text-gray-400 max-w-lg">
                                The hardest step is starting. That's why we've already set things up
                                so you can focus on what matters—your story.
                            </p>

                            {/* Automatic Progress Dopamine Hit */}
                            <div className="space-y-4 pt-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Adventure Started</span>
                                    <span className="text-3xl font-black text-brand-primary">5%</span>
                                </div>
                                <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "5%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                        className="h-full bg-gradient-brand shadow-glow-purple"
                                    />
                                </div>
                                <p className="text-xs font-medium text-text-secondary flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
                                    You're already 5% of the way to your dream job!
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 relative flex justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10 w-full max-w-xs aspect-square rounded-[40px] bg-gradient-brand p-1 shadow-glow-purple overflow-hidden transform hover:scale-105 transition-transform duration-500"
                            >
                                <div className="w-full h-full bg-white dark:bg-[#0B1020] rounded-[38px] flex items-center justify-center p-8">
                                    <div className="text-center space-y-4">
                                        <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Heart className="w-10 h-10 text-brand-primary fill-brand-primary/20" />
                                        </div>
                                        <p className="text-sm font-medium text-text-secondary italic">
                                            "I used to spend 5 hours on layout. Now I spend 5 minutes on content."
                                        </p>
                                        <div className="flex justify-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Sparkles key={star} className="w-4 h-4 text-brand-accent" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SafetySection;
