import React from 'react'

import { motion } from 'framer-motion';
import { FiCode, FiFigma, FiGithub, FiGlobe, FiLayers, FiMonitor, FiPenTool, FiTerminal } from 'react-icons/fi';

const frontendSkills = [
    { name: 'HTML5', icon: FiCode },
    { name: 'CSS3', icon: FiLayers },
    { name: 'JavaScript', icon: FiMonitor },
    { name: 'React', icon: FiCode },
    { name: 'Tailwind CSS', icon: FiLayers },
    { name: 'Responsive Design', icon: FiGlobe },
];

const toolSkills = [
    { name: 'Git', icon: FiTerminal },
    { name: 'GitHub', icon: FiGithub },
    { name: 'VS Code', icon: FiCode },
    { name: 'Figma', icon: FiFigma },
    { name: 'Vercel', icon: FiGlobe },
    { name: 'Netlify', icon: FiGlobe },
];


const Skills = () => {
    return (
        <>
            <section id="skills" className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Modern tools for modern products.</h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-5 text-xl font-semibold text-white">Frontend</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {frontendSkills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ y: -6, scale: 1.02 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 p-3 text-cyan-300">
                                                    <Icon />
                                                </div>
                                                <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 text-xl font-semibold text-white">Tools</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {toolSkills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ y: -6, scale: 1.02 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 p-3 text-cyan-300">
                                                    <Icon />
                                                </div>
                                                <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills