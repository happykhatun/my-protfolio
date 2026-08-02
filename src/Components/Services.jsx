import React from 'react'

import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiPenTool, FiZap } from 'react-icons/fi';

const services = [
    { title: 'Responsive Website Development', description: 'Pixel-perfect, responsive websites with performance-first architecture.', icon: FiCode },
    { title: 'React Application Development', description: 'Modular React interfaces with reusable components and smooth UX.', icon: FiZap },
    { title: 'Figma to React', description: 'Turn design concepts into production-ready frontend experiences.', icon: FiPenTool },
    { title: 'Website Optimization', description: 'Improve speed, SEO, and accessibility without sacrificing design.', icon: FiLayers },
];

const Services = () => {
    return (
        <>
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Premium frontend solutions for ambitious brands.</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07 }} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 shadow-xl shadow-slate-950/30">
                                    <div className="inline-flex rounded-2xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 p-3 text-cyan-300">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services