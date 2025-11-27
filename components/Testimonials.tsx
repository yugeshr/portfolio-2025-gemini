import React, { useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { motion, useAnimationControls } from 'framer-motion';

export const Testimonials: React.FC = () => {
    const controls = useAnimationControls();

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        };
        startAnimation();
    }, [controls]);

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-zinc-900/50 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif italic text-secondary">"Proven impact through design."</h2>
                </motion.div>
            </div>

            {/* Marquee Track */}
            <div
                className="flex overflow-hidden py-12"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => controls.start({
                    x: "-50%",
                    transition: {
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }
                })}
            >
                <motion.div
                    className="flex gap-6 px-6"
                    animate={controls}
                    style={{ width: "max-content" }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
                        <motion.div
                            key={`${t.id}-${index}`}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                borderColor: "rgba(255, 255, 255, 0.2)"
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-[85vw] md:w-[28vw] flex-shrink-0 relative p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm cursor-pointer flex flex-col"
                        >
                            <div className="text-4xl text-zinc-800 font-serif absolute top-6 left-6 select-none">"</div>
                            <p className="relative z-10 text-lg text-zinc-300 font-light leading-relaxed mb-8 mt-2 line-clamp-6">
                                {t.quote}
                            </p>
                            <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs font-bold text-white/50">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <cite className="not-italic font-bold text-primary block text-sm tracking-wide">{t.author}</cite>
                                    <span className="text-xs text-secondary uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};