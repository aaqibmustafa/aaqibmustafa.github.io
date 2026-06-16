"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { MeshGradient } from "../ui/MeshGradient";
import { Typewriter } from "../ui/Typewriter";

export function Hero() {
  const roles = [
    "Backend Developer",
    "API Architect",
    "Database Optimizer",
    "Systems Integrator"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <MeshGradient />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-last md:order-first"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent-primary font-semibold mb-4 tracking-wide uppercase"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-text-primary mb-4"
            >
              Aaqib Mustafa.
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-bold text-text-secondary mb-6 h-12 md:h-14"
            >
              I am a <span className="text-accent-secondary"><Typewriter words={roles} /></span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-lg mb-10 max-w-lg mx-auto md:mx-0"
            >
              Backend Developer with 3+ years of experience building scalable, high-performance systems and RESTful APIs using PHP, Laravel, and CodeIgniter.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/resume/Aaqib_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-bg-secondary text-text-primary font-medium border border-text-secondary/20 hover:border-text-secondary/50 transition-all hover:scale-105"
              >
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center relative order-first md:order-last mb-8 md:mb-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-full rotate-6 opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-secondary to-accent-primary rounded-full -rotate-6 opacity-20 animate-pulse delay-75" />
              
              <div className="absolute inset-2 md:inset-4 rounded-full border border-text-secondary/10 flex items-center justify-center overflow-hidden shadow-2xl bg-bg-secondary">
                <img 
                  src="/images/AaqibMustafa.png" 
                  alt="Aaqib Mustafa" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
