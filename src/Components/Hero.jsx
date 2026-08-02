import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const stats = [
    { label: 'Projects', value: '25+' },
    { label: 'Clients', value: '12+' },
    { label: 'Years', value: '3+' },
];

const Hero = () => {
    return (
        <>
            <section id="home" className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                            Hello, I&apos;m Happy Khatun
                        </p>
                        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                            I build <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">beautiful, fast</span> frontend experiences.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-400">
                            Frontend developer crafting premium React interfaces, performance-first web apps, and design-led digital products.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#projects" className="rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]">
                                View Projects
                            </a>
                            <a href="/resume.pdf" className="rounded-full border border-white/15 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                                <span className="inline-flex items-center gap-2"><FiDownload /> Download Resume</span>
                            </a>
                        </div>
                        <div className="mt-8 flex gap-4 text-slate-300">
                            <a href="https://github.com" className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiGithub /></a>
                            <a href="https://linkedin.com" className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiLinkedin /></a>
                            <a href="mailto:hello@happykhatun.dev" className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiMail /></a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
                        <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-cyan-500/20 via-violet-500/20 to-transparent blur-3xl" />
                        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/40">
                            <div className="absolute right-6 top-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Available for hire</div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {stats.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                                        <p className="text-2xl font-semibold text-white">{item.value}</p>
                                        <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 rounded-3xl border border-white/10 bg-linear-to-br from-slate-800 to-slate-900 p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-400">Current Focus</p>
                                        <p className="mt-1 text-lg font-semibold text-white">React • Tailwind • UX</p>
                                    </div>
                                    <div className="h-14 w-14 rounded-full bg-linear-to-br from-cyan-400 to-violet-500" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mx-auto mt-16 flex max-w-7xl justify-center">
                    <a href="#about" className="flex flex-col items-center gap-2 text-sm text-slate-400">
                        <span>Scroll</span>
                        <FiArrowDown className="animate-bounce" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero