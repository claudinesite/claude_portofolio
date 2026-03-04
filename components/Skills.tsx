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

// === SKILLS DATA ===
const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'R', icon: SiR, color: '#276DC3' },
  { name: 'SQL Server', icon: Server, color: '#CC2927' },
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
  description: string;
}

interface CareerSection {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  items: CareerItem[];
}

const careerData: Record<string, CareerSection> = {
  experience: {
    icon: Briefcase,
    label: 'Expérience',
    color: 'blue',
    items: [
      { 
        role: "Analyste BI", 
        place: 'Norda Stelo', 
        year: '2023 — 2026',
        description: "Conception de solutions BI, tableaux de bord Power BI, accompagnement client et valorisation des données."
      },
      { 
        role: "Analyste BI", 
        place: 'Planifika', 
        year: '2022 — 2023',
        description: "Développement de pipelines ETL, rapports Power BI et modélisation de données pour la prise de décision."
      },
      { 
        role: "Assistant-statisticien", 
        place: 'CCNB Recherche', 
        year: '2019',
        description: "Analyse statistique de données de sondage, nettoyage de données et rédaction de rapports."
      },
    ],
  },
  education: {
    icon: GraduationCap,
    label: 'Formation',
    color: 'purple',
    items: [
      { 
        role: "Maîtrise en génie TI", 
        place: 'ETS Montréal', 
        year: '2024 — 2026',
        description: "Spécialisation en intelligence d'affaires, gestion des données et recherche appliquée."
      },
      { 
        role: "DEC Big Data", 
        place: 'CCNB', 
        year: '2017 — 2019',
        description: "Formation en analyse statistique, informatique décisionnelle et traitement de données massives."
      },
      { 
        role: "Baccalauréat", 
        place: 'ESGIS (WES)', 
        year: '2016',
        description: "Baccalauréat en informatique de gestion avec équivalence WES pour le Canada."
      },
    ],
  },
  certifications: {
    icon: Award,
    label: 'Certifications',
    color: 'amber',
    items: [
      { 
        role: "Microsoft Power BI", 
        place: 'Microsoft', 
        year: '2022',
        description: "Certification officielle Microsoft en création de rapports, modélisation DAX et visualisation de données."
      },
      { 
        role: "Python Data Science", 
        place: 'Udemy', 
        year: '2022',
        description: "Formation complète en Python pour l'analyse de données, pandas, numpy et machine learning."
      },
    ],
  },
};

const colorStyles = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    bgActive: 'bg-blue-600 dark:bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    textActive: 'text-white',
    dot: 'bg-blue-500',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    bgActive: 'bg-purple-600 dark:bg-purple-500',
    text: 'text-purple-600 dark:text-purple-400',
    textActive: 'text-white',
    dot: 'bg-purple-500',
  },
  amber: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    bgActive: 'bg-amber-500 dark:bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400',
    textActive: 'text-white',
    dot: 'bg-amber-500',
  },
};

export default function Career() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeSection, setActiveSection] = useState<string>('experience');

  const activeData = careerData[activeSection];
  const activeColors = colorStyles[activeData.color as keyof typeof colorStyles];

  return (
    <section id="career" className="py-16 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        
        {/* ===== SKILLS SECTION ===== */}
        <div className="mb-16">
          {/* Skills Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Stack Technique
              </span>
            </div>
            <span className="hidden md:block text-xs text-neutral-400 dark:text-neutral-600">
              Survolez pour explorer
            </span>
          </motion.div>

          {/* Skills Marquee */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

            {/* Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex animate-marquee"
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="group flex items-center gap-2.5 px-4 py-2 mx-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full whitespace-nowrap hover:border-blue-400 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
                >
                  <skill.icon
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-full mb-16 origin-center"
          style={{ background: 'linear-gradient(to right, transparent, #1d4ed8, transparent)' }}
        />

        {/* ===== CAREER SECTION ===== */}
        <div>
          {/* Career Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Parcours
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white"
              >
                Expérience & Formation
              </motion.h2>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="/cv.pdf" 
              className="group inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs font-medium hover:opacity-90 transition-all w-fit"
            >
              <Download className="w-3.5 h-3.5" />
              Télécharger CV
            </motion.a>
          </div>

          {/* Career Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4"
          >
            
            {/* Sidebar Navigation */}
            <div className="flex md:flex-col gap-2">
              {Object.entries(careerData).map(([key, section]) => {
                const IconComponent = section.icon;
                const colors = colorStyles[section.color as keyof typeof colorStyles];
                const isActive = activeSection === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`
                      flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-300 w-full
                      ${isActive 
                        ? `${colors.bgActive} shadow-lg` 
                        : 'bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                      }
                    `}
                  >
                    <IconComponent 
                      className={`w-4 h-4 ${isActive ? colors.textActive : 'text-neutral-500 dark:text-neutral-400'}`} 
                    />
                    <span 
                      className={`text-xs font-medium ${isActive ? colors.textActive : 'text-neutral-600 dark:text-neutral-300'}`}
                    >
                      {section.label}
                    </span>
                    <span 
                      className={`
                        ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full
                        ${isActive 
                          ? 'bg-white/20 text-white' 
                          : `${colors.bg} ${colors.text}`
                        }
                      `}
                    >
                      {section.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Details Panel */}
            <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-2 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                    <div className={`w-2 h-2 rounded-full ${activeColors.dot}`} />
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${activeColors.text}`}>
                      {activeData.label}
                    </h3>
                  </div>

                  {/* Items */}
                  {activeData.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow"
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {item.role}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {item.place}
                          </p>
                        </div>
                        <span className="shrink-0 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded-md">
                          {item.year}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-2 border-t border-neutral-100 dark:border-neutral-700">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </div>

        {/* Bottom separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-16 h-px w-full origin-left"
          style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }}
        />

      </div>
    </section>
  );
}