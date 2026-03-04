'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Send,
    Mail,
    MapPin,
    Linkedin,
    CheckCircle,
    AlertCircle,
    Loader2
} from 'lucide-react';

// === VALIDATION ===
const contactSchema = z.object({
    name: z.string().min(2, 'Minimum 2 caractères'),
    email: z.string().email('Email invalide'),
    subject: z.string().min(1, 'Sélectionnez un sujet'),
    message: z.string().min(10, 'Minimum 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// === TA CLÉ WEB3FORMS ===
const WEB3FORMS_KEY = 'e0e9baf9-95bc-4cf5-a412-a58e3f751feb';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [status, setStatus] = useState<FormStatus>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    from_name: data.name,
                    email: data.email,
                    subject: `Portfolio Contact: ${data.subject}`,
                    message: data.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Erreur envoi');
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-3 block">
                        Contact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                        Un projet en tête ?
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            Que ce soit pour une mission, un poste, ou simplement
                            échanger sur un sujet data, je suis à votre écoute.
                        </p>

                        {/* Contact links */}
                        <div className="space-y-3">
                            <a
                                href="mailto:claudeaboki@gmail.com"
                                className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                                <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                    claudeaboki@gmail.com
                                </span>
                            </a>

                            <div className="flex items-center gap-3 p-3 -mx-3">
                                <MapPin className="w-5 h-5 text-neutral-400" />
                                <span className="text-neutral-600 dark:text-neutral-300">
                                    Montréal / Laval, Québec
                                </span>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/akuete-claude-aboki/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                                <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                    LinkedIn
                                </span>
                            </a>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-3 pt-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                Disponible pour de nouvelles opportunités
                            </span>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            {/* Honeypot anti-spam (hidden) */}
                            <input type="checkbox" name="botcheck" className="hidden" />

                            {/* Name & Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                        Nom
                                    </label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className={`
                      w-full px-4 py-3 bg-white dark:bg-neutral-900 
                      border rounded-xl text-neutral-900 dark:text-white 
                      placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
                      focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10
                      transition-all
                      ${errors.name
                                                ? 'border-red-500'
                                                : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600'
                                            }
                    `}
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.name.message}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        placeholder="john@exemple.com"
                                        className={`
                      w-full px-4 py-3 bg-white dark:bg-neutral-900 
                      border rounded-xl text-neutral-900 dark:text-white 
                      placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
                      focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10
                      transition-all
                      ${errors.email
                                                ? 'border-red-500'
                                                : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600'
                                            }
                    `}
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                    Sujet
                                </label>
                                <select
                                    {...register('subject')}
                                    id="subject"
                                    className={`
                    w-full px-4 py-3 bg-white dark:bg-neutral-900 
                    border rounded-xl text-neutral-900 dark:text-white 
                    focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10
                    transition-all appearance-none cursor-pointer
                    ${errors.subject
                                            ? 'border-red-500'
                                            : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600'
                                        }
                  `}
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="Mission / Projet">Mission / Projet</option>
                                    <option value="Opportunité d'emploi">Opportunité d'emploi</option>
                                    <option value="Conseil">Conseil</option>
                                    <option value="Autre">Autre</option>
                                </select>
                                {errors.subject && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                                    >
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.subject.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    {...register('message')}
                                    id="message"
                                    rows={4}
                                    placeholder="Décrivez votre projet..."
                                    className={`
                    w-full px-4 py-3 bg-white dark:bg-neutral-900 
                    border rounded-xl text-neutral-900 dark:text-white 
                    placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
                    focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:focus:ring-white/10
                    transition-all resize-none
                    ${errors.message
                                            ? 'border-red-500'
                                            : 'border-neutral-200 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600'
                                        }
                  `}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xs text-red-500 mt-1.5 flex items-center gap-1"
                                    >
                                        <AlertCircle className="w-3 h-3" />
                                        {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                                whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
                                className={`
                  w-full flex items-center justify-center gap-2 h-12 rounded-xl font-medium transition-all
                  ${status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100'
                                    }
                  disabled:opacity-70 disabled:cursor-not-allowed
                `}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Envoi...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Envoyé !
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle className="w-4 h-4" />
                                        Erreur
                                    </>
                                ) : (
                                    <>
                                        Envoyer
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>

                            <p className="text-[11px] text-neutral-400 text-center">
                                Réponse sous 24-48h
                            </p>

                        </form>
                    </motion.div>

                </div>

                {/* Separator */}
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