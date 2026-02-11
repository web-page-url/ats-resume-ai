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
        fullName: "AASHISH JAISWAL",
        email: "aashish.beec15@gmail.com",
        phone: "8050684023",
        location: "Bangalore",
        website: "linkedin.com/in/aashish-jaiswal",
        summary: "Senior Data Analyst with 4+ years of experience in designing and maintaining interactive dashboards, writing optimized SQL queries, and building Python-based automated reporting pipelines across large datasets. Strong expertise in BI tools (Power BI, Tableau), time-series analysis, data validation, and dashboard performance optimization. Proven ability to collaborate with engineering, product, and business teams to deliver accurate, scalable, and actionable insights for decision-making.",
    },
    experience: [
        {
            id: '1',
            company: "upGrad",
            role: "Senior Consultant",
            location: "Noida",
            date: "Sep 2024 - Jan 2025",
            description: "Designed and maintained interactive dashboards to track sales funnels, conversions, and revenue trends using SQL and BI tools. Wrote optimized SQL queries for reporting, analysis, and data validation across high-volume datasets. Performed time-series analysis on lead inflow and conversion data to identify trends and historical performance patterns. Collaborated with Sales, Marketing, Product, and Finance teams to deliver accurate, actionable insights for leadership decisions. Ensured data accuracy, consistency, reconciliation, and reliability across automated reports and dashboards."
        }
    ],
    education: [
        {
            id: '1',
            school: "Acharya Institute of Technology",
            degree: "B.E. - Electronics & Communication Engineering",
            location: "Bangalore",
            date: "2015 - 2019",
            description: ""
        }
    ],
    skills: [
        "Analytics: Time-Series Analysis, Trend Analysis, Seasonality, Anomaly Detection",
        "Business: Stakeholder Management, Ad-hoc Analysis, KPI Reporting",
        "BI Tools: Power BI, Tableau (Apache Superset equivalent)",
        "Python: Pandas, NumPy, Automated Reporting, Data Pipelines",
        "Data Engineering: ETL, Automation, Dashboard Performance Optimization",
        "SQL: Optimized Queries, CTEs, Window Functions, Data Validation, RCA",
        "Databases: MySQL, BigQuery, Relational Databases, DBMS Principles",
        "Tools: Alteryx, VBA, Advanced Excel, Salesforce, LeadSquared"
    ],
    projects: [
        {
            id: '1',
            name: "Retention & Time-Series Analysis",
            description: "Performed time-series trend and seasonality analysis on user engagement data, improving retention by 20%.",
            date: ""
        }
    ],
    certifications: [
        { id: '1', name: "AI Dashboard using Power BI - Skill Nation" },
        { id: '2', name: "SAP Ariba - Sourcing Consultant Certification" },
        { id: '3', name: "Google Professional Data Analytics" }
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

