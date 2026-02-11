"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 px-4 bg-white dark:bg-black/40 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-primary" />
                        <span className="text-xl font-bold tracking-tight">
                            Resume<span className="text-gradient-brand">Craft</span>
                        </span>
                    </div>
                    <p className="text-text-secondary dark:text-gray-400 max-w-md text-sm italic">
                        "Careers are built step by step. You just took a powerful one."
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-medium text-text-secondary">
                    <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-text-secondary opacity-60">
                    Created with <Heart className="w-3 h-3 text-brand-accent fill-brand-accent" /> for the next generation of talent.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
