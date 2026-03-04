'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    Download,
    Briefcase,
    GraduationCap,
    Award,
    RefreshCw,
    Zap,
    FileSpreadsheet,
    Server,
    BarChart3,
    Cloud,
    ChevronRight,
    Database,
    PieChart,
} from 'lucide-react';
import {
    SiPython,
    SiPandas,
    SiR,
    SiOracle,
    SiNumpy,
    SiGit,
    SiAnaconda,
} from 'react-icons/si';

// === SKILLS DATA (avec couleurs) ===
const skills = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'R', icon: SiR, color: '#276DC3' },
    { name: 'SQL Server', icon: Server, color: '#CC2927' },
    { name: 'SSIS', icon: RefreshCw, color: '#CC2927' },
    { name: 'SSAS', icon: BarChart3, color: '#CC2927' },
    { name: 'SSRS', icon: FileSpreadsheet, color: '#CC2927' },
    { name: 'Oracle 19c', icon: SiOracle, color: '#F80000' },
    { name: 'Power BI', icon: BarChart3, color: '#F2C811' },
    { name: 'Excel', icon: FileSpreadsheet, color: '#217346' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'ETL', icon: RefreshCw, color: '#1d4ed8' },
    { name: 'DAX', icon: Zap, color: '#F2C811' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Azure', icon: Cloud, color: '#0078D4' },
    { name: 'AWS', icon: Cloud, color: '#FF9900' },
    { name: 'Anaconda', icon: SiAnaconda, color: '#44A833' },
];

// === CAREER DATA ===
interface CareerItem {
    role: string;
    place: string;
    year: string;
    description: string[];
    technologies?: string[];
}

interface CareerSection {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    items: CareerItem[];
}

const careerData: Record<string, CareerSection> = {
    experience: {
        icon: Briefcase,
        label: 'Expérience',
        items: [
            {
                role: "Analyste d'affaires BI",
                place: 'Norda Stelo',
                year: '2023 — 2026',
                description: [
                    "Accompagner les clients dans la définition de leurs besoins et les conseiller dans le choix et l'implantation de solutions analytiques",
                    "Concevoir, développer et maintenir des solutions BI incluant des rapports, tableaux de bord et KPI",
                    "Produire et maintenir la documentation technique des solutions analytiques",
                    "Construire et faire évoluer des rapports complexes à l'aide de Power BI, SQL et Python",
                    "Assurer la qualité, la cohérence et la fiabilité des données utilisées dans les solutions analytiques",
                    "Création des entrepôts de données, des datamarts, des dataflows et collaboration étroite avec les parties techniques et non techniques"
                ],
                technologies: ['Power BI', 'DAX', 'SQL Server', 'Azure', 'Python', 'Excel']
            },
            {
                role: "Analyste d'intelligence d'affaires",
                place: 'Planifika',
                year: '2022 — 2023',
                description: [
                    "Analyser les besoins d'affaires et les traduire en exigences fonctionnelles et techniques",
                    "Modéliser, nettoyer et transformer des données pour le processus décisionnel",
                    "Création des tableaux de bord avec Power BI",
                    "Développement de pipelines ETL",
                    "Assurer la qualité, l'intégrité, la cohérence et la sécurité des données utilisées"
                ],
                technologies: ['Power BI', 'ETL', 'SQL Server', 'Python', 'Pandas']
            },
            {
                role: "Assistant-statisticien",
                place: 'CCNB',
                year: '2019',
                description: [
                    "Analyse statistique de données de sondage",
                    "Nettoyage de données et rédaction de rapports"
                ],
                technologies: ['R', 'Excel', 'Python', 'SPSS']
            },
        ],
    },
    education: {
        icon: GraduationCap,
        label: 'Formation',
        items: [
            {
                role: "Maîtrise en génie des technologies de l'information",
                place: 'École de technologie supérieure (ETS) - Montréal',
                year: '2024 — 2026',
                description: ["Spécialisation en intelligence d'affaires, gestion des données et recherche appliquée."]
            },
            {
                role: "Analyste des données statistiques (BIG DATA)",
                place: 'Collège communautaire du Nouveau-Brunswick (CCNB) - Bathurst',
                year: '2017 — 2019',
                description: ["Formation en analyse statistique, informatique décisionnelle et traitement de données massives."]
            },
            {
                role: "Baccalauréat en informatique de gestion",
                place: 'École des sciences de la gestion (ESGIS) - Équivalence WES Canada',
                year: '2016',
                description: ["WES (numéro de référence : 5900849)"]
            },
        ],
    },
    certifications: {
        icon: Award,
        label: 'Certifications',
        items: [
            {
                role: "Microsoft Power BI Data Analyst",
                place: 'Microsoft',
                year: '2022',
                description: ["Certification officielle Microsoft en création de rapports, modélisation DAX et visualisation de données."]
            },
            {
                role: "Microsoft Certified: Power Platform Fundamentals",
                place: 'Microsoft',
                year: '2022',
                description: ["Certification officielle Microsoft pour l'utilisation de la Power Platform."]
            },
            {
                role: "Python Data Science",
                place: 'Udemy',
                year: '2022',
                description: ["Formation complète en Python pour l'analyse de données, pandas, numpy et machine learning."]
            },
        ],
    },
};

