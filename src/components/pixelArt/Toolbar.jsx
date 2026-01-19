import React from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, History, X, Grid, RotateCw, Trash2 } from "lucide-react";
import ColorPicker from "../ColorPicker";
import { Input } from "../ui/input";

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
  activeColor,
  setActiveColor,
}) => {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block space-y-6">
        {/* Title */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-4 text-card-foreground">
            Pixel Art Title
          </h3>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name your masterpiece..."
            className="font-mono"
          />
        </div>

        {/* Tools */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-4 text-card-foreground">Tools</h3>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? "neon" : "pixel"}
                size="sm"
                onClick={() => onToolChange(tool.id)}
                className="justify-start gap-2"
              >
                <tool.icon className="w-4 h-4" />
                {tool.label}
              </Button>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-4 text-card-foreground">History</h3>

          <div className="flex gap-2">
            <Button
              variant="pixel"
              className="w-full"
              onClick={onUndo}
              disabled={historyIndex <= 0}
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Undo
            </Button>

            <Button
              variant="pixel"
              className="w-full"
              onClick={onRedo}
              disabled={historyIndex >= historyLength - 1}
            >
              <RotateCw className="w-4 h-4 mr-1" />
              Redo
            </Button>
          </div>

          <Button variant="neon" className="w-full mt-2" onClick={onClear}>
            <Trash2 className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        </div>

        {/* Grid */}
        <div className="pixel-card-single bg-card p-4">
          <h3 className="font-bold mb-4 text-card-foreground">
            Grid Size: {sliderGridSize} × {sliderGridSize}
          </h3>
          <Slider
            value={[sliderGridSize]}
            onValueChange={(val) => setSliderGridSize(val[0])}
            min={8}
            max={128}
            step={1}
          />
        </div>

        {/* Colors */}
        <ColorPicker
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>

      {/* MOBILE TOOLBAR */}
      <div className="lg:hidden space-y-4">
        <div className="pixel-card-single bg-card p-3 space-y-4">
          {/* Tools + History Row */}
          <div className="flex items-center justify-between">
            {/* Tools */}
            <div className="flex gap-4">
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

            {/* Separator */}
            <div className="h-8 w-px bg-border mx-2" />

            {/* History */}
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="pixel"
                onClick={onUndo}
                disabled={historyIndex <= 0}
                className="h-9 w-9"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                variant="pixel"
                onClick={onRedo}
                disabled={historyIndex >= historyLength - 1}
                className="h-9 w-9"
              >
                <RotateCw className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                variant="neon"
                onClick={onClear}
                className="h-9 w-9 text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Grid Size */}
          <div>
            <h4 className="text-xs font-mono mb-2 text-muted-foreground">
              Grid Size: {sliderGridSize} × {sliderGridSize}
            </h4>
            <Slider
              value={[sliderGridSize]}
              onValueChange={(val) => setSliderGridSize(val[0])}
              min={8}
              max={128}
              step={1}
            />
          </div>

          {/* Colors */}
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
