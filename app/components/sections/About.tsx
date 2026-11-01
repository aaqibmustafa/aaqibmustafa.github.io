"use client";

import { motion } from "framer-motion";
import { 
  Server, 
  Code, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Brain, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages as LanguagesIcon, 
  Building2, 
  MapPin, 
  Sparkles,
  Calendar
} from "lucide-react";

export function About() {
  const stats = [
    { value: "4+", label: "Years Experience", detail: "Full Stack & Systems" },
    { value: "6+", label: "Production Systems", detail: "POS, ERP & AI SaaS" },
    { value: "99.9%", label: "System Reliability", detail: "High-Availability Uptime" },
    { value: "3.8", label: "CGPA Distinction", detail: "BS Computer Science" }
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Red Star Technologies",
      location: "Islamabad, PK",
      date: "Sep 2026 - Present",
      isCurrent: true,
      points: [
        "Lead developer for Owner POS, architecting a modular add-on engine allowing custom modules per client without touching core code.",
        "Engineered multi-warehouse inventory automation with inter-branch transfers, branch-level access control, and real-time low-stock alerts.",
        "Built Node.js and Express.js REST APIs backed by PostgreSQL and unified e-commerce syncing for real-time inventory and orders."
      ],
      tech: ["Laravel", "PHP", "Node.js", "Express.js", "PostgreSQL", "AWS S3/RDS", "REST APIs", "RBAC", "E-Commerce", "AI Workflows"]
    },
    {
      role: "Full Stack Developer",
      company: "HMB Softwares Pvt. Ltd.",
      location: "Islamabad, PK",
      date: "Sep 2023 - Aug 2026",
      isCurrent: false,
      points: [
        "Delivered full-lifecycle ERP, CRM, POS, and HRM business platforms using Laravel, PHP, CodeIgniter, JavaScript, and Blade.",
        "Engineered backend infrastructure for Cosmochat.ai (70+ AI tools in 80+ languages) and HealMindBody multi-channel platform (Web, iOS, Android).",
        "Secured enterprise APIs with OAuth2, JWT, and RBAC, while provisioning cloud infrastructure and CI/CD pipelines across AWS (EC2, S3, RDS, SES) and GitHub Actions."
      ],
      tech: ["Laravel", "PHP", "MySQL", "MongoDB", "REST APIs", "AWS (EC2, S3, RDS, SES)", "GitHub Actions", "Blade"]
    },
    {
      role: "Junior PHP Developer",
      company: "Code Studio Pvt. Ltd.",
      location: "Islamabad, PK",
      date: "Nov 2022 - Aug 2023",
      isCurrent: false,
      points: [
        "Built MVC web applications and optimized relational database queries in Laravel to ensure fast response times.",
        "Constructed and documented RESTful APIs in collaborative team sprints using Git version control and Agile workflows."
      ],
      tech: ["PHP", "Laravel", "MySQL", "REST APIs", "Git", "MVC Architecture"]
    }
  ];

  const skillCategories = [
    {
      name: "Backend & Systems",
      icon: <Server className="w-4 h-4 text-accent-primary" />,
      skills: ["Laravel", "PHP", "Node.js", "Express.js", "CodeIgniter", "REST APIs", "API Versioning"]
    },
    {
      name: "Frontend & UI",
      icon: <Code className="w-4 h-4 text-accent-secondary" />,
      skills: ["JavaScript (ES6+)", "Next.js", "React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Blade"]
    },
    {
      name: "Databases & Architecture",
      icon: <Database className="w-4 h-4 text-accent-primary" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization", "Indexing"]
    },
    {
      name: "Cloud, Security & DevOps",
      icon: <ShieldCheck className="w-4 h-4 text-accent-secondary" />,
      skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS SES", "OAuth2", "JWT", "RBAC", "GitHub Actions CI/CD", "Linux / cPanel"]
    },
    {
      name: "Business Systems",
      icon: <Terminal className="w-4 h-4 text-accent-primary" />,
      skills: ["POS", "ERP", "MRP", "CRM", "HRM", "E-Commerce", "Multi-Warehouse Inventory"]
    },
    {
      name: "Modern AI & Dev Tools",
      icon: <Brain className="w-4 h-4 text-accent-secondary" />,
      skills: ["Claude", "Cursor IDE", "Codex", "Antigravity", "Git", "Postman", "Insomnia"]
    }
  ];

  const certifications = [
    "Master Full-Stack Laravel Web Development",
    "JavaScript Basics",
    "Introduction to SQL"
  ];

  return (
    <section id="about" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Professional Background
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Engineering scalable business systems, modular point-of-sale platforms, and high-performance APIs.
          </p>
        </motion.div>

        {/* Top Key Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-bg-secondary/70 backdrop-blur-sm p-5 rounded-2xl border border-text-secondary/10 hover:border-accent-primary/40 transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-text-primary">{stat.label}</div>
              <div className="text-xs text-text-secondary mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Balanced Layout: 5 Columns Left, 7 Columns Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Profile, Skills, Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Executive Bio Card */}
            <div className="bg-bg-secondary p-6 sm:p-7 rounded-2xl border border-text-secondary/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Full Stack & Systems Architect
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                Full Stack Developer with <strong className="text-text-primary font-semibold">4 years of experience</strong> architecting and shipping mission-critical business systems across POS, ERP, inventory, and AI SaaS.
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Specialized in <strong className="text-text-primary font-semibold">Laravel, PHP, and Node.js</strong>, designing secure REST APIs (OAuth2, JWT, RBAC), PostgreSQL/MySQL database optimization, and cloud architecture across <strong className="text-text-primary font-semibold">AWS (EC2, RDS, S3, SES)</strong> with automated CI/CD pipelines. I leverage modern AI developer workflows (Claude, Cursor, Codex, Antigravity) to deliver robust, production-ready code with velocity.
              </p>
            </div>

            {/* Technical Arsenal: Categorized Pill Tags */}
            <div className="bg-bg-secondary p-6 sm:p-7 rounded-2xl border border-text-secondary/10 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent-primary" /> Technical Arsenal
              </h3>

              <div className="space-y-4">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="border-b border-text-secondary/10 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex items-center gap-2 text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                      {cat.icon}
                      <span>{cat.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-bg-primary text-text-secondary border border-text-secondary/10 hover:border-accent-primary/40 hover:text-text-primary transition-colors font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="bg-bg-secondary p-6 sm:p-7 rounded-2xl border border-text-secondary/10 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent-primary" /> Education & Credentials
              </h3>

              {/* University */}
              <div className="bg-bg-primary p-4 rounded-xl border border-text-secondary/10 mb-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-bold text-text-primary text-sm">BS in Computer Science</h4>
                  <span className="text-xs font-semibold text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                    2018 - 2022
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-2">Gomal University, D.I. Khan</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold">
                  <span>★</span> CGPA 3.8 / 4.0 — Graduated with Distinction
                </div>
              </div>

              {/* Certifications & Languages Dual Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-bg-primary p-3.5 rounded-xl border border-text-secondary/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2">
                    <Award className="w-3.5 h-3.5 text-accent-primary" /> Certifications
                  </div>
                  <ul className="text-xs text-text-secondary space-y-1">
                    {certifications.map((c, i) => (
                      <li key={i} className="line-clamp-1" title={c}>• {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-bg-primary p-3.5 rounded-xl border border-text-secondary/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2">
                    <LanguagesIcon className="w-3.5 h-3.5 text-accent-primary" /> Languages
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Urdu</span>
                      <span className="text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-1.5 py-0.5 rounded">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">English</span>
                      <span className="text-[10px] font-bold text-accent-secondary bg-accent-secondary/10 px-1.5 py-0.5 rounded">Fluent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Full-Width Professional Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2.5">
                <Briefcase className="w-6 h-6 text-accent-primary" /> Professional Experience
              </h3>
              <span className="text-xs font-semibold text-text-secondary bg-bg-secondary px-3 py-1 rounded-full border border-text-secondary/10">
                4 Years Track Record
              </span>
            </div>

            {/* Single Continuous Left-Aligned Track: Full Card Width */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-accent-primary/25 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-bg-primary transition-all duration-300 ${
                    exp.isCurrent 
                      ? 'bg-accent-primary ring-4 ring-accent-primary/20 scale-125' 
                      : 'bg-text-secondary/40 group-hover:bg-accent-primary group-hover:scale-110'
                  }`} />

                  {/* Job Card: 100% of the column width */}
                  <div className="w-full bg-bg-secondary p-5 sm:p-6 rounded-2xl border border-text-secondary/10 hover:border-accent-primary/40 transition-all duration-300 shadow-sm">
                    
                    {/* Header: Title, Date, Current Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                            {exp.role}
                          </h4>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Current Role
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary font-medium mt-1">
                          <span className="flex items-center gap-1 text-text-primary font-semibold">
                            <Building2 className="w-3.5 h-3.5 text-accent-primary" /> {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-text-secondary" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto border border-accent-primary/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.date}</span>
                      </div>
                    </div>

                    {/* Concise, High-Impact Professional Bullets */}
                    <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="pt-3 border-t border-text-secondary/10 flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-bg-primary text-text-secondary border border-text-secondary/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
