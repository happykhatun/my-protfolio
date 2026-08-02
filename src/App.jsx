import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import resume from "./assets/Mst Happy Khatun Resume.pdf";


import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/services';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';



const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <HelmetProvider>
      <div className="min-h-screen text-slate-100">
        <Helmet>
          <title>Happy Khatun | Frontend Developer</title>
          <meta name="description" content="Premium frontend developer portfolio for Happy Khatun" />
        </Helmet>

        <motion.div className="fixed top-0 left-0 h-1 w-full origin-left z-50 bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500" style={{ scaleX }} />

        <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-white">Happy Khatun</a>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                Resume
              </a>
            <button className="rounded-full border border-white/15 p-2 text-slate-200 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <FiMenu size={18} />
            </button>
          </div>
          {menuOpen && (
            <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mb-3 block text-sm text-slate-300" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <main id="home">
         <Hero/>
         <About/>
         <Skills/>
         <Services/>
         <Projects/>
         <Experience/>
         <Education/>
         <Certifications/>
         <Contact/>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold tracking-wide text-white">
                Happy Khatun
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                Frontend Developer passionate about building responsive,
                user-friendly, and modern web applications with React,
                JavaScript, and Tailwind CSS.
              </p>
            </div>

            {/* Center Navigation */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>

              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="transition hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>

              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </div>

            {/* Right Social */}
            <div className="flex items-center gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="mailto:your@email.com"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiMail size={20} />
              </a>

            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-slate-500 md:flex-row">

              <p>
                © {new Date().getFullYear()} Happy Khatun. All rights reserved.
              </p>

              <p>
                Built with ❤️ using React & Tailwind CSS
              </p>

            </div>
          </div>
        </footer>

        <a href="#home" className="fixed bottom-6 right-6 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 p-3 shadow-lg shadow-cyan-500/20">
          <FiArrowUp className="text-white" />
        </a>
      </div>
    </HelmetProvider>
  );
}

export default App;
