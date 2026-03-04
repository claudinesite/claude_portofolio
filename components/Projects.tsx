'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Lock, 
  ChevronDown,
  Building2,
  Ship,
  Landmark,
} from 'lucide-react';

const companies = [
  {
    name: "Port de Montréal",
    period: "2024-2025",
    icon: Ship,
    projects: [
      {
        title: "Pipeline d'importation de données d'inspection",
        description: "Script Python et SQL pour importer des données Excel dans SQL Server. Création des tables, relations et colonnes.",
        tags: ["Python", "SQL Server", "ETL"],
      },
    ],
  },
  {
    name: "Norda Stelo",
    period: "2023-2026",
    icon: Building2,
    projects: [
      {
        title: "Tableaux de bord Inspection des actifs",
        description: "Suivi de l'état des actifs durant leur cycle de vie et planification des investissements.",
        tags: ["Power BI", "DAX"],
      },
    ],
  },
  {
    name: "Planifika Inc.",
    period: "2022-2023",
    icon: Building2,
    projects: [
      {
        title: "Tableau de bord MRC du Fjord-du-Saguenay",
        description: "Mise en œuvre du tableau de bord de visualisation des données.",
        tags: ["Power BI", "DAX"],
      },
      {
        title: "Portail de données MMFIM",
        description: "Tableau de bord pour le Mouvement pour mettre fin à l'itinérance à Montréal, intégré sur leur portail web public.",
        tags: ["Power BI", "Embed"],
      },
      {
        title: "Tableau de bord Nation Huronne-Wendat",
        description: "Valorisation de données pour la Nation Huronne-Wendat.",
        tags: ["Power BI", "ETL"],
      },
      {
        title: "Suivi des ventes et opportunités",
        description: "Dashboard connecté avec rafraîchissement en temps réel.",
        tags: ["Power BI", "CRM"],
      },
      {
        title: "Dashboard Ville de Lévis",
        description: "Tableau de bord sécurisé avec Row-Level Security.",
        tags: ["Power BI", "RLS"],
      },
    ],
  },
  {
    name: "Gouvernement du Nouveau-Brunswick",
    period: "2019",
    icon: Landmark,
    projects: [
      {
        title: "Analyse statistique - Services étudiants CCNB",
        description: "Analyse de données et rapport sur les services d'accommodation financés aux étudiants.",
        tags: ["R", "Excel"],
      },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCompany, setExpandedCompany] = useState<number | null>(2); // Planifika ouvert par défaut

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>

      <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-400">
              Réalisations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Projets livrés
          </motion.h2>
        </div>

        {/* Companies - Accordion style */}
        <div className="space-y-3">
          {companies.map((company, companyIndex) => {
            const IconComponent = company.icon;
            const isExpanded = expandedCompany === companyIndex;

            return (
              <motion.div
                key={companyIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: companyIndex * 0.05, duration: 0.4 }}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden"
              >
                {/* Company Header - Clickable */}
                <button
                  onClick={() => setExpandedCompany(isExpanded ? null : companyIndex)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {company.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                      {company.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400">
                      {company.projects.length} projet{company.projects.length > 1 ? 's' : ''}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>

                {/* Projects - Expandable */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 space-y-2">
                    {company.projects.map((project, projectIndex) => (
                      <div 
                        key={projectIndex}
                        className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-neutral-900 dark:text-white mb-1">
                            {project.title}
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="px-1.5 py-0.5 text-[10px] font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* NDA Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-600"
        >
          <Lock className="w-3 h-3" />
          <p>Projets réalisés en entreprise — détails confidentiels (NDA)</p>
        </motion.div>

        {/* Bottom separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-12 h-px w-full origin-left bg-gradient-to-r from-neutral-300 dark:from-neutral-700 to-transparent"
        />

      </div>
    </section>
  );
}