// Map des couleurs pour les technologies
const techColors: Record<string, string> = {
    'Power BI': '#3B82F6',
    'DAX': '#3B82F6',
    'SQL Server': '#3B82F6',
    'Azure': '#3B82F6',
    'Python': '#3B82F6',
    'Excel': '#3B82F6',
    'ETL': '#3B82F6',
    'Pandas': '#3B82F6',
    'R': '#3B82F6',
    'SPSS': '#3B82F6',
    'NumPy': '#3B82F6',
    'Git': '#3B82F6',
};

export default function Career() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [activeSection, setActiveSection] = useState<string>('experience');

    const activeData = careerData[activeSection];

    return (
        <section id="career" className="py-24 px-4 md:px-6" ref={ref}>
            {/* Container élargi */}
            <div className="max-w-6xl mx-auto">

                {/* ===== SKILLS SECTION ===== */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-400">
                                Stack Technique
                            </span>
                        </div>
                        <span className="hidden md:block text-xs text-neutral-400 dark:text-neutral-600 mt-1 ml-11">
                            Survolez pour explorer
                        </span>
                    </motion.div>

                    {/* Skills Marquee */}
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex animate-marquee"
                        >
                            {[...skills, ...skills, ...skills].map((skill, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="group flex items-center gap-2.5 px-4 py-2.5 mx-2 border border-neutral-200 dark:border-neutral-800 rounded-full whitespace-nowrap hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:shadow-sm transition-all duration-300 shrink-0 cursor-default"
                                >
                                    <skill.icon
                                        className="w-4 h-4 transition-transform group-hover:scale-110"
                                        style={{ color: skill.color }}
                                    />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* ===== CAREER SECTION ===== */}
                <div>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-3 block">
                                Parcours
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                                Expérience & Formation
                            </h2>
                        </motion.div>
                    </div>

                    {/* Navigation Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-fit mb-10"
                    >
                        {Object.entries(careerData).map(([key, section]) => {
                            const IconComponent = section.icon;
                            const isActive = activeSection === key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveSection(key)}
                                    className={`
                                        relative flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all duration-300
                                        ${isActive
                                            ? 'text-neutral-900 dark:text-white'
                                            : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                                        }
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-md shadow-sm"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <IconComponent className="w-4 h-4 relative z-10" />
                                    <span className="relative z-10 hidden sm:inline">{section.label}</span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Timeline Content - Élargi */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            {/* Vertical Line */}
                            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-neutral-200 dark:bg-neutral-800" />

                            <div className="space-y-0">
                                {activeData.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-10 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#050505] group-hover:border-neutral-900 dark:group-hover:border-white transition-colors duration-300" />

                                        {/* Content - Card élargie */}
                                        <div className="pb-10 mb-2">
                                            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors">

                                                {/* Header */}
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                                            {item.role}
                                                        </h3>
                                                        <p className="text-sm text-neutral-500 mt-1">
                                                            {item.place}
                                                        </p>
                                                    </div>
                                                    <span className="text-xs font-mono text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                                                        {item.year}
                                                    </span>
                                                </div>

                                                {/* Description - Liste à puces */}
                                                <ul className="space-y-2 mb-5">
                                                    {item.description.map((desc, descIndex) => (
                                                        <li
                                                            key={descIndex}
                                                            className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                            {desc}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Technologies */}
                                                {item.technologies && item.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                                        {item.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105"
                                                                style={{
                                                                    borderColor: `${techColors[tech] || '#6b7280'}30`,
                                                                    backgroundColor: `${techColors[tech] || '#6b7280'}10`,
                                                                    color: techColors[tech] || '#6b7280',
                                                                }}
                                                            >
                                                                <span
                                                                    className="w-1.5 h-1.5 rounded-full"
                                                                    style={{ backgroundColor: techColors[tech] || '#6b7280' }}
                                                                />
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom separator */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 h-px w-full origin-left bg-gradient-to-r from-neutral-300 dark:from-neutral-700 to-transparent"
                />

            </div>
        </section>
    );
}