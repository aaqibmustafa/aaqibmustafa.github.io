"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("idle");

    try {
      const data = new FormData();
      data.append("access_key", "eb1b79b6-66c2-4347-8e5c-ff8e3ae11786");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const resultData = await response.json();
      if (resultData.success) {
        setResult("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsOpen(false);
          setResult("idle");
        }, 3000);
      } else {
        setResult("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] sm:w-[360px] bg-bg-secondary border border-text-secondary/10 rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-accent-primary p-4 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Contact Me</h3>
                <p className="text-sm text-white/80">Typically replies within hours</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-text-secondary/20 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-text-secondary/20 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-text-secondary/20 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                {result === "error" && (
                  <p className="text-red-500 text-xs font-medium">Something went wrong. Please try again.</p>
                )}
                {result === "success" && (
                  <p className="text-green-500 text-xs font-medium">Message sent successfully!</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || result === "success"}
                  className="w-full py-2.5 bg-accent-primary text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-accent-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : result === "success" ? (
                    "Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none active:scale-95"
        aria-label="Toggle chat widget"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
