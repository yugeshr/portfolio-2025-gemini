import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-40 last:mb-0"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Visual */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group/image">
                        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl blur opacity-20 group-hover/image:opacity-40 transition duration-1000"></div>
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface aspect-[16/10]">
                            <motion.img
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Overlay for Gallery */}
                            {project.isGallery && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                                        <span className="text-xs text-zinc-300 border border-white/20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">ExpressEats</span>
                                        <span className="text-xs text-zinc-300 border border-white/20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">Freelancer</span>
                                        <span className="text-xs text-zinc-300 border border-white/20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">iGrocery</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                    <div className="space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex flex-wrap gap-2 mb-6"
                            >
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-zinc-400 border border-white/5 px-4 py-2 rounded-full bg-white/[0.02]">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
                                {project.title}
                            </h3>

                            {project.role && (
                                <div className="flex items-center gap-3 text-secondary text-sm md:text-base font-medium mb-6">
                                    <span>{project.role}</span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                    <span>{project.timeline}</span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-6 text-secondary/90 font-light leading-relaxed text-lg">
                            {project.challenge ? (
                                <>
                                    <div className="p-6 border-l border-white/10 bg-white/[0.02]">
                                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Challenge</h4>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div className="p-6 border-l border-white/10 bg-white/[0.02]">
                                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Solution</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                </>
                            ) : (
                                <p>{project.description}</p>
                            )}
                        </div>

                        <div className="pt-4">
                            <Link to={`/work/${project.id}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary border-b border-transparent hover:border-primary pb-1 transition-all group/btn">
                                View Case Study
                                <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};