"use client";

import React from "react";
import { useResumeStore, ResumeData } from "@/store/useResumeStore";
import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, MapPin, Globe } from "lucide-react";

// Helper component for bullet points
const BulletList = ({ text, className = "text-[11px]" }: { text: string; className?: string }) => {
    if (!text) return null;
    return (
        <ul className="list-none space-y-1.5">
            {text.split('\n').filter(b => b.trim()).map((bullet, idx) => (
                <li key={idx} className={cn("flex items-start gap-2 leading-normal text-left", className)}>
                    <span className="mt-[0.55em] w-1 h-1 shrink-0 rounded-full bg-current opacity-60" />
                    <span className="flex-1">{bullet.trim().endsWith('.') || bullet.trim().endsWith(';') ? bullet.trim() : bullet.trim() + '.'}</span>
                </li>
            ))}
        </ul>
    );
};

// 1. Gold Standard (The one from the user image)
const GoldStandardTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-10 bg-white text-slate-900 h-full font-serif leading-snug">
        <div className="text-center mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-4xl font-bold uppercase tracking-widest mb-3 border-none">{data.personalInfo.fullName}</h1>
            <div className="flex justify-center flex-wrap gap-4 text-[11px] font-medium text-slate-600">
                <div className="flex items-center gap-1">
                    <Mail size={12} strokeWidth={2.5} />
                    <span>{data.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Phone size={12} strokeWidth={2.5} />
                    <span>{data.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Linkedin size={12} strokeWidth={2.5} />
                    <span>{data.personalInfo.website?.replace("https://", "") || "linkedin.com/in/user"}</span>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-2">Summary</h2>
                <p className="text-[11px] leading-relaxed text-slate-800 font-sans italic">{data.personalInfo.summary}</p>
            </section>

            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Experience</h2>
                <div className="space-y-6">
                    {data.experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold">{exp.role}</h3>
                                <span className="text-[11px] font-bold text-slate-500 uppercase">{exp.date}, {exp.location}</span>
                            </div>
                            <p className="text-[12px] font-bold text-slate-700 mb-2">{exp.company}</p>
                            <BulletList text={exp.description} className="text-[11px] text-slate-700 text-justify" />
                        </div>
                    ))}
                </div>
            </section>

            {data.projects && data.projects.length > 0 && (
                <section>
                    <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-3">Projects</h2>
                    <div className="space-y-4">
                        {data.projects.map(proj => (
                            <div key={proj.id}>
                                <h3 className="text-[12px] font-bold mb-1 underline">{proj.name}</h3>
                                <BulletList text={proj.description} className="text-[11px] text-slate-700 text-justify" />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-3">Education</h2>
                {data.education.map(edu => (
                    <div key={edu.id} className="mb-3">
                        <div className="flex justify-between font-bold text-[12px]">
                            <span>{edu.degree}</span>
                            <span className="text-slate-500">{edu.date}</span>
                        </div>
                        <p className="text-[11px] italic text-slate-600">{edu.school} • {edu.location}</p>
                    </div>
                ))}
            </section>

            {data.certifications && data.certifications.length > 0 && (
                <section>
                    <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-3">Certifications</h2>
                    <div className="space-y-1">
                        {data.certifications.map(cert => (
                            <p key={cert.id} className="text-[11px] font-bold text-slate-800">{cert.name}</p>
                        ))}
                    </div>
                </section>
            )}

            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-3">Skills</h2>
                <div className="space-y-1">
                    {data.skills.map((skill, idx) => (
                        <p key={idx} className="text-[11px] leading-snug">
                            {skill.includes(':') ? (
                                <>
                                    <span className="font-bold underline">{skill.split(':')[0]}:</span>
                                    <span className="ml-1">{skill.split(':')[1]}</span>
                                </>
                            ) : (
                                skill
                            )}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// 2. Minimal Template
const MinimalTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-12 bg-white text-slate-800 h-full font-serif leading-relaxed">
        <div className="text-center mb-10 pb-6 border-b border-slate-100">
            <h1 className="text-3xl font-bold uppercase tracking-tighter mb-2 border-none">{data.personalInfo.fullName}</h1>
            <div className="text-xs text-slate-500 space-x-2">
                <span>{data.personalInfo.email}</span> • <span>{data.personalInfo.phone}</span> • <span>{data.personalInfo.location}</span>
            </div>
        </div>
        <div className="space-y-8">
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Summary</h2>
                <p className="text-sm">{data.personalInfo.summary}</p>
            </section>
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience</h2>
                <div className="space-y-6">
                    {data.experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between font-bold text-sm">
                                <span>{exp.company}</span>
                                <span>{exp.date}</span>
                            </div>
                            <p className="text-sm italic text-slate-600 mb-2">{exp.role}</p>
                            <BulletList text={exp.description} className="text-sm text-slate-500" />
                        </div>
                    ))}
                </div>
            </section>
            {data.projects && data.projects.length > 0 && (
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Projects</h2>
                    <div className="space-y-4">
                        {data.projects.map(proj => (
                            <div key={proj.id}>
                                <h3 className="text-sm font-bold mb-1">{proj.name}</h3>
                                <BulletList text={proj.description} className="text-xs text-slate-500" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
            <div className="grid grid-cols-2 gap-8 pt-4">
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Education</h2>
                    {data.education.map(edu => (
                        <div key={edu.id} className="mb-2">
                            <p className="text-sm font-bold">{edu.school}</p>
                            <p className="text-xs text-slate-500">{edu.degree}</p>
                        </div>
                    ))}
                </section>
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map(s => <span key={s} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs">{s}</span>)}
                    </div>
                </section>
            </div>
        </div>
    </div>
);

// 3. Modern Template
const ModernTemplate = ({ data }: { data: ResumeData }) => (
    <div className="flex bg-white h-full min-h-[1050px] font-sans">
        <div className="w-1/3 bg-[#1e293b] text-white p-8 space-y-8">
            <div>
                <h1 className="text-2xl font-black uppercase leading-tight border-none mb-1">{data.personalInfo.fullName}</h1>
                <div className="w-10 h-1 bg-sky-400 mt-4"></div>
            </div>
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Contact</h2>
                <div className="text-xs opacity-70 space-y-2">
                    <p>{data.personalInfo.email}</p>
                    <p>{data.personalInfo.phone}</p>
                    <p>{data.personalInfo.location}</p>
                </div>
            </section>
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                    {data.skills.map(s => <span key={s} className="text-[10px] px-2 py-1 bg-white/10 rounded">{s}</span>)}
                </div>
            </section>
        </div>
        <div className="w-2/3 p-10 space-y-10">
            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-slate-100 pb-2 mb-4">Profile</h2>
                <p className="text-sm text-slate-600 italic leading-relaxed">{data.personalInfo.summary}</p>
            </section>
            <section>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-slate-100 pb-2 mb-6">Experience</h2>
                <div className="space-y-8">
                    {data.experience.map(exp => (
                        <div key={exp.id} className="relative pl-6 border-l-2 border-slate-100">
                            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-sky-400 rounded-full"></div>
                            <div className="flex justify-between font-bold text-sm mb-1">
                                <span>{exp.role}</span>
                                <span className="text-slate-400 text-xs">{exp.date}</span>
                            </div>
                            <p className="text-xs font-bold text-sky-600 mb-2">{exp.company}</p>
                            <BulletList text={exp.description} className="text-xs text-slate-500" />
                        </div>
                    ))}
                </div>
            </section>
            {data.projects && data.projects.length > 0 && (
                <section>
                    <h2 className="text-sm font-black uppercase tracking-widest border-b border-slate-100 pb-2 mb-6">Projects</h2>
                    <div className="space-y-6">
                        {data.projects.map(proj => (
                            <div key={proj.id}>
                                <h3 className="text-sm font-bold text-slate-800 mb-1">{proj.name}</h3>
                                <BulletList text={proj.description} className="text-xs text-slate-500" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    </div>
);

// 4. Tech Template
const TechTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-10 bg-[#0f172a] text-slate-400 h-full font-mono">
        <div className="border border-slate-700 p-8 rounded-lg space-y-8">
            <header>
                <h1 className="text-4xl font-black text-sky-400 border-none italic mb-2 uppercase">{data.personalInfo.fullName}</h1>
                <p className="text-[10px] space-x-4 opacity-50 uppercase tracking-widest font-bold">
                    <span>{data.personalInfo.email}</span>
                    <span>{data.personalInfo.phone}</span>
                    <span>{data.personalInfo.location}</span>
                </p>
            </header>
            <p className="text-sm text-white/60">&gt; {data.personalInfo.summary}</p>
            <section>
                <h2 className="text-sky-400 font-black mb-4 uppercase text-xs">[ EXPERIENCES ]</h2>
                {data.experience.map(exp => (
                    <div key={exp.id} className="mb-6 space-y-1">
                        <div className="flex justify-between text-xs font-bold text-white">
                            <span>{exp.company} // {exp.role}</span>
                            <span className="text-sky-400/50">{exp.date}</span>
                        </div>
                        <BulletList text={exp.description} className="text-[10px] opacity-60 ml-2" />
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-sky-400 font-black mb-4 uppercase text-xs">[ SKILLS ]</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px]">
                    {data.skills.map(s => <span key={s} className="text-white">#{s}</span>)}
                </div>
            </section>
        </div>
    </div>
);

// 5. WallStreet Template
const WallStreetTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-12 bg-white text-black h-full font-serif border-t-[12px] border-black">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-black uppercase tracking-tight mb-2 border-none ">{data.personalInfo.fullName}</h1>
            <div className="text-[10px] font-bold space-x-3 uppercase">
                <span>{data.personalInfo.location}</span> • <span>{data.personalInfo.phone}</span> • <span>{data.personalInfo.email}</span>
            </div>
        </div>
        <div className="space-y-6">
            <section>
                <h2 className="text-[12px] font-black border-b-2 border-black uppercase pb-0.5 mb-3">Professional Experience</h2>
                {data.experience.map(exp => (
                    <div key={exp.id} className="mb-4">
                        <div className="flex justify-between font-bold uppercase text-[11px]">
                            <span>{exp.company}</span>
                            <span>{exp.date}</span>
                        </div>
                        <div className="flex justify-between italic text-[11px] mb-1">
                            <span>{exp.role}</span>
                            <span>{exp.location}</span>
                        </div>
                        <BulletList text={exp.description} className="text-[11px] leading-relaxed" />
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-[12px] font-black border-b-2 border-black uppercase pb-0.5 mb-3">Education</h2>
                {data.education.map(edu => (
                    <div key={edu.id} className="mb-2">
                        <div className="flex justify-between font-bold uppercase text-[11px]">
                            <span>{edu.school}</span>
                            <span>{edu.date}</span>
                        </div>
                        <p className="text-[11px] italic">{edu.degree}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-[12px] font-black border-b-2 border-black uppercase pb-0.5 mb-2">Skills & Additional</h2>
                <p className="text-[11px] leading-relaxed">
                    <span className="font-bold uppercase">Technical Skills: </span>{data.skills.join(", ")}
                </p>
            </section>
        </div>
    </div>
);

// 6. Creative Template
const CreativeTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-10 bg-zinc-50 h-full font-sans text-zinc-900 border-l-[30px] border-brand-primary">
        <header className="mb-12">
            <h1 className="text-6xl font-black bg-gradient-brand bg-clip-text text-transparent leading-none uppercase tracking-tighter mb-2 border-none">{data.personalInfo.fullName}</h1>
            <p className="text-lg font-bold opacity-30 uppercase tracking-widest">{data.personalInfo.location} / {data.personalInfo.phone}</p>
        </header>
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 space-y-12">
                <section className="bg-brand-primary/5 p-6 rounded-3xl">
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tighter">My Story</h2>
                    <p className="text-sm italic opacity-70 leading-relaxed">{data.personalInfo.summary}</p>
                </section>
                <section>
                    <h2 className="text-2xl font-black uppercase mb-6 tracking-tighter">Adventures</h2>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-8">
                            <h3 className="text-xl font-black text-brand-primary uppercase mb-1">{exp.role}</h3>
                            <p className="font-bold text-xs opacity-40 mb-3">@ {exp.company} // {exp.date}</p>
                            <BulletList text={exp.description} className="text-sm leading-relaxed" />
                        </div>
                    ))}
                </section>
            </div>
            <div className="col-span-4 space-y-10">
                <section>
                    <h2 className="text-2xl font-black uppercase mb-6 tracking-tighter text-brand-secondary">Arsenal</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map(s => <span key={s} className="px-3 py-1 bg-white border border-brand-primary/20 rounded-full text-[10px] font-bold shadow-soft">{s}</span>)}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tighter">Study</h2>
                    {data.education.map(edu => (
                        <div key={edu.id} className="mb-4">
                            <p className="font-black text-sm">{edu.school}</p>
                            <p className="text-xs opacity-50">{edu.degree}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    </div>
);

// 7. Executive (Harvard) Template
const ExecutiveTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-16 bg-white text-slate-800 h-full font-serif text-center">
        <div className="border-b-2 border-slate-900 pb-10 mb-10">
            <h1 className="text-5xl font-light scale-y-110 tracking-[0.2em] uppercase mb-4 border-none text-slate-900">{data.personalInfo.fullName}</h1>
            <div className="flex justify-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
                <span>{data.personalInfo.location}</span> • <span>{data.personalInfo.email}</span> • <span>{data.personalInfo.phone}</span>
            </div>
        </div>
        <div className="max-w-2xl mx-auto space-y-12 text-left">
            <p className="text-md text-center italic text-slate-600 leading-relaxed px-10">{data.personalInfo.summary}</p>
            <section>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b border-slate-100 pb-2 mb-8 text-slate-300">Experience</h2>
                <div className="space-y-10">
                    {data.experience.map(exp => (
                        <div key={exp.id} className="grid grid-cols-4 gap-4">
                            <div className="col-span-1 text-[10px] font-black uppercase text-slate-400 pt-1">{exp.date}</div>
                            <div className="col-span-3">
                                <h3 className="text-lg font-bold uppercase tracking-tight mb-1">{exp.role}</h3>
                                <p className="text-sm font-medium text-slate-500 mb-3">{exp.company}</p>
                                <BulletList text={exp.description} className="text-xs leading-relaxed opacity-80" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

// 8. Compact Template
const CompactTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-8 bg-white h-full font-sans text-[10px] leading-tight scholar-style">
        <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-4">
            <div>
                <h1 className="text-2xl font-black uppercase border-none">{data.personalInfo.fullName}</h1>
                <p className="font-bold opacity-60 underline italic">{data.personalInfo.location}</p>
            </div>
            <div className="text-right text-xs uppercase font-black">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
            </div>
        </div>
        <div className="space-y-4">
            <section>
                <h2 className="bg-black text-white px-2 py-0.5 inline-block font-black uppercase mb-2">Summary</h2>
                <p>{data.personalInfo.summary}</p>
            </section>
            <section>
                <h2 className="bg-black text-white px-2 py-0.5 inline-block font-black uppercase mb-2">History</h2>
                {data.experience.map(exp => (
                    <div key={exp.id} className="mb-3">
                        <div className="flex justify-between font-black uppercase">
                            <span>{exp.company} // {exp.role}</span>
                            <span>{exp.date}</span>
                        </div>
                        <BulletList text={exp.description} className="opacity-70 mt-1" />
                    </div>
                ))}
            </section>
            <div className="grid grid-cols-2 gap-4">
                <section>
                    <h2 className="underline font-black uppercase mb-1">Knowledge</h2>
                    <p>{data.skills.join(", ")}</p>
                </section>
                <section>
                    <h2 className="underline font-black uppercase mb-1">Academics</h2>
                    {data.education.map(edu => <p key={edu.id}><span className="font-bold">{edu.school}</span> ({edu.date})</p>)}
                </section>
            </div>
        </div>
    </div>
);

// Additional templates that were added previously
const ChronoTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-10 bg-white text-black h-full font-serif border-8 border-double border-slate-100">
        <div className="border-b-4 border-black pb-4 mb-8 text-center">
            <h1 className="text-4xl font-black uppercase tracking-widest border-none mb-2">{data.personalInfo.fullName}</h1>
            <p className="text-xs font-bold tracking-widest">{data.personalInfo.location} | {data.personalInfo.phone} | {data.personalInfo.email}</p>
        </div>
        <div className="space-y-8">
            <section>
                <h2 className="text-lg font-black uppercase mb-4 bg-slate-100 px-4 py-1">Experience</h2>
                {data.experience.map(exp => (
                    <div key={exp.id} className="mb-6">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-md font-black">{exp.company}</h3>
                            <span className="text-sm font-bold italic">{exp.date}</span>
                        </div>
                        <p className="text-sm font-bold uppercase mb-2 tracking-tighter text-slate-600">{exp.role}</p>
                        <BulletList text={exp.description} className="text-sm leading-relaxed" />
                    </div>
                ))}
            </section>
            <section>
                <h2 className="text-lg font-black uppercase mb-4 bg-slate-100 px-4 py-1">Skills</h2>
                <p className="text-sm leading-relaxed font-bold italic">{data.skills.join(" • ")}</p>
            </section>
        </div>
    </div>
);

const IndigoTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-0 bg-white h-full font-sans overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-700 to-violet-900 p-12 text-white">
            <h1 className="text-5xl font-black tracking-tighter border-none mb-4">{data.personalInfo.fullName}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium opacity-80 uppercase tracking-widest">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.location}</span>
            </div>
        </div>
        <div className="p-12 grid grid-cols-12 gap-12">
            <div className="col-span-8 space-y-10">
                <section>
                    <h2 className="text-2xl font-black text-indigo-900 mb-6 uppercase tracking-tighter border-b-2 border-indigo-100 pb-2">Experience</h2>
                    <div className="space-y-8">
                        {data.experience.map(exp => (
                            <div key={exp.id} className="group">
                                <h3 className="text-lg font-bold text-slate-800 transition-colors group-hover:text-indigo-600">{exp.role}</h3>
                                <div className="flex justify-between text-sm font-bold text-indigo-400 mb-3">
                                    <span>{exp.company}</span>
                                    <span>{exp.date}</span>
                                </div>
                                <BulletList text={exp.description} className="text-sm text-slate-500 leading-relaxed" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className="col-span-4 space-y-10">
                <section>
                    <h2 className="text-lg font-black text-slate-800 mb-4 uppercase tracking-widest">Expertise</h2>
                    <div className="flex flex-wrap gap-2 text-[10px]">
                        {data.skills.map(s => <span key={s} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-100">{s}</span>)}
                    </div>
                </section>
            </div>
        </div>
    </div>
);

const StartupTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-12 bg-white text-zinc-900 h-full font-sans selection:bg-yellow-200">
        <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-8 mb-12">
            <div>
                <h1 className="text-5xl font-black tracking-tight border-none">{data.personalInfo.fullName}</h1>
                <p className="text-lg font-medium opacity-40">{data.personalInfo.location}</p>
            </div>
            <div className="text-right text-sm space-y-1 font-bold">
                <p className="text-zinc-400">{data.personalInfo.email}</p>
                <p className="text-zinc-400">{data.personalInfo.phone}</p>
            </div>
        </header>
        <div className="space-y-16">
            <section className="grid grid-cols-4 gap-8">
                <div className="col-span-1 text-xs font-black uppercase tracking-[0.2em] pt-1 text-zinc-300">About</div>
                <div className="col-span-3 text-lg leading-relaxed font-medium">{data.personalInfo.summary}</div>
            </section>
            <section className="grid grid-cols-4 gap-8">
                <div className="col-span-1 text-xs font-black uppercase tracking-[0.2em] pt-1 text-zinc-300">Work</div>
                <div className="col-span-3 space-y-10">
                    {data.experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-black">{exp.role}</h3>
                                <span className="text-xs font-black text-zinc-300">{exp.date}</span>
                            </div>
                            <p className="font-bold text-zinc-500 mb-4 uppercase text-xs tracking-widest">@ {exp.company}</p>
                            <BulletList text={exp.description} className="text-zinc-600 leading-relaxed" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

const ElegantTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-16 bg-[#fafafa] text-slate-800 h-full font-serif flex flex-col items-center">
        <header className="w-full text-center space-y-6 mb-16 border-b border-slate-200 pb-12">
            <h1 className="text-6xl font-extralight tracking-[0.3em] uppercase border-none text-slate-900">{data.personalInfo.fullName}</h1>
            <div className="flex justify-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
                <span>{data.personalInfo.location}</span> • <span>{data.personalInfo.phone}</span> • <span>{data.personalInfo.email}</span>
            </div>
        </header>
        <div className="w-full max-w-2xl space-y-16">
            <section>
                <h2 className="text-xs text-center font-black tracking-[0.4em] uppercase mb-10 text-slate-300">Experience</h2>
                <div className="space-y-12">
                    {data.experience.map(exp => (
                        <div key={exp.id} className="text-center">
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-1">{exp.role}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter italic mb-4">{exp.company} // {exp.date}</p>
                            <div className="text-slate-500 max-w-lg mx-auto italic">
                                <BulletList text={exp.description} className="text-sm" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

const TokyoTemplate = ({ data }: { data: ResumeData }) => (
    <div className="p-10 bg-white text-zinc-900 h-full font-sans border-[20px] border-zinc-50">
        <div className="border border-zinc-900 p-8 h-full flex flex-col justify-between">
            <div>
                <header className="mb-12">
                    <h1 className="text-5xl font-black tracking-tighter uppercase leading-none border-none mb-1">{data.personalInfo.fullName}</h1>
                    <p className="text-xs font-black uppercase tracking-[0.5em] text-zinc-300">Curriculum Vitae</p>
                </header>
                <div className="grid grid-cols-2 gap-12 text-[11px] leading-relaxed">
                    <section className="space-y-6">
                        <h2 className="font-black uppercase tracking-widest bg-zinc-900 text-white px-2 inline-block">Work</h2>
                        {data.experience.map(exp => (
                            <div key={exp.id} className="space-y-1">
                                <p className="font-black">{exp.role}</p>
                                <p className="opacity-40">{exp.company} / {exp.date}</p>
                                <BulletList text={exp.description} className="pt-2 text-[11px]" />
                            </div>
                        ))}
                    </section>
                    <section>
                        <h2 className="font-black uppercase tracking-widest bg-zinc-900 text-white px-2 inline-block mb-4">Core</h2>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase">
                            {data.skills.map(s => <p key={s}>+ {s}</p>)}
                        </div>
                    </section>
                </div>
            </div>
            <footer className="pt-8 border-t border-zinc-100 text-[10px] uppercase font-black opacity-30 text-center">
                {data.personalInfo.email} • {data.personalInfo.phone}
            </footer>
        </div>
    </div>
);

const ResumePreview = () => {
    const { resumeData, selectedTemplate } = useResumeStore();

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'minimal': return <MinimalTemplate data={resumeData} />;
            case 'modern': return <ModernTemplate data={resumeData} />;
            case 'tech': return <TechTemplate data={resumeData} />;
            case 'professional': return <WallStreetTemplate data={resumeData} />;
            case 'creative': return <CreativeTemplate data={resumeData} />;
            case 'harvard': return <ExecutiveTemplate data={resumeData} />;
            case 'compact': return <CompactTemplate data={resumeData} />;
            case 'chrono': return <ChronoTemplate data={resumeData} />;
            case 'indigo': return <IndigoTemplate data={resumeData} />;
            case 'startup': return <StartupTemplate data={resumeData} />;
            case 'elegant': return <ElegantTemplate data={resumeData} />;
            case 'tokyo': return <TokyoTemplate data={resumeData} />;
            case 'gold': return <GoldStandardTemplate data={resumeData} />;
            default: return <MinimalTemplate data={resumeData} />;
        }
    };

    return (
        <div className="w-full bg-white shadow-2xl origin-top transition-all duration-500 overflow-hidden">
            {renderTemplate()}
        </div>
    );
};

export default ResumePreview;
