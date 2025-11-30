import React from 'react';
import { SOCIALS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background text-primary pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col justify-between min-h-[60vh]">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-12 text-primary/90"
          >
            Let's build <br /> something <span className="font-serif italic text-zinc-500">scalable.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
                I am currently open to opportunities in Product Design, specifically roles involving Complex SaaS, Enterprise Tools, or Design Systems.
              </p>
            </motion.div>

            <div className="flex flex-col justify-end md:items-end space-y-2">
              {SOCIALS.map(social => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-2xl md:text-3xl font-medium text-secondary hover:text-white transition-colors flex items-center gap-3 group w-fit"
                >
                  {social.label}
                  <ArrowUpRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-32 pt-8 border-t border-white/5">
          <a href="#" className="text-xl font-bold tracking-tighter text-primary">
            YR.
          </a>
          <div className="flex flex-col md:text-right space-y-1">
            <span className="text-zinc-600 text-xs uppercase tracking-widest">© {new Date().getFullYear()} Yugesh Ralli. All Rights Reserved.</span>
            <span className="text-zinc-600 text-xs">Designed & Developed with React & Tailwind.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};