import TemplateGallery from "@/components/TemplateGallery";
import { Sparkles } from "lucide-react";

export default function TemplatesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="pt-32 pb-12 px-4 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark border border-brand-accent/20">
                    <Sparkles className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                        Premium Selection
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    Professional <span className="text-gradient-brand">Templates</span>
                </h1>
                <p className="text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
                    Browse our gallery of recruiter-approved, ATS-optimized layouts designed to land you the interview.
                </p>
            </div>

            <TemplateGallery />
        </div>
    );
}
