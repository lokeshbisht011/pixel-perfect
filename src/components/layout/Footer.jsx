"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/pixel.art.dailyy",
      label: "Instagram",
      color: "pixel-neon-pink",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@Pixel.Art.Dailyy",
      label: "Youtube",
      color: "pixel-neon-yellow",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/pixelart_daily",
      label: "Twitter",
      color: "pixel-neon-cyan",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61586891890294",
      label: "Facebook",
      color: "pixel-neon-green",
    },
  ];

  const footerLinks = [
    {
      title: "Community",
      links: [
        { name: "Gallery", href: "/gallery" },
        { name: "Leaderboard", href: "/leaderboard" },
        { name: "Challenges", href: "#challenges" },
        { name: "Discord", href: "#discord" },
      ],
    },
    {
      title: "Create",
      links: [
        { name: "PixelArt Editor", href: "/create" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "Tips & Tricks", href: "#tips" },
        { name: "Resources", href: "#resources" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 py-16 px-6 border-t border-border">
      {/* Decorative pixel elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pixel-neon-cyan via-pixel-neon-pink via-pixel-neon-green to-pixel-neon-yellow"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-main rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold font-mono">
                <span className="text-pixel-neon-cyan">Pixel</span>
                <span className="text-pixel-neon-pink">Art</span>
                <span className="text-pixel-neon-green">Daily</span>
              </h3>
            </motion.div>

            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Join thousands of pixel artists worldwide in daily creative
              challenges. Create, share, and discover amazing 8-bit pixel art
              with our vibrant community.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-${social.color} text-background rounded-sm flex items-center justify-center hover:bg-${social.color}/80 transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4 font-mono text-pixel-neon-cyan">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-2 font-mono">
                <span className="text-pixel-neon-pink">Stay</span>{" "}
                <span className="text-pixel-neon-cyan">Updated</span>
              </h4>
              <p className="text-muted-foreground text-sm">
                Get daily prompts and community highlights delivered to your
                inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 bg-card border border-border rounded-none font-mono text-sm flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-pixel-neon-cyan"
              />
              <Button variant="pixel" size="sm" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pixel-neon-pink fill-current" />
            </motion.div>
            <span>for pixel artists worldwide</span>
          </div>

          <div className="text-sm text-muted-foreground font-mono">
            © {currentYear} PixelArtDaily. All rights reserved.
          </div>
        </motion.div>

        {/* Decorative pixel dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 ${
                i % 2 === 0 ? "bg-pixel-neon-cyan" : "bg-pixel-neon-pink"
              }`}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
