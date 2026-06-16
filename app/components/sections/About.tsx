"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Database, Server, Briefcase, GraduationCap, Brain, Wrench } from "lucide-react";

export function About() {
  const experiences = [
    {
      role: "Backend Developer",
      company: "HMB Softwares Pvt. Ltd.",
      location: "Islamabad, PK",
      date: "Sept 2023 - Present",
      desc: "Architecting and maintaining scalable backend apps using PHP, Laravel. Managing ERP, CRM, and MRP systems, optimizing databases, and integrating AI and third-party services."
    },
    {
      role: "Junior PHP Developer",
      company: "Code Studio Pvt. Ltd.",
      location: "Islamabad, PK",
      date: "Nov 2022 - Aug 2023",
      desc: "Developed web apps using PHP & Laravel with MVC. Built RESTful APIs, optimized queries, and debugged backend issues in collaborative workflows."
    }
  ];

  const skills = [
    { name: "Languages", icon: <Code className="w-5 h-5" />, tech: "PHP (Expert), JavaScript, SQL, HTML/CSS" },
    { name: "Frameworks", icon: <Terminal className="w-5 h-5" />, tech: "Laravel (Expert), REST API (Expert), Bootstrap, Blade" },
    { name: "Databases", icon: <Database className="w-5 h-5" />, tech: "MySQL, Database Design, Eloquent ORM (All Expert)" },
    { name: "AI & Integrations", icon: <Brain className="w-5 h-5" />, tech: "OpenAI API, Stripe, Push Notifications (FCM/APNs), JWT Auth" },
    { name: "Tools", icon: <Wrench className="w-5 h-5" />, tech: "Postman, Insomnia, Git/GitHub, cURL, Linux/cPanel, Swagger" },
    { name: "Architecture", icon: <Server className="w-5 h-5" />, tech: "MVC, Multi-tenant, Role-based Access Control, Mobile-first APIs" },
  ];

  return (
    <section id="about" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Building reliable enterprise solutions.
            </h3>
            <div className="space-y-4 text-text-secondary text-lg mb-10">
              <p>
                I specialize in building scalable, high-performance backend systems and RESTful APIs using PHP, Laravel, and CodeIgniter. My expertise lies in database optimization, secure API design, and creating robust architectures for complex applications.
              </p>
              <p>
                I have a proven track record of delivering enterprise applications, particularly in MRP, ERP, and CRM solutions for the manufacturing, wellness, and corporate sectors.
              </p>
            </div>

            {/* Education */}
            <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent-primary" /> Education
            </h3>
            <div className="bg-bg-secondary p-6 rounded-xl border border-text-secondary/10 mb-8">
              <h4 className="font-bold text-text-primary">Bachelor of Science in Computer Science</h4>
              <p className="text-accent-primary font-medium text-sm mb-2">Gomal University, 2018 - 2023</p>
              <p className="text-sm text-text-secondary">CGPA: 3.8/4.0</p>
              <p className="text-sm text-text-secondary mt-2">Coursework: Data Structures, Database Systems, Software Engineering, OOP, Web Development.</p>
            </div>
            
            {/* Skills Grid */}
            <h3 className="text-xl font-bold text-text-primary mb-4">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-bg-secondary p-4 rounded-xl border border-text-secondary/10 hover:border-accent-primary/50 transition-colors flex items-start gap-3">
                  <div className="mt-1 text-accent-primary">{skill.icon}</div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">{skill.name}</h4>
                    <p className="text-xs text-text-secondary mt-1">{skill.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-accent-primary" /> Experience
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-text-secondary/20 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-bg-primary border-4 border-bg-secondary shadow shrink-0 z-10">
                     <div className="h-3 w-3 rounded-full bg-accent-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bg-secondary p-5 md:p-6 rounded-xl border border-text-secondary/10 hover:border-accent-primary/50 transition-colors ml-14 md:ml-0">
                    <div className="flex flex-col mb-2">
                      <span className="text-accent-primary font-medium text-sm">{exp.date}</span>
                      <h4 className="text-lg font-bold text-text-primary">{exp.role}</h4>
                      <span className="text-text-secondary text-sm">{exp.company} | {exp.location}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.desc}
                    </p>
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
