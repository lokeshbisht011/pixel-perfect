import React from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, History, X, Grid, RotateCw, Trash2 } from "lucide-react";
import ColorPicker from "../ColorPicker";
import { Input } from "../ui/input";
import { Separator } from "@/components/ui/separator";

const GRID_SIZES = [8, 16, 24, 32, 48, 64, 96, 128];
const ZOOM_LEVELS = [1, 2, 3, 4, 6, 8];

const Toolbar = ({
  tools,
  title,
  setTitle,
  activeTool,
  onToolChange,
  onUndo,
  onRedo,
  onClear,
  historyIndex,
  historyLength,
  sliderGridSize,
  setSliderGridSize,
  zoom,
  handleZoomChange,
  activeColor,
  setActiveColor,
}) => {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block space-y-6">
        {/* Title */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-3">Title</h3>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name your pixel art…"
            className="font-mono"
          />
        </div>

        {/* Tools */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-3">Tools</h3>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                size="sm"
                variant={activeTool === tool.id ? "neon" : "pixel"}
                onClick={() => onToolChange(tool.id)}
                className="justify-start gap-2"
              >
                <tool.icon className="w-4 h-4" />
                {tool.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Color */}
        <ColorPicker
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />

        {/* History */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-3">History</h3>
          <div className="flex gap-2">
            <Button
              variant="pixel"
              onClick={onUndo}
              disabled={historyIndex <= 0}
              className="w-full"
            >
              Undo
            </Button>
            <Button
              variant="pixel"
              onClick={onRedo}
              disabled={historyIndex >= historyLength - 1}
              className="w-full"
            >
              Redo
            </Button>
          </div>

          <Button variant="neon" className="w-full mt-2" onClick={onClear}>
            Clear Canvas
          </Button>
        </div>

        {/* Canvas Controls */}
        <div className="pixel-card-single bg-card p-4 space-y-4">
          <h3 className="font-bold">Canvas</h3>

          {/* Zoom */}
          <div>
            <p className="text-sm mb-2">Zoom: {zoom}×</p>
            <Slider
              value={[zoom]}
              min={1}
              max={8}
              step={0.25}
              onValueChange={(v) => handleZoomChange(v[0])}
            />
          </div>

          {/* Grid Size */}
          <div>
            <p className="text-sm mb-2">
              Size: {sliderGridSize} × {sliderGridSize}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {GRID_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSliderGridSize(size)}
                  className={`
            rounded-md py-2 text-xs font-medium
            ${
              sliderGridSize === size
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/70"
            }
          `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TOOLBAR */}
      <div className="lg:hidden space-y-2">
        <Separator />
        <div className="bg-card p-3 space-y-4">
          {/* Tools Row */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  size="icon"
                  variant={activeTool === tool.id ? "neon" : "pixel"}
                  onClick={() => onToolChange(tool.id)}
                  className="h-9 w-9"
                >
                  <tool.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            <div className="h-8 w-px bg-border mx-2" />

            <div className="flex gap-2">
              <Button
                size="icon"
                variant="pixel"
                onClick={onUndo}
                disabled={historyIndex <= 0}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="pixel"
                onClick={onRedo}
                disabled={historyIndex >= historyLength - 1}
              >
                <RotateCw className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="neon" onClick={onClear}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          </div>

          {/* Zoom */}
          <div>
            <p className="text-xs mb-2 text-muted-foreground">Zoom</p>
            <div className="flex gap-2">
              {ZOOM_LEVELS.map((z) => (
                <button
                  key={z}
                  onClick={() => handleZoomChange(z)}
                  className={`
              px-3 py-1 rounded-md text-xs
              ${zoom === z ? "bg-primary text-primary-foreground" : "bg-muted"}
            `}
                >
                  {z}×
                </button>
              ))}
            </div>
          </div>

          {/* Grid Size */}
          <div>
            <p className="text-xs mb-2 text-muted-foreground">
              Grid: {sliderGridSize} × {sliderGridSize}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {GRID_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSliderGridSize(size)}
                  className={`
              py-2 rounded-md text-xs
              ${
                sliderGridSize === size
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }
            `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Picker */}
          <ColorPicker
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            compact
          />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
