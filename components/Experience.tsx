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

        <div className="space-y-16">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-border pb-16 last:border-0 last:pb-0"
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