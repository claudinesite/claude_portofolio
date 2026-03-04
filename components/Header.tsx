'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'À propos', href: '#about' },
  { name: 'Parcours', href: '#career' },
  { name: 'Projets', href: '#projects' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'px-0 py-0' : 'px-4 md:px-6 py-3 md:py-4'
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ease-in-out ${
            scrolled
              ? 'max-w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 rounded-none px-4 md:px-6 py-3 md:py-4'
              : 'max-w-fit bg-white dark:bg-neutral-900 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-full px-4 md:px-6 py-2.5 md:py-3'
          }`}
        >
          <div className={`flex items-center justify-between md:justify-center gap-4 md:gap-8 ${
            scrolled ? 'max-w-5xl mx-auto' : ''
          }`}>
            
            {/* Logo */}
            <a 
              href="#" 
              className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white"
            >
            Claude Aboki<span className="text-blue-600"></span>
            </a>

            {/* Séparateur - Desktop only */}
            <div className={`hidden md:block h-4 w-px bg-neutral-300 dark:bg-neutral-700 transition-opacity duration-300 ${
              scrolled ? 'opacity-0 md:hidden' : 'opacity-100'
            }`} />

            {/* Navigation - Desktop only */}
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Séparateur - Desktop only */}
            <div className={`hidden md:block h-4 w-px bg-neutral-300 dark:bg-neutral-700 transition-opacity duration-300 ${
              scrolled ? 'opacity-0 md:hidden' : 'opacity-100'
            }`} />

            {/* Right side */}
            <div className="flex items-center gap-3">
              
              {/* CTA Button - Desktop only */}
              <a
                href="#contact"
                className="hidden md:block text-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 px-4 py-2 rounded-full transition-opacity"
              >
                Me contacter
              </a>

              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-neutral-900 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-900 dark:text-white" />
                )}
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 pt-20">
                
                {/* Nav links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl transition-all"
                    >
                      {item.name}
                      <span className="text-xs font-mono text-neutral-300 dark:text-neutral-700">
                        0{index + 1}
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Separator */}
                <div className="my-6 h-px bg-neutral-200 dark:bg-neutral-800" />

                {/* CTA */}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
                >
                  Me contacter
                </motion.a>

                {/* Footer info */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      Disponible
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 dark:text-neutral-600">
                    © {new Date().getFullYear()} Claude Aboki
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}