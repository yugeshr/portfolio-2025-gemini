import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const YearCounter: React.FC<{ period: string }> = ({ period }) => {
  // Extract years from period string (e.g., "Jun 2022 - Jun 2025" -> [2022, 2025])
  const years = period.match(/\d{4}/g)?.map(Number) || [];
  const startYear = years[0];
  const endYear = years[1] || new Date().getFullYear();

  const { count: startCount, ref: startRef } = useCountUp(startYear, 1500);
  const { count: endCount, ref: endRef } = useCountUp(endYear, 1500);

  // Replace years in the period string with animated counters
  let displayPeriod = period;

  if (years.length >= 1) {
    displayPeriod = period.replace(/\d{4}/, '');
    if (years.length >= 2) {
      displayPeriod = displayPeriod.replace(/\d{4}/, '');
    }
  }

  return (
    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest block mb-1 group-hover:text-purple-400 transition-colors duration-300">
      {years.length >= 1 && (
        <>
          {displayPeriod.split('-')[0].replace(/\d{4}/g, '')}
          <span ref={startRef} className="tabular-nums">{startCount}</span>
          {years.length >= 2 && (
            <>
              {' - '}
              {displayPeriod.split('-')[1]?.replace(/\d{4}/g, '')}
              <span ref={endRef} className="tabular-nums">{endCount}</span>
            </>
          )}
        </>
      )}
      {years.length === 0 && period}
    </span>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-32 bg-background">
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
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-border last:border-0 last:pb-0 group"
            >
              <div className="md:col-span-1">
                <YearCounter period={job.period} />
                <span className="text-lg font-bold text-primary">{job.company}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-200 group-hover:text-white transition-colors duration-300">{job.role}</h3>
                <p className="text-secondary leading-relaxed text-lg">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};