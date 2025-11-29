import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const CaseStudyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-primary">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                    <Link to="/" className="text-secondary hover:text-white underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    // Find next project for navigation
    const currentIndex = PROJECTS.findIndex(p => p.id === id);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    return (
        <article className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">

                {/* Back Link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft size={16} /> Back to Works
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8 mb-16"
                >
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold uppercase tracking-widest text-zinc-400 border border-white/10 px-3 py-1.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary font-light max-w-3xl leading-relaxed">
                        {project.overview || project.description}
                    </p>
                </motion.div>

                {/* Meta Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-20"
                >
                    <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Role</span>
                        <span className="text-lg text-white">{project.role || 'Designer'}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Timeline</span>
                        <span className="text-lg text-white">{project.timeline || 'Ongoing'}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Platform</span>
                        <span className="text-lg text-white">Web / Desktop</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Company</span>
                        <span className="text-lg text-white">Auzmor</span>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl overflow-hidden mb-24 border border-white/10 bg-surface"
                >
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* --- PROBLEM SECTION (Gaps in Experience) --- */}
                {project.problemPoints && (
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">The Problem</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Gaps in the Existing Experience</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {project.problemPoints.map((point, index) => (
                                <div key={index} className="bg-white/[0.03] border border-white/10 p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/[0.05] transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-300">
                                        <AlertCircle size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                            <h3 className="text-2xl font-bold text-white mb-4 sticky top-32">The Challenge</h3>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl text-zinc-300 leading-relaxed font-light mb-8">
                                {project.challenge}
                            </p>
                        </div>
                    </div>
                )}

                {/* --- GOALS SECTION --- */}
                {project.goals && <GoalsSection goals={project.goals} />}

                {/* --- PROCESS / JOURNEY MAP SECTION --- */}
                {project.processSteps && (
                    <div className="mb-32">
                        {project.processSteps.map((step, index) => (
                            <div key={index} className="mb-20 last:mb-0">
                                <div className="text-center mb-12">
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Process</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{step.title}</h2>
                                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">{step.description}</p>
                                </div>
                                {step.imageUrl && (
                                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface">
                                        <img src={step.imageUrl} alt={step.title} className="w-full h-auto" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* --- FINAL UI SCREENS (GALLERY) --- */}
                {project.galleryImages && (
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">Visuals</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From Figma to Code: Final UI Screens</h2>
                            <p className="text-lg text-zinc-400 max-w-3xl mx-auto font-light">
                                These screens showcase how the mentorship feature was designed to balance structure and flexibility—allowing admins, mentors, and mentees to engage meaningfully across goals, milestones, and feedback touchpoints.
                            </p>
                        </div>
                        <div className="space-y-20">
                            {project.galleryImages.map((img, index) => (
                                <div key={index} className="group">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface mb-6 shadow-2xl shadow-black/50">
                                        <img src={img.url} alt={img.caption || `Screen ${index + 1}`} className="w-full h-auto" />
                                    </div>
                                    {img.caption && (
                                        <div className="text-center max-w-2xl mx-auto">
                                            <p className="text-zinc-400 text-sm md:text-base font-light border-l-2 border-primary/50 pl-4 py-1 inline-block text-left">
                                                {img.caption}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- OUTCOME SECTION (What We Achieved) --- */}
                {project.outcomeDetails ? (
                    <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Achieved</h2>
                            <p className="text-lg text-zinc-400 max-w-3xl mx-auto font-light">
                                The Mentorship Platform was successfully rolled out to enterprise clients, and became a core part of the LMS ecosystem. Despite tight timelines and limited UX infrastructure, the feature delivered measurable impact across multiple fronts.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {project.outcomeDetails.map((detail, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-lg font-bold text-white mb-3">{detail.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                        <div className="lg:col-span-4">
                            <h3 className="text-2xl font-bold text-white mb-4 sticky top-32">The Outcome</h3>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">
                                <p className="text-xl text-zinc-200 leading-relaxed font-light">
                                    {project.outcome}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Next Project Navigation */}
                <div className="border-t border-white/10 pt-20">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8 block">Next Project</span>
                    <Link to={`/work/${nextProject.id}`} className="group block">
                        <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-zinc-300 transition-colors mb-4 flex items-center justify-between">
                            {nextProject.title}
                            <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={48} />
                        </h2>
                        <p className="text-zinc-500 text-lg">See Case Study</p>
                    </Link>
                </div>

            </div>
        </article>
    );
};

const GoalsSection: React.FC<{ goals: NonNullable<typeof PROJECTS[0]['goals']> }> = ({ goals }) => {
    const [activeGoalIndex, setActiveGoalIndex] = React.useState(0);

    return (
        <div className="mb-32">
            <div className="mb-12">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">The Goal</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scalable Mentorship System</h2>
                <p className="text-xl text-zinc-400 max-w-2xl font-light">To make mentorship meaningful and scalable, we focused on designing four core pillars — structure, flexibility, visibility, and human connection.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Goals List */}
                <div className="space-y-4">
                    {goals.map((goal, index) => {
                        // Handle both string and object formats for backward compatibility
                        const title = typeof goal === 'string' ? goal.split(':')[0] : goal.title;
                        const description = typeof goal === 'string' ? goal.split(':')[1] : goal.description;
                        const isActive = index === activeGoalIndex;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveGoalIndex(index)}
                                className={`group/goal p-6 rounded-xl border transition-all cursor-pointer ${isActive
                                    ? 'border-primary/50 bg-primary/5'
                                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                                    }`}
                            >
                                <div className="flex gap-4">
                                    <div className={`mt-1 shrink-0 transition-colors ${isActive ? 'text-primary' : 'text-zinc-500 group-hover/goal:text-primary'}`}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-zinc-300 group-hover/goal:text-white'}`}>
                                            {title}
                                        </h3>
                                        {description && (
                                            <p className="text-zinc-400 leading-relaxed">{description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Goal Image Preview (Sticky) */}
                <div className="hidden lg:block sticky top-32">
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface aspect-[4/3] relative">
                        {goals.map((goal, index) => (
                            typeof goal !== 'string' && goal.imageUrl && (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === activeGoalIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <img
                                        src={goal.imageUrl}
                                        alt={goal.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                        <p className="text-white font-medium text-lg">{goal.title}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        {/* Fallback if no images or string format */}
                        {goals.every(g => typeof g === 'string' || !g.imageUrl) && (
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700">
                                <span className="text-sm uppercase tracking-widest">Select a goal</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
