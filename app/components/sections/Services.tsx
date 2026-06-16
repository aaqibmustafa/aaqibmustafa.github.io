"use client";

import { motion } from "framer-motion";
import { Server, Code2, Layers, Brain, Smartphone, Building2, ShieldCheck } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Backend API Development",
      description: "My most proven skill. I have architected and deployed robust REST APIs for 4 different mobile applications across iOS and Android, serving as the core infrastructure for thousands of users.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Full-stack PHP",
      description: "Capable of owning entire web platforms solo—from database architecture to UI implementation. Proven through production-grade systems like CosmoChat and HMB Connect.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Laravel Full-stack",
      description: "Building real business software, not just basic websites. I have delivered complex, scalable solutions like SalePro POS, Hostel Management System, and Tamimiats completely in Laravel.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "AI Integration",
      description: "Specialized in connecting modern AI services into production applications. I successfully integrated OpenAI into CosmoChat and HealMindBody to deliver highly valuable, intelligent features.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Mobile API Engineering",
      description: "A dedicated specialization in cross-platform backend support. I currently power 6 live mobile products (3 distinct apps × 2 platforms) with secure, highly-available APIs.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Enterprise System Design",
      description: "Proven ability to design architecture beyond simple apps. I engineered HMS to support 500+ hostels and a complex 3-tier hierarchy (Master/Branch Admin) with granular role-based access.",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "API Testing & Debugging",
      description: "Rigorously test, validate, and debug REST APIs across every project before integration. I utilize Postman and Insomnia to strictly verify endpoints, auth flows, error handling, and response contracts.",
      icon: <ShieldCheck className="w-8 h-8" />,
      fullWidth: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-secondary relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-text-secondary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-accent-secondary mx-auto rounded-full" />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-lg">
            A comprehensive breakdown of my core technical competencies and specialized skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`bg-bg-primary p-6 md:p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-text-secondary/10 hover:border-accent-secondary/30 hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden ${service.fullWidth ? 'md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-8 lg:p-10' : 'flex flex-col'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`text-accent-secondary relative flex-shrink-0 ${service.fullWidth ? 'mb-6 lg:mb-0 bg-accent-secondary/10 p-5 rounded-2xl' : 'mb-6'}`}>
                {service.icon}
              </div>
              
              <div className="relative">
                <h3 className={`font-bold text-text-primary mb-3 ${service.fullWidth ? 'text-2xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
