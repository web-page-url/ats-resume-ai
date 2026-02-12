import { CheckCircle2, ShieldCheck, Zap, BarChart3, Search, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ATSScorePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark border border-brand-primary/20">
                        <BarChart3 className="w-4 h-4 text-brand-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                            Data-Driven Success
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Beat the <span className="text-gradient-brand">Applicant Tracking System</span>
                    </h1>
                    <p className="text-xl text-text-secondary dark:text-gray-400 max-w-3xl mx-auto">
                        75% of resumes are rejected by ATS before a human even sees them.
                        Our real-time scoring engine ensures you're in the top 25%.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/builder">
                            <button className="px-8 py-4 rounded-2xl bg-gradient-brand text-white font-bold text-lg shadow-glow-purple transition-transform hover:scale-105">
                                Check Your Score Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features/How it Works */}
            <section className="py-20 px-4 bg-white/5 dark:bg-black/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="glass dark:glass-dark p-8 rounded-[32px] border border-white/10 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">Keyword Analysis</h3>
                        <p className="text-text-secondary dark:text-gray-400">
                            Our AI scans your resume for the specific industry keywords recruiters are searching for.
                        </p>
                    </div>

                    <div className="glass dark:glass-dark p-8 rounded-[32px] border border-white/10 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">Formatting Check</h3>
                        <p className="text-text-secondary dark:text-gray-400">
                            We ensure your layout is perfectly readable by automated parsers, avoiding technical rejections.
                        </p>
                    </div>

                    <div className="glass dark:glass-dark p-8 rounded-[32px] border border-white/10 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <FileCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">Real-time Feedback</h3>
                        <p className="text-text-secondary dark:text-gray-400">
                            Get instant action points as you type to improve your score from a 40 to a 95+.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA/Stat Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto glass dark:glass-dark rounded-[40px] p-12 border border-white/10 relative overflow-hidden text-center space-y-8">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10"></div>

                    <h2 className="text-4xl font-extrabold">Ready to secure your next interview?</h2>
                    <p className="text-lg text-text-secondary opacity-80">
                        Join 10,000+ professionals who used our ATS engine to land roles at Google, Meta, and Amazon.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-success w-5 h-5" />
                            <span className="font-medium text-sm">99% ATS Pass Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-success w-5 h-5" />
                            <span className="font-medium text-sm">Real-time Optimization</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
