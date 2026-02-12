import { Check, Sparkles, Zap, Rocket, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Starter",
        price: "$9",
        description: "Perfect for testing the waters and creating a single high-impact resume.",
        features: [
            "All Basic Templates",
            "Unlimited PDF Downloads",
            "Basic ATS Analysis",
            "Real-time Editor",
            "Community Support"
        ],
        cta: "Start for Free",
        popular: false,
        color: "bg-white/5 dark:bg-white/5"
    },
    {
        name: "Pro Professional",
        price: "$14",
        priceDetail: "/year",
        description: "For serious job seekers looking for an edge in the competitive market.",
        features: [
            "All Premium Templates",
            "Advanced AI Keyword Suggestions",
            "Full ATS Optimization Score",
            "LinkedIn Profile Import",
            "Priority Support",
            "Multiple Versions/Profiles"
        ],
        cta: "Get Pro Access",
        popular: true,
        color: "bg-gradient-brand text-white"
    },
    {
        name: "Executive",
        price: "$19",
        priceDetail: "/one-time",
        description: "Lifetime access to all future updates and premium career tools.",
        features: [
            "Everything in Pro",
            "Lifetime Updates",
            "1-on-1 Resume Review (AI)",
            "Cover Letter Builder",
            "Portfolio Website Builder",
            "Early Access to Features"
        ],
        cta: "Go Unlimited",
        popular: false,
        color: "bg-white/5 dark:bg-white/5"
    }
];

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-20 px-4 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark border border-brand-accent/20">
                    <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                        Simple Transparent Pricing
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    Invest in Your <span className="text-gradient-brand">Future</span>
                </h1>
                <p className="text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
                    Choose the plan that fits your career stage. No hidden fees, cancel anytime.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "relative glass dark:glass-dark rounded-[40px] p-10 border border-white/10 flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300 shadow-soft",
                                tier.popular && "border-brand-primary/50 shadow-glow-purple scale-105 z-10"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 rounded-full bg-brand-primary text-[10px] font-black uppercase tracking-widest text-white shadow-glow-purple">
                                    Most Popular
                                </div>
                            )}

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black">{tier.price}</span>
                                    {tier.priceDetail && (
                                        <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{tier.priceDetail}</span>
                                    )}
                                </div>
                                <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="text-xs font-black uppercase tracking-widest opacity-30 pt-4 border-t border-white/5">
                                    What's Included
                                </div>
                                <ul className="space-y-4">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                                            <div className={cn(
                                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                                                tier.popular ? "bg-white/20" : "bg-brand-primary/10"
                                            )}>
                                                <Check className={cn("w-3 h-3", tier.popular ? "text-white" : "text-brand-primary")} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/builder" className="mt-4">
                                <button className={cn(
                                    "w-full py-4 rounded-2xl font-bold transition-all shadow-soft",
                                    tier.popular
                                        ? "bg-white text-brand-primary hover:bg-opacity-90"
                                        : "bg-text-primary text-white dark:bg-white dark:text-black hover:opacity-90"
                                )}>
                                    {tier.cta}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
