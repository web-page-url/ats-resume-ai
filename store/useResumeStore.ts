import { create } from 'zustand';

export interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    date: string;
    description: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    location: string;
    date: string;
    description: string;
}


export interface ResumeData {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        website: string;
        summary: string;
    };
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: { id: string; name: string; description: string; date: string }[];
    certifications: { id: string; name: string }[];
}

interface ResumeStore {
    resumeData: ResumeData;
    selectedTemplate: string;
    updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
    addExperience: () => void;
    updateExperience: (id: string, exp: Partial<Experience>) => void;
    removeExperience: (id: string) => void;
    addEducation: () => void;
    updateEducation: (id: string, edu: Partial<Education>) => void;
    removeEducation: (id: string) => void;
    addProject: () => void;
    updateProject: (id: string, project: Partial<ResumeData['projects'][0]>) => void;
    removeProject: (id: string) => void;
    addCertification: () => void;
    updateCertification: (id: string, cert: Partial<ResumeData['certifications'][0]>) => void;
    removeCertification: (id: string) => void;
    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;
    setTemplate: (id: string) => void;
}

const initialData: ResumeData = {
    personalInfo: {
        fullName: "Aashish Jaiswal",
        email: "aashish@example.com",
        phone: "+91 98765 43210",
        location: "Noida, India",
        website: "linkedin.com/in/aashish",
        summary: "Data Science professional with expertise in deep learning and statistical modeling. Proven track record of delivering high-impact analytical solutions for fintech and e-commerce leaders."
    },
    experience: [
        {
            id: '1',
            company: "upGrad",
            role: "Senior Consultant",
            date: "SEP 2024 - JAN 2025",
            location: "NOIDA",
            description: "Designed and maintained interactive dashboards to track sales funnels, conversions, and revenue trends using SQL and BI tools.\nWrote optimized SQL queries for reporting, analysis, and data validation across high-volume datasets.\nPerformed time-series analysis on lead inflow and conversion data to identify trends and historical performance patterns.\nCollaborated with Sales, Marketing, Product, and Finance teams to deliver accurate, scalable, and actionable insights for leadership decisions.\nEnsured data accuracy, consistency, reconciliation, and reliability across automated reports and dashboards."
        },
        {
            id: '2',
            company: "FinTech Corp",
            role: "Associate Analyst",
            date: "JAN 2022 - AUG 2024",
            location: "BANGALORE",
            description: "Developed automated risk assessment models reducing manual processing time by 40%.\nStreamlined data extraction pipelines using Python and AWS Lambda."
        }
    ],
    education: [
        {
            id: '1',
            school: "Indian Institute of Technology",
            degree: "B.Tech in Computer Science",
            date: "2017 - 2021",
            location: "Delhi",
            description: ""
        }
    ],
    skills: [
        "Analytics: Time-series analysis, Data validation, Dashboard optimization",
        "Technical: SQL, Python, AWS, Tableau, Power BI",
        "Leadership: Cross-functional collaboration, Strategic planning"
    ],
    projects: [
        {
            id: '1',
            name: "Neural Stock Predictor",
            description: "Implemented an LSTM-based recurrent neural network to predict stock price movements with 85% accuracy.\nIntegrated real-time data feeds from Yahoo Finance API using Kafka for low-latency processing.",
            date: "2023"
        }
    ],
    certifications: [
        { id: '1', name: "Google Data Analytics Professional Certificate" },
        { id: '2', name: "AWS Certified Solutions Architect" }
    ]
};

export const useResumeStore = create<ResumeStore>((set) => ({
    resumeData: initialData,
    selectedTemplate: 'gold',
    updatePersonalInfo: (info) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, ...info }
        }
    })),
    addExperience: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: [
                ...state.resumeData.experience,
                { id: Math.random().toString(), company: '', role: '', location: '', date: '', description: '' }
            ]
        }
    })),
    updateExperience: (id, exp) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map(e => e.id === id ? { ...e, ...exp } : e)
        }
    })),
    removeExperience: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter(e => e.id !== id)
        }
    })),
    addEducation: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: [
                ...state.resumeData.education,
                { id: Math.random().toString(), school: '', degree: '', location: '', date: '', description: '' }
            ]
        }
    })),
    updateEducation: (id, edu) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map(e => e.id === id ? { ...e, ...edu } : e)
        }
    })),
    removeEducation: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter(e => e.id !== id)
        }
    })),
    addProject: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            projects: [
                ...state.resumeData.projects,
                { id: Math.random().toString(), name: '', description: '', date: '' }
            ]
        }
    })),
    updateProject: (id, project) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.map(p => p.id === id ? { ...p, ...project } : p)
        }
    })),
    removeProject: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.filter(p => p.id !== id)
        }
    })),
    addCertification: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            certifications: [
                ...state.resumeData.certifications,
                { id: Math.random().toString(), name: '' }
            ]
        }
    })),
    updateCertification: (id, cert) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.map(c => c.id === id ? { ...c, ...cert } : c)
        }
    })),
    removeCertification: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.filter(c => c.id !== id)
        }
    })),
    addSkill: (skill) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            skills: [...state.resumeData.skills, skill]
        }
    })),
    removeSkill: (skill) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.filter(s => s !== skill)
        }
    })),
    setTemplate: (id) => set({ selectedTemplate: id }),
}));

