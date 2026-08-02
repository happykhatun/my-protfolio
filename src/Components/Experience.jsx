import React from 'react'
import { motion } from 'framer-motion';

const items = [
    { title: 'Frontend Developer', subtitle: 'Freelance • 2024 - Present', description: 'Building polished UI systems for startups and agencies using modern React stacks.' },
    { title: 'Available for Internship', subtitle: 'Open to opportunities', description: 'Seeking collaborative environments where I can grow and contribute in real-world teams.' },
    { title: 'Available for Freelance', subtitle: 'Remote / Global', description: 'Working with clients who value design quality, speed, and thoughtful product thinking.' },
];

const Experience = () => {
    return (
        <>
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A growing developer with a strong product mindset.</h2>
                    </div>

                    <div className="relative mx-auto max-w-3xl">
                        <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-cyan-400 to-violet-500" />
                        <div className="space-y-8">
                            {items.map((item, index) => (
                                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="relative pl-14">
                                    <div className="absolute left-0 top-2 h-10 w-10 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
                                    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30">
                                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.subtitle}</p>
                                        <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience