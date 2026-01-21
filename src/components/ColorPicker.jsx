"use client";

import React, { useState, useEffect, useMemo } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { Palette, X, History, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const initialSwatches = [
  "#ff6b6b",
  "#4ecdc4",
  "#45b7d1",
  "#96ceb4",
  "#ffeaa7",
  "#fd79a8",
  "#6c5ce7",
  "#a29bfe",
  "#00b894",
  "#e17055",
  "#2d3436",
  "#636e72",
];

export default function ColorPicker({ activeColor, setActiveColor, compact }) {
  const [showPicker, setShowPicker] = useState(false);
  const [recentColors, setRecentColors] = useState([]);
  const [baseColor, setBaseColor] = useState(activeColor);
  const [pickerColor, setPickerColor] = useState(activeColor);

  const shades = useMemo(() => {
    const c = colord(baseColor);
    return [
      c.darken(0.12).toHex(),
      c.darken(0.06).toHex(),
      baseColor,
      c.lighten(0.06).toHex(),
      c.lighten(0.12).toHex(),
    ];
  }, [baseColor]);

  useEffect(() => {
    const color = activeColor.toLowerCase();
    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== color);
      return [color, ...filtered].slice(0, 8);
    });
  }, [activeColor]);

  const selectColor = (color) => {
    setBaseColor(color);
    setActiveColor(color);
  };

  return (
    <div className="md:pixel-card-single bg-card md:p-3 space-y-3">
      {/* Header */}
      <div className="relative flex items-center justify-between">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <Palette className="w-4 h-4" /> Color
        </h3>

        {/* Color Toggle Button */}
        <button
          onClick={() => setShowPicker((v) => !v)}
          className={`
      w-6 h-6 rounded border transition
      ${showPicker ? "ring-2 ring-primary" : "border-border"}
      hover:scale-105
    `}
          style={{ backgroundColor: activeColor }}
          aria-label="Open color picker"
        />

        {/* 🎯 PICKER POPOVER */}
        <AnimatePresence>
          {showPicker && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.15 }}
              className="
          absolute right-0 top-9 z-50
          bg-card border border-border
          rounded-lg shadow-xl
          p-3 w-[240px]
        "
            >
              <HexColorPicker
                color={pickerColor}
                onChange={setPickerColor}
                className="!w-full"
              />

              <Button
                size="sm"
                variant="pixel"
                className="w-full mt-2"
                onClick={() => {
                  selectColor(pickerColor);
                  setShowPicker(false);
                }}
              >
                Select
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shades */}
      <div className="grid grid-cols-5 gap-1">
        {shades.map((color) => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
            className={`aspect-square border ${
              activeColor === color ? "border-primary" : "border-border"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Recent */}
      {recentColors.length > 0 && (
        <div className="flex gap-1 overflow-x-auto">
          {recentColors.map((color) => (
            <button
              key={color}
              onClick={() => selectColor(color)}
              className="w-5 h-5 border border-border flex-shrink-0"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}

      {/* Palette */}
      <div className="grid grid-cols-6 gap-1">
        {initialSwatches.map((color) => (
          <button
            key={color}
            onClick={() => selectColor(color)}
            className={`aspect-square border ${
              baseColor === color ? "border-primary" : "border-border"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
