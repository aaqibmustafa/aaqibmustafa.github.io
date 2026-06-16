"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./SocialIcons";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Reset state when a new project is opened
  if (!isOpen || !project) return null;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-bg-secondary rounded-2xl shadow-2xl border border-text-secondary/20 overflow-hidden flex flex-col max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-bg-primary/50 hover:bg-bg-primary rounded-full text-text-primary transition-colors backdrop-blur-md"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex-1 overflow-y-auto relative">
            {/* Media Section */}
            <div className="relative w-full aspect-video bg-bg-primary flex items-center justify-center overflow-hidden group">
              {showVideo && project.video ? (
                <div className="w-full h-full bg-black flex items-center justify-center text-text-secondary">
                  {/* Real implementation would use an iframe or video tag */}
                  <div className="text-center p-4">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Video Player Placeholder for {project.video}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-full h-full flex items-center justify-center bg-bg-secondary/50 relative overflow-hidden">
                    {/* Blurred background */}
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
                    />
                    {/* Actual image */}
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 z-10 pointer-events-none"
                    />
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white z-20 pointer-events-none">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="absolute left-4 z-30 p-2 bg-bg-primary/80 hover:bg-bg-primary rounded-full text-text-primary opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-4 z-30 p-2 bg-bg-primary/80 hover:bg-bg-primary rounded-full text-text-primary opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.video && !showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-secondary text-white rounded-lg font-medium hover:bg-accent-secondary/90 transition-colors"
                    >
                      <Play className="w-4 h-4 fill-current" /> Watch Demo
                    </button>
                  )}
                  {showVideo && (
                    <button
                      onClick={() => setShowVideo(false)}
                      className="flex items-center gap-2 px-4 py-2 bg-bg-primary text-text-primary border border-text-secondary/20 rounded-lg font-medium hover:bg-bg-primary/80 transition-colors"
                    >
                      Back to Gallery
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-bg-primary text-text-primary border border-text-secondary/20 rounded-lg font-medium hover:bg-bg-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Site
                    </a>
                  )}
                  {project.androidUrl && (
                    <a
                      href={project.androidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#3DDC84] text-black rounded-lg font-bold hover:bg-[#3DDC84]/90 transition-colors"
                    >
                      Play Store
                    </a>
                  )}
                  {project.iosUrl && (
                    <a
                      href={project.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white border border-white/20 rounded-lg font-medium hover:bg-black/80 transition-colors"
                    >
                      App Store
                    </a>
                  )}
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none text-text-secondary">
                <p className="text-lg leading-relaxed">{project.description}</p>
                {/* Additional content could go here */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
