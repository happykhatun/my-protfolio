import React from 'react'
import { motion } from 'framer-motion';

const certs = [
    { title: 'Advanced React Development', issuer: 'Frontend Academy' },
    { title: 'UI/UX Design Essentials', issuer: 'Design Lab' },
    { title: 'Modern Web Performance', issuer: 'Digital Skills Institute' },
];

const Certifications = () => {
    return (
        <>
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Certifications</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Focused learning in the tools that matter most.</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {certs.map((cert, index) => (
                            <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-linear-to-br from-slate-900 to-slate-800 p-7 shadow-xl shadow-slate-950/30">
                                <div className="h-12 w-12 rounded-full bg-linear-to-br from-cyan-500/30 to-violet-500/30" />
                                <h3 className="mt-5 text-xl font-semibold text-white">{cert.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certifications