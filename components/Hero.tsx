'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Database, Globe, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      
      {/* GRID PATTERN */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* GRADIENT TOP RIGHT */}
      <div 
        className="absolute -top-[10%] right-0 w-[50vw] h-[50vw] rounded-full blur-[120px] animate-glow" 
        style={{ background: 'linear-gradient(to bottom left, #0f172a40, #1d4ed830, transparent)' }} 
      />
      
      {/* GRADIENT BOTTOM LEFT */}
      <div 
        className="absolute bottom-0 -left-[10%] w-[30vw] h-[30vw] rounded-full blur-[100px]" 
        style={{ background: 'linear-gradient(to top right, #1d4ed880, #0f172a40, transparent)' }} 
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-1 pr-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-neutral-900 dark:bg-white px-3 py-1 text-xs font-bold text-white dark:text-neutral-900 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Open
              </span>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Disponible pour de nouvelles missions
              </span>
            </div>
          </motion.div>

          {/* Title Block */}
          <div className="relative mb-6 w-full max-w-5xl">
            
            {/* BI ANALYST */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter text-neutral-900 dark:text-white leading-[0.85] text-left md:-ml-8"
            >
              BI ANALYST
            </motion.h1>

            {/* Gradient line with asymmetric spacing */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1.5 w-full mt-6 md:mt-8 mb-3 md:mb-4 origin-left"
              style={{ background: 'linear-gradient(to right, #1d4ed8, #0f172a, transparent)' }}
            />

            {/* & DATA SCIENTIST */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter text-neutral-900 dark:text-white leading-[0.85] text-right md:-mr-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-400 to-neutral-500 dark:from-neutral-600 dark:to-neutral-400 font-light italic mr-2 md:mr-4">
                &
              </span>
              DATA SCIENTIST
            </motion.h1>
          </div>

          {/* Name tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Akuete Claude Aboki
            </span>
            <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-2xl text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-14"
          >
            Je transforme les <span className="text-neutral-900 dark:text-white font-medium">données complexes </span> 
            en <span className="text-neutral-900 dark:text-white font-medium">décisions stratégiques</span> claires et actionnables.
          </motion.p>

          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-neutral-900 dark:bg-white pl-8 pr-6 font-medium text-white dark:text-neutral-900 transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:shadow-xl hover:shadow-neutral-900/10"
            >
              Démarrer un projet
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 dark:bg-neutral-900/20 group-hover:bg-white/30 dark:group-hover:bg-neutral-900/30 transition-colors">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            
            <a
              href="#projects"
              className="group inline-flex h-14 items-center gap-3 rounded-full border border-neutral-300 dark:border-neutral-700 px-8 font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-all"
            >
              Explorer mes réalisations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
        >
          {[
            { 
              icon: Database, 
              title: "Data Analysis", 
              desc: "Transformer les données brutes en insights actionnables et décisions éclairées.",
              num: "01" 
            },
            { 
              icon: BarChart3, 
              title: "Data Visualization", 
              desc: "Dashboards interactifs et storytelling visuel pour des KPIs percutants.",
              num: "02" 
            },
            { 
              icon: Globe, 
              title: "Business Intelligence", 
              desc: "Modélisation prédictive, pipelines SQL et automatisation analytique.",
              num: "03" 
            },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-start p-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-neutral-50 dark:hover:bg-neutral-900/80 transition-colors"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <item.icon className="w-5 h-5 text-neutral-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-xs font-mono text-neutral-300 dark:text-neutral-700">
                  {item.num}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}