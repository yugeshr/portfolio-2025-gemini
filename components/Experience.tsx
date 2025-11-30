import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Experience</h2>
          <div className="h-1 w-24 bg-border"></div>
        </motion.div>

        <div className="space-y-16 relative">
          {/* Animated progress line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-[calc(25%-0.5px)] top-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"
          />

          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.02)" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-border pb-16 last:border-0 last:pb-0 rounded-lg p-4 transition-all duration-300"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest block mb-1">
                  {job.period}
                </span>
                <span className="text-lg font-bold text-primary">{job.company}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-200">{job.role}</h3>
                <p className="text-secondary leading-relaxed text-lg">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};