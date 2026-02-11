"use client";

import React from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { cn } from "@/lib/utils";
import { Layout } from "lucide-react";

export const templates = [
    { id: 'minimal', name: 'Minimal' },
    { id: 'modern', name: 'Modern' },
    { id: 'tech', name: 'Silicon Valley' },
    { id: 'professional', name: 'Wall Street' },
    { id: 'creative', name: 'Creative' },
    { id: 'harvard', name: 'Executive' },
    { id: 'compact', name: 'Compact' },
    { id: 'chrono', name: 'The Chrono' },
    { id: 'indigo', name: 'Indigo Aura' },
    { id: 'startup', name: 'Startup Ready' },
    { id: 'elegant', name: 'Elegant Gold' },
    { id: 'tokyo', name: 'Tokyo Clean' },
    { id: 'gold', name: 'The Gold Standard' },
];



const TemplateSelector = () => {
    const { selectedTemplate, setTemplate } = useResumeStore();

    return (
        <div className="flex items-center gap-2">
            <div className="glass dark:glass-dark rounded-xl p-1 flex gap-1 border border-white/5">
                <select
                    value={selectedTemplate}
                    onChange={(e) => setTemplate(e.target.value)}
                    className="bg-transparent text-sm font-bold px-4 py-2 outline-none cursor-pointer"
                >
                    {templates.map(t => (
                        <option key={t.id} value={t.id} className="dark:bg-bg-dark">
                            {t.name} Template
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TemplateSelector;
