"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 border-t border-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
              Aaqib Mustafa.
            </a>
            <p className="mt-2 text-text-secondary text-sm">
              Backend Developer crafting reliable enterprise solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="https://github.com/AAQIBMUSTAFA" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/aaqibmustafa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:aaqibmustafaa@gmail.com" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 border-t border-text-secondary/20 pt-8 text-center"
        >
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Aaqib Mustafa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
