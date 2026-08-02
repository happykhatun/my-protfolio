import React from 'react'
import { motion } from 'framer-motion';

const highlights = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Technologies Learned', value: '12+' },
    { label: 'Training Completed', value: '3+' },
];

const About = () => {
    return (
        <>
            <section id="about" className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About Me</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl"> Passionate Frontend Developer</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-400">
                                I'm Happy Khatun, a passionate Frontend Developer from Bangladesh. I enjoy
                                building responsive, user-friendly, and modern web applications using
                                React.js, JavaScript, Tailwind CSS, HTML, and CSS. I love learning new
                                technologies, solving real-world problems, and continuously improving my
                                skills to create better digital experiences.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-3">
                            {highlights.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About