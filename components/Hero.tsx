"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FileText, CheckCircle, Zap, ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark w-fit mx-auto lg:mx-0 border border-brand-primary/20">
                        <Zap className="w-4 h-4 text-brand-primary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                            AI-Powered & ATS-Friendly
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Create a Resume <br />
                        <span className="text-gradient-brand">That Gets You Hired</span>
                    </h1>

                    <p className="text-xl text-text-secondary dark:text-gray-400 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                        Recruiter-approved templates. Designed to make you feel confident.
                        Experience a career upgrade that rewards every click.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link href="/builder">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-brand text-white font-bold text-lg shadow-glow-purple flex items-center justify-center gap-2 group"
                            >
                                Start Building Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <a href="#templates">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl glass dark:glass-dark border border-white/20 font-bold text-lg shadow-soft flex items-center justify-center gap-2"
                            >
                                View Templates
                            </motion.button>
                        </a>
                    </div>


                    <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-text-secondary">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>Free PDF downloads</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content: Live Preview Mockup */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative shapes */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '5s' }}></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '7s' }}></div>

                    <div className="relative glass dark:glass-dark rounded-3xl p-4 border border-white/20 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Mock Resume Header */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-soft space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2 w-full">
                                    <div className="h-8 w-48 bg-gray-100 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
                                    <div className="h-4 w-32 bg-gray-50 dark:bg-zinc-800/50 rounded-lg animate-pulse"></div>
                                </div>
                                <div className="w-12 h-12 bg-gradient-brand rounded-xl rotate-3 shadow-glow-purple"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 pt-4">
                                <div className="h-2 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 2, delay: 1 }}
                                        className="h-full bg-gradient-brand"
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-text-secondary">
                                    <span>ATS Optimizing...</span>
                                    <span className="text-brand-primary">75% Score</span>
                                </div>
                            </div>

                            {/* Mock Resume Content */}
                            <div className="space-y-3 pt-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="p-3 border border-gray-100 dark:border-zinc-800 rounded-xl space-y-2">
                                        <div className="h-3 w-2/3 bg-gray-100 dark:bg-zinc-800 rounded"></div>
                                        <div className="h-2 w-full bg-gray-50 dark:bg-zinc-800/50 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Dopamine Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-12 -right-4 bg-white dark:bg-black p-3 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-success" />
                            </div>
                            <div className="pr-2">
                                <p className="text-[10px] font-bold text-text-secondary uppercase">Section Complete</p>
                                <p className="text-xs font-bold">Nice work ✨</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
