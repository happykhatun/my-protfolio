import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const initialState = { name: '', email: '', subject: '', message: '' };


const Contact = () => {

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_id', 'template_id', formData, 'public_key')
            .then(() => {
                toast.success('Message sent successfully');
                setFormData(initialState);
            })
            .catch(() => {
                toast.error('Failed to send message');
            });
    };
    return (
        <>
            <section id="contact" className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let’s build something exceptional.</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-400">Open to freelance work, collaborations, and full-time opportunities. I’d love to hear about your next idea.</p>
                            <div className="mt-8 space-y-4 text-slate-300">
                                <div className="flex items-center gap-3"><FiMail /> hello@happykhatun.dev</div>
                                <div className="flex items-center gap-3"><FiPhone /> +880 1234 567890</div>
                                <div className="flex items-center gap-3"><FiMapPin /> Dhaka, Bangladesh</div>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="https://github.com" className="rounded-full border border-white/10 p-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"><FiGithub /></a>
                                <a href="https://linkedin.com" className="rounded-full border border-white/10 p-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"><FiLinkedin /></a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" required />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" required />
                            </div>
                            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" required />
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Message" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" required />
                            <button type="submit" className="rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-6 py-3 font-medium text-white">Send Message</button>
                        </form>
                    </div>
                </div>
                <ToastContainer position="bottom-right" theme="dark" />
            </section>
        </>
    )
}

export default Contact