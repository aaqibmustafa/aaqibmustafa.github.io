"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ProjectModal, ProjectData } from "../ui/ProjectModal";

const projectsData: ProjectData[] = [
  {
    id: "proj-1",
    title: "COSMOCHAT — AI CONTENT PLATFORM",
    description: "A production-grade AI-powered content generation platform supporting 70+ use-cases — articles, images, ad copy, product descriptions, and more — with a full subscription billing engine, credit wallet, multi-language output (80+ languages), and voice-tone selection.",
    tech: ["PHP", "MySQL", "OpenAI API", "Stripe", "HTML/CSS", "JavaScript", "REST APIs"],
    images: ["/project_image/cosmochat1.png", "/project_image/cosmochat2.png", "/project_image/cosmochat3.png"],
    liveUrl: "https://cosmochat.ai/"
  },
  {
    id: "proj-8",
    title: "HMS — HOSTEL MANAGEMENT SYSTEM",
    description: "A full-featured, production-ready Hostel Management System built entirely in Laravel supporting 500+ hostels and 10,000+ students. Follows a three-tier hierarchy with Master Admin, Branch Admins, and self-operated management. Handles rooms, beds, tenants, booking, billing, and financials.",
    tech: ["Laravel", "PHP", "MySQL", "Blade Templates", "JavaScript", "Bootstrap", "REST API", "Role-based Auth"],
    images: ["/project_image/HMS-1.png", "/project_image/HMS-2.png", "/project_image/HMS-3.png", "/project_image/HMS-4.png"],
    liveUrl: "https://demo.hmbsoftwares.com/hms/"
  },
  {
    id: "proj-3",
    title: "HMB CONNECT — WELLNESS PLATFORM",
    description: "A US-based wellness and clinic management platform that helps therapists, coaches, and patients stay on track with mental and physical health journeys. Designed and built the entire backend API layer covering authentication, appointment flows, task management, and practitioner-patient communication.",
    tech: ["PHP", "REST API", "MySQL", "JWT Auth", "JSON"],
    images: ["/project_image/HMBconnect-1.png", "/project_image/HMBconnect-2.png", "/project_image/HMBconnect-3.png", "/project_image/HMBconnect-4.png"],
    liveUrl: "https://connect.healmb.com/home"
  },
  {
    id: "proj-2",
    title: "COSMOCHAT — MOBILE APP",
    description: "Built all server-side REST APIs powering the CosmoChat mobile experience — enabling users to generate content, manage their accounts, and consume subscription credits on the go. Every feature of the web platform was exposed via secure, versioned API endpoints consumed by both iOS and Android apps.",
    tech: ["PHP", "REST API", "JSON", "JWT Auth", "MySQL", "OpenAI API"],
    images: ["/project_image/cosmochat-mob1.jpg", "/project_image/cosmochat-mob2.jpg", "/project_image/cosmochat-mob3.jpg"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.oranje.cosmochat",
    iosUrl: "https://apps.apple.com/ar/app/cosmochat/id6630374265?l=en-GB"
  },
  {
    id: "proj-9",
    title: "TAMIMIATS — GENERAL CONTRACTING CORPORATE WEBSITE",
    description: "Designed and developed the complete corporate web presence for Tamimiats, a leading Saudi-based general contracting company. Showcases mega-projects, publishes tenders, manages job postings, and processes vendor registrations — all powered by a custom Laravel CMS.",
    tech: ["Laravel", "PHP", "MySQL", "Blade Templates", "JavaScript", "Bootstrap", "Custom CMS"],
    images: ["/project_image/tamimi1.jpg", "/project_image/tamimi2.jpg", "/project_image/tamimi3.jpg"],
    liveUrl: "https://tamimiats.com/"
  },
  {
    id: "proj-6",
    title: "HEALMINDBODY — MOBILE APP",
    description: "Built all server-side REST APIs exclusively consumed by the HealMindBody iOS and Android apps. Handles AI prompt routing, session persistence, and push notification delivery at scale. Users can generate AI-powered meditations on the go.",
    tech: ["PHP", "REST API", "MySQL", "OpenAI API", "JWT Auth", "Push Notifications", "JSON"],
    images: ["/project_image/healmb-Mob-1.jpg", "/project_image/healmb-Mob-2.jpg", "/project_image/healmb-Mob-3.jpg"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.oranje.HealMindBodyFront&hl=en",
    iosUrl: "https://apps.apple.com/us/app/heal-mind-body/id6738090613"
  },
  {
    id: "proj-7",
    title: "SALEPRO — POINT OF SALE SYSTEM",
    description: "SalePro is a fully custom, production-ready Point of Sale system built entirely in Laravel. Handled the complete project — from database architecture and business logic to UI and admin dashboard. Handles real retail operations, inventory, suppliers, purchasing, and reporting.",
    tech: ["Laravel", "PHP", "MySQL", "Blade Templates", "JavaScript", "Bootstrap", "REST API"],
    images: ["/project_image/POS-1.png", "/project_image/POS-2.png", "/project_image/POS-3.png"],
    liveUrl: "https://demo.hmbsoftwares.com/login"
  },
  {
    id: "proj-5",
    title: "HEALMINDBODY — WEBSITE",
    description: "HealMindBody is a live AI-powered wellness platform at healmb.com serving thousands of users. Built the complete backend API layer covering user authentication, AI-generated meditation sessions, a meditation library, and wellness tracking.",
    tech: ["PHP", "REST API", "MySQL", "OpenAI API", "JWT Auth", "JSON"],
    images: ["/project_image/healmindbody1.png", "/project_image/healmindbody2.png", "/project_image/healmindbody3.png"],
    liveUrl: "https://healmb.com/"
  },
  {
    id: "proj-4",
    title: "HEALMB CONNECT — MOBILE APP",
    description: "Engineered all backend REST APIs for the HealMB mobile app available on the App Store and Google Play. The app allows patients to manage their wellness routines, connect with practitioners, book sessions, and track healing tasks. Handled all data flow, push alerts, and secure JWT authentication.",
    tech: ["PHP", "REST API", "MySQL", "JWT Auth", "Push Notifications", "JSON"],
    images: ["/project_image/hmbconnect-Mob1.jpg", "/project_image/hmbconnect-Mob2.jpg", "/project_image/hmbconnect-Mob3.jpg", "/project_image/hmbconnect-Mob4.jpg"],
    androidUrl: "https://play.google.com/store/apps/details?id=oranjeclick.com.healmindbody&hl=en",
    iosUrl: "https://apps.apple.com/pk/app/healmb-connect/id1460764962"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, projectsData.length - 1));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

    const variants = {
    active: {
      x: 0,
      z: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    left1: {
      x: "-55%",
      z: -150,
      rotateY: 30,
      scale: 0.75,
      opacity: 0.7,
      zIndex: 5,
    },
    left2: {
      x: "-90%",
      z: -250,
      rotateY: 50,
      scale: 0.55,
      opacity: 0.3,
      zIndex: 1,
    },
    right1: {
      x: "55%",
      z: -150,
      rotateY: -30,
      scale: 0.75,
      opacity: 0.7,
      zIndex: 5,
    },
    right2: {
      x: "90%",
      z: -250,
      rotateY: -50,
      scale: 0.55,
      opacity: 0.3,
      zIndex: 1,
    },
    hiddenLeft: {
      x: "-120%",
      z: -350,
      rotateY: 65,
      scale: 0.4,
      opacity: 0,
      zIndex: -1,
    },
    hiddenRight: {
      x: "120%",
      z: -350,
      rotateY: -65,
      scale: 0.4,
      opacity: 0,
      zIndex: -1,
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-lg">
            Swipe or click through my production-ready systems. Click the center card for full details.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full h-[65vh] min-h-[450px] max-h-[650px] flex items-center justify-center [perspective:1400px] mt-4 md:mt-10">
          
          {/* Controls */}
          {activeIndex > 0 && (
            <button 
              onClick={prev}
              className="hidden md:flex absolute md:left-8 lg:left-16 z-30 p-3 md:p-4 bg-bg-secondary/50 hover:bg-accent-primary/80 text-white rounded-full backdrop-blur-xl border border-white/10 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}

          {activeIndex < projectsData.length - 1 && (
            <button 
              onClick={next}
              className="hidden md:flex absolute md:right-8 lg:right-16 z-30 p-3 md:p-4 bg-bg-secondary/50 hover:bg-accent-primary/80 text-white rounded-full backdrop-blur-xl border border-white/10 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          )}

          {projectsData.map((project, index) => {
            const offset = index - activeIndex;
            let animateState = "hiddenRight";
            if (offset === 0) animateState = "active";
            else if (offset === -1) animateState = "left1";
            else if (offset === -2) animateState = "left2";
            else if (offset < -2) animateState = "hiddenLeft";
            else if (offset === 1) animateState = "right1";
            else if (offset === 2) animateState = "right2";
            else if (offset > 2) animateState = "hiddenRight";

            const isActive = offset === 0;

            return (
              <motion.div
                key={project.id}
                variants={variants}
                animate={animateState}
                initial={false}
                transition={{ duration: 0.6, type: "spring", stiffness: 220, damping: 25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold || offset.x < -50) {
                    next();
                  } else if (swipe > swipeConfidenceThreshold || offset.x > 50) {
                    prev();
                  }
                }}
                onClick={() => {
                  if (isActive) setSelectedProject(project);
                  else setActiveIndex(index);
                }}
                className={`absolute w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[800px] h-full bg-bg-secondary/80 backdrop-blur-3xl rounded-3xl overflow-hidden flex flex-col border transition-colors duration-300 ${isActive ? 'border-accent-primary/60 shadow-[0_0_60px_rgba(var(--accent-primary-rgb),0.15)] cursor-grab active:cursor-grabbing' : 'border-text-secondary/10 shadow-2xl cursor-pointer hover:border-text-secondary/30 pointer-events-none md:pointer-events-auto'}`}
                style={{ transformStyle: "preserve-3d", touchAction: "pan-y" }}
              >
                {/* Media Section */}
                <div className="relative w-full h-[45%] md:h-[50%] bg-bg-primary flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent opacity-90 z-10" />
                  
                  {project.images && project.images.length > 0 ? (
                    <>
                      <img 
                        src={project.images[0]} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125"
                      />
                      <motion.img 
                        whileHover={isActive ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.4 }}
                        src={project.images[0]} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 z-10 drop-shadow-2xl"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-bg-primary to-bg-secondary opacity-50" />
                  )}
                  
                  {isActive && (
                    <div className="absolute top-4 right-4 z-20 pointer-events-none">
                      <div className="bg-bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-text-secondary/20 flex items-center gap-2 text-xs font-medium text-text-primary shadow-sm">
                        <ArrowRight className="w-3 h-3 -rotate-45 text-accent-primary" /> View Details
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6 md:p-8 relative z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className={`text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border ${isActive ? 'bg-accent-primary/10 text-accent-primary border-accent-primary/20' : 'bg-bg-primary/50 text-text-secondary border-text-secondary/10'}`}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className={`text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border ${isActive ? 'bg-bg-primary/80 text-text-secondary border-text-secondary/20' : 'bg-bg-primary/50 text-text-secondary border-text-secondary/10'}`}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 h-2 bg-accent-primary shadow-[0_0_10px_rgba(var(--accent-primary-rgb),0.5)]' : 'w-2 h-2 bg-text-secondary/30 hover:bg-text-secondary/60'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
