"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Download, Layout as LayoutIcon, Type, Briefcase, GraduationCap, Code } from "lucide-react";
import { useResumeStore } from "@/store/useResumeStore";
import Editor from "../../components/builder/Editor";
import ResumePreview from "../../components/builder/ResumePreview";
import TemplateSelector from "../../components/builder/TemplateSelector";
import DopamineStats from "../../components/DopamineStats";

import { motion } from "framer-motion";

const BuilderPage = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "My_Resume",
    });

    return (
        <div className="min-h-screen bg-bg-light dark:bg-bg-dark pt-24 pb-32">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
                <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black tracking-tight">
                            Resume <span className="text-gradient-brand">Builder</span>
                        </h1>
                        <p className="text-text-secondary text-sm font-medium">
                            Every edit is a step closer to your dream job. ✨
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <TemplateSelector />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePrint()}
                            className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold flex items-center gap-2 shadow-glow-purple"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </motion.button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Editor */}
                    <section className="space-y-6 lg:sticky lg:top-28 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 custom-scrollbar">
                        <Editor />
                    </section>

                    {/* Right: Preview */}
                    <section className="relative">
                        <div className="lg:sticky lg:top-28">
                            <div className="relative glass dark:glass-dark rounded-3xl p-4 md:p-8 shadow-soft border border-white/10 overflow-hidden min-h-[800px] flex justify-center">
                                <div ref={componentRef} className="w-full max-w-[800px]">
                                    <ResumePreview />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <DopamineStats progress={85} atsScore={92} message="Your summary is powerful! ✨" />
        </div>
    );
};

export default BuilderPage;
