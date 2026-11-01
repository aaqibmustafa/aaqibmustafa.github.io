"use client";

import { motion } from "framer-motion";
import { Server, Code2, Layers, Brain, Smartphone, Building2, ShieldCheck, Cloud } from "lucide-react";

interface ServiceItem {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  fullWidth?: boolean;
}

export function Services() {
  const services: ServiceItem[] = [
    {
      title: "Backend API Development",
      description: "My most proven skill. I architect and deploy robust REST APIs for web and mobile platforms across iOS and Android, serving as the core infrastructure for thousands of active business users.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Full-stack PHP & Node.js",
      description: "Capable of owning entire web platforms solo—from database architecture to UI implementation. Proven through production systems like CosmoChat, Red Star Technologies website, and HMB Connect.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Modular POS & ERP Systems",
      description: (
        <>
          Building mission-critical business software with modular architecture. I engineered <strong className="text-text-primary">Owner POS</strong>, SalePro POS, <a href="https://demo.hmbsoftwares.com/hms/" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">Hostel Management System</a>, and Tamimi ATS in Laravel with pluggable modules.
        </>
      ),
      icon: <Layers className="w-8 h-8" />
    },
    {
      title: "AI Integration & SaaS",
      description: "Specialized in connecting modern AI services into production applications. I successfully integrated OpenAI and LLM workflows into CosmoChat (70+ tools, 80+ languages) and HealMindBody to deliver intelligent features.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "AWS Cloud Infrastructure (EC2, RDS, S3, SES)",
      description: "Hands-on engineering and administration of core AWS cloud environments: provisioning compute on AWS EC2, hosting managed relational databases on Amazon RDS (MySQL/PostgreSQL), configuring secure asset and media storage via AWS S3, and integrating Amazon SES for high-deliverability transactional email systems.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Mobile API Engineering",
      description: "A dedicated specialization in cross-platform backend support. I currently power 6 live mobile products (3 distinct apps × 2 platforms) with secure, highly-available versioned APIs.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Enterprise Multi-Warehouse Architecture",
      description: "Proven ability to design architecture beyond simple apps. I engineered multi-warehouse stock management with automated transfers, low-stock alerts, and 3-tier hierarchy with granular role-based access control.",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "API Testing, Security & CI/CD Automation",
      description: "Rigorously test, validate, and secure APIs with OAuth2, JWT, RBAC, Postman, and Insomnia. Automate builds and continuous deployment pipelines using GitHub Actions CI/CD to ensure rock-solid production releases.",
      icon: <ShieldCheck className="w-8 h-8" />
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
