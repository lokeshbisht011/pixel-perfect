'use client'

import { motion } from "framer-motion";
import { Calendar, Palette, Share2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Get a Daily Prompt",
    description: "Receive a fresh, inspiring pixel art prompt to spark your creativity—no more staring at blank pixels.",
    icon: Calendar,
    color: "pixel-neon-cyan"
  },
  {
    number: "2", 
    title: "Create Your Pixel Art",
    description: "Use our powerful in-app pixel editor to bring your unique 8-bit vision to life.",
    icon: Palette,
    color: "pixel-neon-pink"
  },
  {
    number: "3",
    title: "Share & Connect",
    description: "Share your creation with our pixel art community and discover amazing artwork from fellow pixel artists.",
    icon: Share2,
    color: "pixel-neon-green"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="neon-glow text-pixel-neon-cyan">How</span>{" "}
          <span className="neon-glow text-pixel-neon-pink">It</span>{" "}
          <span className="neon-glow text-pixel-neon-green">Works</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of pixel artists in a simple, inspiring creative journey that fits into your daily routine.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="text-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="pixel-card p-4 md:p-8 h-full relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-12 md:w-16 h-12 md:h-16 bg-${step.color} rounded-sm mx-auto mb-4 md:mb-6 flex items-center justify-center relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-background" />
                    <motion.div 
                      className={`absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 md:w-8 h-6 md:h-8 bg-background text-${step.color} rounded-sm flex items-center justify-center font-bold font-mono text-sm md:text-lg border-2 border-${step.color}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 font-mono">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Decorative pixel corners */}
                  <div className={`absolute top-2 left-2 w-3 h-3 bg-${step.color} opacity-50`} />
                  <div className={`absolute top-2 right-2 w-3 h-3 bg-${step.color} opacity-50`} />
                  <div className={`absolute bottom-2 left-2 w-3 h-3 bg-${step.color} opacity-50`} />
                  <div className={`absolute bottom-2 right-2 w-3 h-3 bg-${step.color} opacity-50`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;