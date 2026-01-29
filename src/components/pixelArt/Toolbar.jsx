import React from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import {
  RotateCcw,
  History,
  X,
  Grid,
  RotateCw,
  Trash2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import ColorPicker from "../ColorPicker";
import { Input } from "../ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { tools } from "@/lib/canvasUtils";

const GRID_SIZES = [8, 16, 24, 32, 48, 64, 96, 128];

const Toolbar = ({
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
  isEyedropperActive,
  setIsEyedropperActive,
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
                onClick={() => {
                  onToolChange(tool.id);
                  setIsEyedropperActive(false);
                }}
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
          onEyedropper={() => {
            setIsEyedropperActive(true);
            onToolChange("brush");
          }}
          eyedropperActive={isEyedropperActive}
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
        <div className="pixel-card-single bg-card p-4 space-y-2">
          <h3 className="font-bold">Canvas</h3>

          <div className="flex items-center gap-2">
            {/* Zoom */}
            <div className="flex items-center justify-between h-10 px-2 rounded-md bg-muted flex-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleZoomChange(Math.max(1, zoom - 1))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>

              <span className="text-xs font-mono text-muted-foreground">
                {zoom}×
              </span>

              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleZoomChange(Math.min(8, zoom + 1))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            {/* Grid Size */}
            <div className="h-10 flex-1">
              <Select
                value={String(sliderGridSize)}
                onValueChange={(v) => setSliderGridSize(Number(v))}
              >
                <SelectTrigger className="h-10 bg-muted font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Grid className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {sliderGridSize} × {sliderGridSize}
                    </span>
                  </div>
                </SelectTrigger>

                <SelectContent align="end">
                  {GRID_SIZES.map((size) => (
                    <SelectItem
                      key={size}
                      value={String(size)}
                      className="font-mono text-xs"
                    >
                      {size} × {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TOOLBAR */}
      <div className="lg:hidden space-y-2">
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

          {/* Zoom + Canvas Size Row */}
          <div className="flex items-center gap-2">
            {/* Zoom */}
            <div className="flex items-center justify-between h-10 px-2 rounded-md bg-muted flex-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleZoomChange(Math.max(1, zoom - 1))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>

              <span className="text-xs font-mono text-muted-foreground">
                {zoom}×
              </span>

              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleZoomChange(Math.min(8, zoom + 1))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            {/* Grid Size */}
            <div className="h-10 flex-1">
              <Select
                value={String(sliderGridSize)}
                onValueChange={(v) => setSliderGridSize(Number(v))}
              >
                <SelectTrigger className="h-10 bg-muted font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Grid className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {sliderGridSize} × {sliderGridSize}
                    </span>
                  </div>
                </SelectTrigger>

                <SelectContent align="end">
                  {GRID_SIZES.map((size) => (
                    <SelectItem
                      key={size}
                      value={String(size)}
                      className="font-mono text-xs"
                    >
                      {size} × {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Color Picker */}
          <ColorPicker
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            onEyedropper={() => setIsEyedropperActive((prev) => !prev)}
            eyedropperActive={isEyedropperActive}
          />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
