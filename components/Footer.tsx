"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 px-4 bg-white dark:bg-black/40 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 shadow-soft">
                            <img
                                src="/icon.png"
                                alt="ATS Resume AI"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            ATS Resume <span className="text-gradient-brand">AI</span>
                        </span>
                    </div>
                    <p className="text-text-secondary dark:text-gray-400 max-w-md text-sm italic">
                        "Careers are built step by step. You just took a powerful one."
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                    Created with
                    <Heart className="w-4 h-4 text-brand-accent fill-brand-accent animate-pulse" />
                    by
                    <a
                        href="https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b/?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary dark:text-white hover:text-brand-primary transition-colors border-b border-white/10 hover:border-brand-primary"
                    >
                        Anubhav
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
