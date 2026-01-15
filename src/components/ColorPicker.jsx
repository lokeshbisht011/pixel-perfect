"use client";

import React, { useState, useEffect, useMemo } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { Palette, X, Sun, Moon, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const initialSwatches = [
  "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#fd79a8",
  "#6c5ce7", "#a29bfe", "#fd63a3", "#00b894", "#e17055", "#2d3436",
  "#636e72", "#8e44ad", "#2980b9", "#27ae60", "#f39c12"
];

export default function ColorPicker({ activeColor, setActiveColor }) {
  const [showPicker, setShowPicker] = useState(false);
  const [palette, setPalette] = useState(initialSwatches);
  const [recentColors, setRecentColors] = useState([]);
  
  // baseColor controls the shading ramp (Top Row)
  const [baseColor, setBaseColor] = useState(activeColor);
  const [pickerColor, setPickerColor] = useState(activeColor);

  // --- Shade Generation ---
  const shades = useMemo(() => {
    const c = colord(baseColor);
    return [
      c.darken(0.15).toHex(), // Shadow 2
      c.darken(0.08).toHex(), // Shadow 1
      baseColor,               // Base
      c.lighten(0.08).toHex(), // Highlight 1
      c.lighten(0.15).toHex(), // Highlight 2
    ];
  }, [baseColor]);

  // --- LRU Logic for Recent Colors ---
  useEffect(() => {
    const color = activeColor.toLowerCase();
    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== color);
      return [color, ...filtered].slice(0, 10); // Keep last 10
    });
  }, [activeColor]);

  const handlePaletteClick = (color) => {
    setBaseColor(color);   // Update the shading row
    setActiveColor(color); // Set as active brush
  };

  return (
    <div className="pixel-card-single bg-card p-4 space-y-5">
      <h3 className="font-bold text-card-foreground flex items-center gap-2 border-b border-border pb-2">
        <Palette className="w-4 h-4" /> Colors
      </h3>

      {/* 1. Shade Row: Clicking these does NOT change the baseColor/Ramp */}
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] font-mono uppercase text-muted-foreground px-1">
          <span>Shadows</span>
          <span className="text-primary tracking-widest">Auto-Shades</span>
          <span>Highlights</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {shades.map((color, i) => (
            <button
              key={`shade-${i}`}
              onClick={() => setActiveColor(color)}
              className={`aspect-square border-2 transition-all ${
                activeColor.toLowerCase() === color.toLowerCase()
                  ? "border-primary scale-105 z-10"
                  : "border-border hover:opacity-80"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* 2. Recent Colors (LRU) */}
      {recentColors.length > 0 && (
        <div className="space-y-1">
          <p className="text-[9px] font-mono uppercase text-muted-foreground flex items-center gap-1">
            <History className="w-2.5 h-2.5" /> Recent
          </p>
          <div className="flex flex-wrap gap-1.5">
            {recentColors.map((color) => (
              <button
                key={`recent-${color}`}
                onClick={() => handlePaletteClick(color)}
                className="w-6 h-6 border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 3. Main Palette */}
      <div className="space-y-1">
        <p className="text-[9px] font-mono uppercase text-muted-foreground">Master Palette</p>
        <div className="grid grid-cols-6 gap-1.5">
          {palette.map((color) => (
            <button
              key={color}
              onClick={() => handlePaletteClick(color)}
              className={`aspect-square border-2 ${
                baseColor.toLowerCase() === color.toLowerCase() ? "border-primary" : "border-border"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <Button
        variant={showPicker ? "retro" : "neon"}
        size="sm"
        onClick={() => setShowPicker(!showPicker)}
        className="w-full font-mono text-xs h-8"
      >
        {showPicker ? <X className="w-3 h-3 mr-2" /> : <Palette className="w-3 h-3 mr-2" />}
        Custom Picker
      </Button>

      <AnimatePresence>
        {showPicker && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <HexColorPicker color={pickerColor} onChange={setPickerColor} className="!w-full mb-2" />
            <Button variant="pixel" size="sm" onClick={() => handlePaletteClick(pickerColor)} className="w-full">
              Select & Shade
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}