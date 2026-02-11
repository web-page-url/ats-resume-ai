"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass dark:glass-dark flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl border-b border-white/20 shadow-soft"
            >
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-brand rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center justify-center rounded-lg bg-white dark:bg-black border border-white/20 overflow-hidden w-10 h-10">
                            <img
                                src="/icon.png"
                                alt="ATS Resume AI"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-text-primary dark:text-text-invert">
                        ATS Resume <span className="text-gradient-brand">AI</span>
                    </span>
                </Link>

                {/* Center: Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Templates", "Builder", "ATS Score", "Pricing"].map((item) => (
                        <Link
                            key={item}
                            href="/builder"
                            className="text-sm font-medium text-text-secondary hover:text-text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Right: CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/builder">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden shadow-glow-purple"
                        >
                            <div className="absolute inset-0 bg-gradient-brand transition-all duration-300 group-hover:scale-110"></div>
                            <span className="relative flex items-center gap-2">
                                ✨ Build My Resume
                            </span>
                        </motion.button>
                    </Link>
                </div>

            </motion.div>
        </nav>
    );
};

export default Navbar;
