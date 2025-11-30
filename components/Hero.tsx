import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden w-full">
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.03, 0.05, 0.03],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"
        />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-5xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-12 bg-secondary/50"></div>
              <span className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-secondary">
                Yugesh Ralli, Senior Product Designer
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-primary">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient"
              >
                Enterprise UX
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block text-brand font-serif italic mt-2"
              >
                & Scalable Systems.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-2xl text-secondary font-light max-w-2xl leading-relaxed pt-4"
            >
              I bridge the gap between complex legacy systems and intuitive modern experiences.
              Bringing <span className="text-primary font-medium">visual clarity</span> to enterprise software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 pt-8"
            >
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300"
              >
                View Case Studies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1favCSrwPPg1nctqWuU9piLxCgpiagkLM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <Download size={18} />
                <span className="font-medium">Download Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
