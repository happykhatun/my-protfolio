import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import happy from "../assets/happy.png";

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
                            Building Modern <span className="bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Responsive</span> Web Experiences.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-400">
                            Passionate Frontend Developer focused on building responsive, user-friendly, and modern web applications using React, JavaScript, Tailwind CSS, HTML, and CSS.
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
                            <a href="https://github.com/happykhatun" target='_blank'
                             className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiGithub /></a>
                            <a href="https://linkedin.com" className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiLinkedin /></a>
                            <a href="mailto:hello@happykhatun.dev" className="rounded-full border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-300"><FiMail /></a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <img
                            src={happy}
                            alt="Happy Khatun"
                            className="h-120 w-95  object-cover  shadow-2xl shadow-cyan-500/30"
                        />
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