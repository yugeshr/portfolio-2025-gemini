import React from 'react';
import { Hero } from './Hero';
import { Clients } from './Clients';
import { About } from './About';
import { ProjectCard } from './ProjectCard';
import { Experience } from './Experience';
import { Testimonials } from './Testimonials';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
    return (
        <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Clients worked with */}
            <Clients />

            {/* 3. About Me */}
            <About />

            {/* 4. Case Studies (Projects) */}
            <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex items-end justify-between border-b border-border pb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
                    <span className="hidden md:block text-zinc-600 text-sm uppercase tracking-widest">Enterprise & Systems</span>
                </motion.div>

                <div className="flex flex-col">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Experience Timeline */}
            <Experience />

            {/* 5. Testimonials */}
            <Testimonials />
        </>
    );
};
