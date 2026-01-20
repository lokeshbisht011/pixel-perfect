'use client'
import { motion } from "framer-motion";
import Image from "next/image";

import pixelMonitor from "@/assets/pixel-monitor.jpg";
import pixelGamepad from "@/assets/pixel-gamepad.jpg";
import pixelBrush from "@/assets/pixel-brush.jpg";
import pixelPalette from "@/assets/pixel-palette.jpg";

const iconAssets = [
  { src: pixelMonitor, alt: "Easel", top: "10%", left: "10%" },
  { src: pixelGamepad, alt: "Monitor", top: "7%", left: "80%" },
  { src: pixelBrush, alt: "Gamepad", top: "5%", left: "30%" },
  { src: pixelPalette, alt: "Brush", top: "10%", left: "60%" },
];

const FloatingPixelIcons = () => {
  return (
    <div className="z-20 absolute inset-0 overflow-hidden pointer-events-none select-none">
      {iconAssets.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ 
            top: icon.top, 
            left: icon.left 
          }}
          // Your requested wiggle animation
          animate={{ x: [0, 5, 0], rotate: [0, -3, 3, 0] }}
          transition={{
            x: { 
              duration: 4.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.4 // Slight stagger so they don't move in perfect sync
            },
            rotate: { 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.2
            },
          }}
        >
          <Image 
            src={icon.src} 
            alt={icon.alt} 
            width={80} 
            height={80} 
            className="opacity-30 md:opacity-30 image-pixelated w-20 h-20 md:w-32 md:h-32"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPixelIcons;