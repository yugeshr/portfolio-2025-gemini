import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-zinc-900/50 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-serif italic text-secondary">"Proven impact through design."</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {TESTIMONIALS.map((t, index) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative p-10 md:p-14 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300"
                    >
                        <div className="text-6xl text-zinc-800 font-serif absolute top-8 left-8 select-none">"</div>
                        <p className="relative z-10 text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-10 mt-4">
                            {t.quote}
                        </p>
                        <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs font-bold text-white/50">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <cite className="not-italic font-bold text-primary block text-sm tracking-wide">{t.author}</cite>
                                <span className="text-xs text-secondary uppercase tracking-widest">{t.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};