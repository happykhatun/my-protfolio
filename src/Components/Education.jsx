import React from 'react'
import { motion } from 'framer-motion';


const items = [
    { title: 'Diploma in Computer Science Engineering', subtitle: 'Technical Education', description: 'Strong foundation in software engineering, computing principles, and problem solving.' },
    { title: 'Frontend Development with React', subtitle: 'Specialized Training', description: 'Focused training in component architecture, state management, and modern UI delivery.' },
    { title: 'Web Design Training', subtitle: 'Creative Learning', description: 'Developed an eye for typography, spacing, visual hierarchy, and polished design systems.' },
];

const Education = () => {
    return (
        <>
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A balanced blend of technical depth and design craft.</h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 shadow-xl shadow-slate-950/30">
                                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.subtitle}</p>
                                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education