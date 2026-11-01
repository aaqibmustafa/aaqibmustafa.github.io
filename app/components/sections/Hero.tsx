"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { MeshGradient } from "../ui/MeshGradient";
import { Typewriter } from "../ui/Typewriter";

export function Hero() {
  const roles = [
    "Full Stack Developer",
    "API & Systems Architect",
    "Laravel & Node.js Specialist",
    "Database & Performance Optimizer",
    "AI SaaS & Enterprise Engineer"
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 text-accent-primary text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span>Available for Senior Roles & Systems Consulting</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent-primary font-semibold mb-2 tracking-wide uppercase text-sm"
            >
              Hi, I&apos;m
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
              className="text-text-secondary text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Full Stack Developer with 4 years of experience building and deploying scalable web applications for business use. Delivered 6+ production systems across POS, ERP, e-commerce, inventory, warehouse and AI SaaS using Laravel, PHP, Node.js, AWS (EC2, S3, RDS, SES), and modern AI development workflows.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-all hover:scale-105 shadow-lg shadow-accent-primary/20"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/resume/Aaqib_Mustafa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-bg-secondary text-text-primary font-medium border border-text-secondary/20 hover:border-accent-primary/50 transition-all hover:scale-105"
              >
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 pt-6 border-t border-text-secondary/15 flex items-center justify-center md:justify-start gap-6 sm:gap-8"
            >
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-text-primary">4+ <span className="text-accent-primary text-sm font-semibold">Years</span></div>
                <div className="text-xs text-text-secondary">Engineering Exp.</div>
              </div>
              <div className="w-px h-8 bg-text-secondary/20" />
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-text-primary">6+ <span className="text-accent-primary text-sm font-semibold">Systems</span></div>
                <div className="text-xs text-text-secondary">Live in Production</div>
              </div>
              <div className="w-px h-8 bg-text-secondary/20" />
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-text-primary">100% <span className="text-accent-primary text-sm font-semibold">Delivery</span></div>
                <div className="text-xs text-text-secondary">Spec to Release</div>
              </div>
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
