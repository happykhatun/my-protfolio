import React from 'react'
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Astra Dashboard',
        description: 'A sleek analytics dashboard with dark mode, animated charts, and a premium SaaS aesthetic.',
        stack: ['React', 'Tailwind', 'Framer Motion'],
        category: 'Dashboard',
    },
    {
        title: 'North Studio',
        description: 'A high-performance agency landing page with strong storytelling and conversion-focused UX.',
        stack: ['React', 'GSAP', 'Vite'],
        category: 'Landing Page',
    },
    {
        title: 'Flux Commerce',
        description: 'A modern e-commerce experience focused on clarity, speed, and visual polish.',
        stack: ['React', 'Tailwind', 'Firebase'],
        category: 'E-commerce',
    },
];

const Projects = () => {
    return (
        <>
            <section id="projects" className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured Projects</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work with modern interaction design.</h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.01 }} className="group overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/30">
                                <div className="h-48 bg-linear-to-br from-cyan-500/30 via-slate-800 to-violet-500/30" />
                                <div className="p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">{project.category}</span>
                                        <span className="text-sm text-slate-400">UI/UX</span>
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <a href="#" className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-cyan-400/20">GitHub</a>
                                        <a href="#" className="rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white">Live Demo</a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects