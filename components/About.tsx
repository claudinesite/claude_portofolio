'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Target, Rocket, Sparkles, ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-400">
              À propos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
          >
            Qui suis-je<span className="text-blue-700 dark:text-blue-500"> ?</span>
          </motion.h2>
        </div>

        {/* Intro card - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl rotate-3 p-1 bg-gradient-to-br from-blue-600 to-blue-900 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img 
                  src="/photo.jpg"
                  alt="Claude Aboki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-lg border-[3px] border-white dark:border-[#050505] rotate-3">
              <span className="absolute inset-0 rounded-lg bg-green-500 animate-ping opacity-30" />
            </div>
          </div>

          {/* Intro text */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              Claude Akuété Aboki
            </h3>
            <p className="text-blue-700 dark:text-blue-400 font-medium mb-3">
              Analyste BI & Scientifique de Données · Montréal, QC 🇨🇦
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
              J'aime <span className="text-neutral-900 dark:text-white font-medium">comprendre, structurer et raconter</span> les données.
              Si vous avez des données, je trouverai <span className="text-neutral-900 dark:text-white font-medium">le sens derrière les données</span>.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Main text card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8"
          >
            <Sparkles className="w-5 h-5 text-blue-700 dark:text-blue-400 mb-4" />
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              En tant qu'analyste BI, je prends plaisir à transformer des volumes 
              d'informations complexes en <span className="text-neutral-900 dark:text-white font-medium">indicateurs clairs et parlants</span>. 
              Je suis passionné par <span className="text-neutral-900 dark:text-white font-medium">l'informatique</span> et les 
              <span className="text-neutral-900 dark:text-white font-medium"> défis analytiques</span>.
            </p>
          </motion.div>

          {/* Stat card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
          >
            <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              4<span className="text-blue-700 dark:text-blue-400">+</span>
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
              Années d'expérience en analyse de données
            </p>
          </motion.div>

          {/* Stat card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
          >
            <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              15<span className="text-blue-700 dark:text-blue-400">+</span>
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
              Projets livrés avec succès
            </p>
          </motion.div>

          {/* Info tags card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-2 md:col-span-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-4">
              Infos
            </p>
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: 'Montréal, QC' },
                { icon: Briefcase, text: 'Freelance & CDI' },
                { icon: Target, text: 'Orienté résultats' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2.5"
                >
                  <item.icon className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400 shrink-0" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-2 md:col-span-2 bg-neutral-900 dark:bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden group"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <p className="text-6xl text-blue-500/20 dark:text-blue-700/20 font-serif leading-none mb-2">
                "
              </p>
              <p className="text-white dark:text-neutral-900 text-lg leading-relaxed -mt-6 mb-4">
                Sans données, vous n'êtes qu'une personne de plus avec une opinion.
              </p>
              <p className="text-neutral-400 dark:text-neutral-500 text-sm font-medium">
                — W. Edwards Deming
              </p>
            </div>
          </motion.div>
              {/* CTA card - version simple avec icône */}

              {/* CTA card - version fusée */}
<motion.a
  href="#contact"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex items-center justify-between gap-4 cursor-pointer hover:border-blue-400 dark:hover:border-blue-700 hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-900/20 transition-all"
>
  <div className="flex items-center gap-3">
    {/* Icône fusée */}
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
      <Rocket className="w-5 h-5 text-blue-700 dark:text-blue-400" />
    </div>

    <div className="text-left">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-1">
        Envie de collaborer ?
      </p>
      <p className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white">
        Faisons décoller votre projet data.
      </p>
    </div>
  </div>

  {/* Flèche à droite */}
  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
    <ArrowRight className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:text-white transition-colors" />
  </div>
</motion.a>
        </div>

        {/* Bottom separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 h-px w-full origin-left"
          style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }}
        />

      </div>
    </section>
  );
}