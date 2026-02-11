"use client";

import React from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { User, Briefcase, GraduationCap, Code, Plus, Trash2, ChevronDown, ChevronUp, Terminal, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Section = ({ title, icon: Icon, children, id }: any) => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="glass dark:glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-soft">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white/5 dark:bg-white/5"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                        <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-lg">{title}</h3>
                </div>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 pt-2 space-y-4"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AutoResizeTextarea = ({ value, onChange, placeholder, className }: any) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn("w-full overflow-hidden resize-none", className)}
            rows={1}
        />
    );
};

const Editor = () => {
    const {
        resumeData,
        updatePersonalInfo,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addProject,
        updateProject,
        removeProject,
        addCertification,
        updateCertification,
        removeCertification,
        addSkill,
        removeSkill
    } = useResumeStore();

    const [newSkill, setNewSkill] = React.useState("");

    return (
        <div className="space-y-6">
            <Section title="Personal Information" icon={User}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                        <input
                            value={resumeData.personalInfo.fullName}
                            onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                        <input
                            value={resumeData.personalInfo.email}
                            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60">Phone</label>
                        <input
                            value={resumeData.personalInfo.phone}
                            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60">LinkedIn / Website</label>
                        <input
                            value={resumeData.personalInfo.website}
                            onChange={(e) => updatePersonalInfo({ website: e.target.value })}
                            placeholder="linkedin.com/in/username"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60">Location</label>
                        <input
                            value={resumeData.personalInfo.location}
                            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">Summary</label>
                    <AutoResizeTextarea
                        value={resumeData.personalInfo.summary}
                        onChange={(e: any) => updatePersonalInfo({ summary: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary transition-colors"
                    />
                </div>
            </Section>

            <Section title="Experience" icon={Briefcase}>
                <div className="space-y-6">
                    {resumeData.experience.map((exp) => (
                        <div key={exp.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 relative group">
                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute top-4 right-4 p-2 text-error opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Role"
                                    value={exp.role}
                                    onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Date (e.g. 2020 - Present)"
                                    value={exp.date}
                                    onChange={(e) => updateExperience(exp.id, { date: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Location"
                                    value={exp.location}
                                    onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                            </div>
                            <div className="mt-4 space-y-1">
                                <label className="text-[10px] font-bold uppercase opacity-30 px-1">Job Details (One bullet per line)</label>
                                <AutoResizeTextarea
                                    placeholder="• Managed team of 5...&#10;• Scaled infrastructure..."
                                    value={exp.description}
                                    onChange={(e: any) => updateExperience(exp.id, { description: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-20"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={addExperience}
                        className="w-full py-3 rounded-2xl border-2 border-dashed border-white/10 hover:border-brand-primary transition-colors flex items-center justify-center gap-2 group"
                    >
                        <Plus size={20} className="group-hover:scale-125 transition-transform" />
                        Add Experience
                    </button>
                </div>
            </Section>

            <Section title="Projects" icon={Terminal}>
                <div className="space-y-6">
                    {resumeData.projects.map((proj) => (
                        <div key={proj.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 relative group">
                            <button
                                onClick={() => removeProject(proj.id)}
                                className="absolute top-4 right-4 p-2 text-error opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <input
                                placeholder="Project Name"
                                value={proj.name}
                                onChange={(e) => updateProject(proj.id, { name: e.target.value })}
                                className="w-full bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30 font-bold"
                            />
                            <div className="mt-2 space-y-1">
                                <label className="text-[10px] font-bold uppercase opacity-30 px-1">Project Details (One bullet per line)</label>
                                <AutoResizeTextarea
                                    placeholder="• Built XYZ using ABC..."
                                    value={proj.description}
                                    onChange={(e: any) => updateProject(proj.id, { description: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-20"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={addProject}
                        className="w-full py-3 rounded-2xl border-2 border-dashed border-white/10 hover:border-brand-primary transition-colors flex items-center justify-center gap-2 group"
                    >
                        <Plus size={20} className="group-hover:scale-125 transition-transform" />
                        Add Project
                    </button>
                </div>
            </Section>

            <Section title="Education" icon={GraduationCap}>
                <div className="space-y-6">
                    {resumeData.education.map((edu) => (
                        <div key={edu.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 relative group">
                            <button
                                onClick={() => removeEducation(edu.id)}
                                className="absolute top-4 right-4 p-2 text-error opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    placeholder="School/University"
                                    value={edu.school}
                                    onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Degree"
                                    value={edu.degree}
                                    onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Date (e.g. 2015-2019)"
                                    value={edu.date}
                                    onChange={(e) => updateEducation(edu.id, { date: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                                <input
                                    placeholder="Location (e.g. Bangalore)"
                                    value={edu.location}
                                    onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                                    className="bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={addEducation}
                        className="w-full py-3 rounded-2xl border-2 border-dashed border-white/10 hover:border-brand-primary transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        Add Education
                    </button>
                </div>
            </Section>

            <Section title="Certifications" icon={Award}>
                <div className="space-y-6">
                    {resumeData.certifications.map((cert) => (
                        <div key={cert.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 relative group">
                            <button
                                onClick={() => removeCertification(cert.id)}
                                className="absolute top-4 right-4 p-2 text-error opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                            <input
                                placeholder="Certification Name (e.g. Google Data Analyst)"
                                value={cert.name}
                                onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                                className="w-full bg-transparent border-b border-white/10 py-1 outline-none focus:border-brand-primary placeholder:opacity-30"
                            />
                        </div>
                    ))}
                    <button
                        onClick={addCertification}
                        className="w-full py-3 rounded-2xl border-2 border-dashed border-white/10 hover:border-brand-primary transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        Add Certification
                    </button>
                </div>
            </Section>

            <Section title="Skills" icon={Code}>
                <div className="space-y-4">
                    <p className="text-[10px] uppercase font-bold opacity-30">Tip: Use "Category: Skill1, Skill2" for professional formatting.</p>
                    <div className="flex gap-2">
                        <input
                            placeholder="Add a skill or category"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && newSkill) {
                                    addSkill(newSkill);
                                    setNewSkill("");
                                }
                            }}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-brand-primary"
                        />
                        <button
                            onClick={() => {
                                if (newSkill) {
                                    addSkill(newSkill);
                                    setNewSkill("");
                                }
                            }}
                            className="p-2 bg-brand-primary rounded-xl text-white"
                        >
                            <Plus size={24} />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold flex items-center gap-2 group border border-brand-primary/20">
                                {skill}
                                <button onClick={() => removeSkill(skill)}>
                                    <Trash2 size={12} className="opacity-50 hover:opacity-100 text-error" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Editor;
