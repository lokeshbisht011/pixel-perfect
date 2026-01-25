"use client";

import React, { useState, useEffect, useMemo } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import { Palette, X, History, ChevronDown, Pipette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const initialSwatches = [
  // Neutrals (left → right)
  "#000000", // black
  "#3d3d3d", // dark gray
  "#7f7f7f", // gray
  "#bfbfbf", // light gray
  "#ffffff", // white

  // Warm colors
  "#ff595e", // red
  "#ff924c", // orange
  "#ffca3a", // yellow

  // Greens
  "#8ac926", // light green
  "#1982c4", // teal / cyan

  // Blues
  "#4267ac", // blue
  "#4d96ff", // light blue

  // Purples / Pinks
  "#6a4c93", // purple
  "#9d4edd", // violet
  "#ff6bd6", // pink

  // Brown / skin / earth
  "#8d5524", // brown
];

export default function ColorPicker({
  activeColor,
  setActiveColor,
  onEyedropper,
  eyedropperActive,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [recentColors, setRecentColors] = useState([]);
  const [baseColor, setBaseColor] = useState(activeColor);
  const [pickerColor, setPickerColor] = useState(activeColor);
  const [shades, setShades] = useState([]);

  useEffect(() => {
    const c = colord(baseColor);
    if (!c.isValid()) {
      setShades(Array(7).fill(baseColor));
      return;
    }
    const allShades = [
      c.darken(0.18).toHex(),
      c.darken(0.12).toHex(),
      c.darken(0.06).toHex(),
      baseColor,
      c.lighten(0.06).toHex(),
      c.lighten(0.12).toHex(),
      c.lighten(0.18).toHex(),
    ];

    setShades(Array.from(new Set(allShades)));
  }, [baseColor]);

  useEffect(() => {
    const color = activeColor.toLowerCase();
    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== color);
      return [color, ...filtered].slice(0, 10);
    });
    setPickerColor(color);
  }, [activeColor]);

  useEffect(() => {
    const color = activeColor.toLowerCase();

    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== color);
      return [color, ...filtered].slice(0, 10);
    });

    setPickerColor(color);

    setShades((prevShades) => {
      if (!prevShades.includes(color)) {
        setBaseColor(color);
      }
      return prevShades;
    });
  }, [activeColor]);

  const selectColor = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="md:pixel-card-single bg-card md:p-3 space-y-3">
      {/* Header */}
      <div className="relative flex items-center justify-between">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <Palette className="w-4 h-4" /> Color
        </h3>
        <div className="flex items-center gap-2">
          {/* EYEDROPPER */}
          <button
            type="button"
            onClick={onEyedropper}
            className={`
        w-6 h-6 flex items-center justify-center
        rounded border
        transition
        ${
          eyedropperActive
            ? "bg-primary text-primary-foreground ring-2 ring-primary"
            : "border-border hover:bg-muted"
        }
      `}
            aria-label="Pick color from canvas"
            title="Eyedropper"
          >
            <Pipette className="w-4 h-4" />
          </button>

          {/* COLOR TOGGLE */}
          <button
            onClick={() => setShowPicker((v) => !v)}
            className={`
        w-6 h-6 rounded border transition
        ${showPicker ? "ring-2 ring-primary" : "border-border"}
      `}
            style={{ backgroundColor: activeColor }}
          />
        </div>
        {/* 🎯 PICKER POPOVER */}{" "}
        <AnimatePresence>
          {" "}
          {showPicker && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.15 }}
              className=" absolute right-0 top-9 z-50 bg-card border border-border rounded-lg shadow-xl p-3 w-[240px] "
            >
              {" "}
              <HexColorPicker
                color={pickerColor}
                onChange={setPickerColor}
                className="!w-full"
              />{" "}
              <Button
                size="sm"
                variant="pixel"
                className="w-full mt-2"
                onClick={() => {
                  selectColor(pickerColor);
                  setShowPicker(false);
                }}
              >
                {" "}
                Select{" "}
              </Button>{" "}
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </div>

      {/* Shades */}
      <div className="space-y-1">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Shades
        </div>
        <div className="grid grid-cols-7 gap-1">
          {shades.map((color) => (
            <button
              key={color}
              onClick={() => setActiveColor(color)}
              className={`aspect-square border ${
                activeColor === color
                  ? "border-primary border-4"
                  : "border-border"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Recent */}
      {recentColors.length > 0 && (
        <div className="space-y-1">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
            Recent
          </div>

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
        </div>
      )}

      {/* Palette */}
      <div className="space-y-1">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
          Palette
        </div>
        <div className="grid grid-cols-8 gap-1">
          {initialSwatches.map((color) => (
            <button
              key={color}
              onClick={() => selectColor(color)}
              className={`aspect-square border ${
                baseColor === color
                  ? "border-primary border-4"
                  : "border-border"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
