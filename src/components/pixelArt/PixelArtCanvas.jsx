"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Loader2,
  Save,
  RotateCcw,
  Brush,
  Eraser,
  Palette,
  History,
  X,
  Square,
} from "lucide-react";
import ColorPicker from "../ColorPicker";
import { toast } from "../ui/use-toast";

const STORAGE_KEY = "pixel-art-draft";

const saveDraft = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const loadDraft = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
};

const clearDraft = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const PixelArtCanvas = ({ onSave, pixelArt, userId, prompt }) => {
  const [fullGrid, setFullGrid] = useState([]);
  const [displayGrid, setDisplayGrid] = useState([]);
  const [gridSize, setGridSize] = useState(32);
  const [sliderGridSize, setSliderGridSize] = useState(32);
  const [activeColor, setActiveColor] = useState("#ff6b6b");
  const [activeTool, setActiveTool] = useState("brush");
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [title, setTitle] = useState(prompt?.prompt || "asdf");
  const [addToTodaysPixelArts, setAddToTodaysPixelArts] = useState(true);
  const [allowEdit, setAllowEdit] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const activeColorRef = useRef(activeColor);
  const activeToolRef = useRef(activeTool);
  const undoInProgressRef = useRef(false);

  useEffect(() => {
    const draft = loadDraft();
    if (!draft) {
      const emptyGrid = createEmptyGrid(gridSize);
      setFullGrid(emptyGrid);
      saveCanvasState({ grid: emptyGrid, gridSize: gridSize }, true);
    } else {
      setFullGrid(draft.fullGrid ?? []);
      setDisplayGrid(draft.displayGrid ?? []);
      setGridSize(draft.gridSize ?? 32);
      setSliderGridSize(draft.gridSize ?? 32);
      setActiveColor(draft.activeColor ?? "#ff6b6b");
      setActiveTool(draft.activeTool ?? "brush");
      saveCanvasState({ grid: draft.fullGrid, gridSize: draft.gridSize }, true);
    }
  }, []);

  // useEffect(() => {
  //   const draft = {
  //     fullGrid,
  //     displayGrid,
  //     gridSize,
  //     activeColor,
  //     activeTool,
  //     updatedAt: Date.now(),
  //   };

  //   saveDraft(draft);
  // }, [fullGrid, displayGrid, gridSize, activeColor, activeTool]);

  const saveCanvasState = useCallback(
    (state, overwrite = false) => {
      setHistory((prevHistory) => {
        let newHistory = overwrite
          ? [state]
          : prevHistory.slice(0, historyIndex + 1).concat(state);
        if (newHistory.length > 50)
          newHistory = newHistory.slice(newHistory.length - 50);
        return newHistory;
      });
      setHistoryIndex((prevIndex) => (overwrite ? 0 : prevIndex + 1));
    },
    [historyIndex]
  );

  useEffect(() => {
    activeColorRef.current = activeColor;
    activeToolRef.current = activeTool;
  }, [activeColor, activeTool]);

  const createEmptyGrid = useCallback((size) => {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, () => "#ffffff")
    );
  }, []);

  const handleGridResize = useCallback((newSize) => {
    if (newSize > fullGrid.length) {
      setFullGrid((prevFullGrid) => {
        const newFullGrid = Array.from({ length: newSize }, (_, rowIndex) =>
          Array.from({ length: newSize }, (_, colIndex) => {
            if (prevFullGrid[rowIndex] && prevFullGrid[rowIndex][colIndex]) {
              return prevFullGrid[rowIndex][colIndex];
            }
            return "#ffffff";
          })
        );
        saveCanvasState({ grid: newFullGrid, gridSize: newSize }, true);
        return newFullGrid;
      });
    }
    setGridSize(newSize);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleGridResize(sliderGridSize);
    }, 200);
    return () => clearTimeout(handler);
  }, [sliderGridSize]);

  useEffect(() => {
    if (pixelArt) {
      if (pixelArt.dailyPromptId) {
        setAddToTodaysPixelArts(true);
      } else {
        setAddToTodaysPixelArts(false);
      }
      setAllowEdit(pixelArt.editable);
      if (!pixelArt.title && prompt?.prompt) {
        setTitle(prompt.prompt);
      }
      try {
        const data = JSON.parse(pixelArt.data);
        const loadedGridSize = pixelArt.gridSize;
        setFullGrid(data);
        setGridSize(loadedGridSize);
        setSliderGridSize(loadedGridSize);
        saveCanvasState({ grid: data, gridSize: loadedGridSize }, true);
      } catch (err) {
        console.error("Error parsing pixel art data:", err);
        const emptyGrid = createEmptyGrid(gridSize);
        setFullGrid(emptyGrid);
        saveCanvasState({ grid: emptyGrid, gridSize: gridSize }, true);
      }
    } else if (prompt?.prompt) {
      setTitle(prompt.prompt);
      setAddToTodaysPixelArts(true);
      setAllowEdit(true);
    }
  }, [pixelArt, prompt]);

  useEffect(() => {
    const newDisplayGrid = fullGrid
      .slice(0, gridSize)
      .map((row) => row.slice(0, gridSize));
    setDisplayGrid(newDisplayGrid);
  }, [fullGrid, gridSize]);

  const handleToolClick = (tool) => {
    setActiveTool(tool);
  };

  const handlePixelClick = (row, col) => {
    setFullGrid((prevFullGrid) => {
      const newFullGrid = JSON.parse(JSON.stringify(prevFullGrid));
      if (newFullGrid[row] && newFullGrid[row][col]) {
        newFullGrid[row][col] =
          activeTool === "eraser" ? "#ffffff" : activeColor;
      }
      return newFullGrid;
    });
  };

  const handleFill = (startRow, startCol) => {
    setFullGrid((prevFullGrid) => {
      const newFullGrid = JSON.parse(JSON.stringify(prevFullGrid));
      const targetColor = newFullGrid[startRow][startCol];
      const fillColor = activeTool === "eraser" ? "#ffffff" : activeColor;
      if (targetColor === fillColor) return newFullGrid;

      const stack = [[startRow, startCol]];

      while (stack.length > 0) {
        const [row, col] = stack.pop();
        if (
          row < 0 ||
          row >= fullGrid.length ||
          col < 0 ||
          col >= fullGrid.length ||
          newFullGrid[row][col] !== targetColor
        ) {
          continue;
        }
        newFullGrid[row][col] = fillColor;
        stack.push([row + 1, col]);
        stack.push([row - 1, col]);
        stack.push([row, col + 1]);
        stack.push([row, col - 1]);
      }
      saveCanvasState({ grid: newFullGrid, gridSize: fullGrid.length });
      return newFullGrid;
    });
  };

  const handleMouseDown = (e, row, col) => {
    e.preventDefault();
    setIsDrawing(true);
    if (activeTool === "fill") {
      handleFill(row, col);
    } else {
      handlePixelClick(row, col);
    }
  };

  const handleMouseMove = (e, row, col) => {
    if (!isDrawing || activeTool === "fill") return;
    handlePixelClick(row, col);
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveCanvasState({ grid: fullGrid, gridSize: fullGrid.length });
    }
  };

  const handleUndo = () => {
    if (historyIndex <= 0) return;
    undoInProgressRef.current = true;
    const newIndex = historyIndex - 1;
    const snapshot = history[newIndex];
    setFullGrid(snapshot.grid);
    setGridSize(snapshot.gridSize);
    setSliderGridSize(snapshot.gridSize);
    setHistoryIndex(newIndex);
    undoInProgressRef.current = false;
  };

  const handleRedo = () => {
    if (historyIndex >= history.length - 1) return;
    undoInProgressRef.current = true;
    const newIndex = historyIndex + 1;
    const snapshot = history[newIndex];
    setFullGrid(snapshot.grid);
    setGridSize(snapshot.gridSize);
    setSliderGridSize(snapshot.gridSize);
    setHistoryIndex(newIndex);
    undoInProgressRef.current = false;
  };

  const handleClear = () => {
    const newGrid = createEmptyGrid(sliderGridSize);
    setFullGrid(newGrid);
    saveCanvasState({ grid: newGrid, gridSize: sliderGridSize }, true);
  };

  const handleDownload = () => {
    const pixelSize = 10;
    const canvas = document.createElement("canvas");
    canvas.width = fullGrid.length * pixelSize;
    canvas.height = fullGrid.length * pixelSize;
    const ctx = canvas.getContext("2d");

    fullGrid.forEach((row, rowIndex) => {
      row.forEach((color, colIndex) => {
        ctx.fillStyle = color;
        ctx.fillRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
      });
    });

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `pixel-art-${Date.now()}.png`;
    link.click();
    toast({
      title: "Pixel Art Downloaded",
      description: "Your pixel art has been downloaded.",
      variant: "default",
    });
  };

  const handleSave = async () => {
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please name your masterpiece before saving!",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    const draft = {
      fullGrid,
      displayGrid,
      gridSize,
      activeColor,
      activeTool,
      updatedAt: Date.now(),
    };
    saveDraft(draft);

    const croppedGrid = fullGrid
      .slice(0, gridSize)
      .map((row) => row.slice(0, gridSize));

    try {
      // 1. Generate Gallery Preview
      const pixelSize = 10;
      const canvas = document.createElement("canvas");
      canvas.width = gridSize * pixelSize;
      canvas.height = gridSize * pixelSize;
      const ctx = canvas.getContext("2d");

      croppedGrid.forEach((row, rowIndex) => {
        row.forEach((color, colIndex) => {
          ctx.fillStyle = color;
          ctx.fillRect(
            colIndex * pixelSize,
            rowIndex * pixelSize,
            pixelSize,
            pixelSize
          );
        });
      });

      const galleryPreviewUrl = canvas.toDataURL("image/png");

      // 2. Execute Save
      await onSave({
        title: title,
        data: JSON.stringify(croppedGrid), // Just the array!
        gridSize, // Saved in its own DB column
        imageUrl: galleryPreviewUrl,
        addToTodaysPixelArts,
        editable: allowEdit,
        dailyPromptId: prompt?.id || null,
      });
    } catch (err) {
      console.error("Failed to save:", err);
      toast({
        title: "Failed to save. Please try again.",
        description: "",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const tools = [
    { id: "brush", icon: Brush, label: "Brush" },
    { id: "eraser", icon: Eraser, label: "Eraser" },
    { id: "fill", icon: Square, label: "Fill" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        className="pixel-card mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-3 gap-2 md:gap-6">
          {/* Main Canvas */}
          <div className="lg:col-span-2">
            <div className="canvas-card bg-card p-2 md:p-4 max-w-[600px]">
              <div className="border-4 border-border bg-white rounded-none overflow-hidden">
                <div
                  className="grid rounded-lg shadow-md overflow-hidden bg-white"
                  style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                    height: "auto",
                    aspectRatio: "1/1",
                  }}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {displayGrid.map((row, rowIndex) =>
                    row.map((color, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className="pixel"
                        style={{ backgroundColor: color }}
                        onMouseDown={(e) =>
                          handleMouseDown(e, rowIndex, colIndex)
                        }
                        onMouseEnter={(e) =>
                          handleMouseMove(e, rowIndex, colIndex)
                        }
                      ></div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tool Panel */}
          <div className="space-y-6">
            <div className="pixel-card-single bg-card p-4">
              <h3 className="font-bold mb-4 text-card-foreground">Tools</h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <Button
                    key={tool.id}
                    variant={activeTool === tool.id ? "neon" : "pixel"}
                    size="sm"
                    onClick={() => handleToolClick(tool.id)}
                    className="justify-start gap-2"
                  >
                    <tool.icon className="w-4 h-4" />
                    {tool.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Undo/Redo/Clear Actions */}
            <div className="pixel-card-single bg-card p-4">
              <h3 className="font-bold mb-4 text-card-foreground">History</h3>
              <div className="flex gap-2">
                <Button
                  variant="pixel"
                  className="w-full"
                  onClick={handleUndo}
                  disabled={historyIndex <= 0}
                >
                  <RotateCcw className="w-4 h-4" />
                  Undo
                </Button>
                <Button
                  variant="pixel"
                  className="w-full"
                  onClick={handleRedo}
                  disabled={historyIndex >= history.length - 1}
                >
                  <History className="w-4 h-4" />
                  Redo
                </Button>
              </div>
              <Button
                variant="neon"
                className="w-full mt-2"
                onClick={handleClear}
              >
                <X className="w-4 h-4" />
                Clear All
              </Button>
            </div>

            {/* Grid Size */}
            <div className="pixel-card-single bg-card p-4">
              <h3 className="font-bold mb-4 text-card-foreground">
                Grid Size: {sliderGridSize}x{sliderGridSize}
              </h3>
              <Slider
                value={[sliderGridSize]}
                onValueChange={(val) => setSliderGridSize(val[0])}
                max={128}
                min={8}
                step={1}
                className="w-full"
              />
            </div>

            {/* Colors */}
            <ColorPicker
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />

            <Separator />

            {/* Settings Section */}
            <div className="pixel-card-single bg-card p-4">
              <h3 className="font-bold mb-4 text-card-foreground">Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="allowEdit"
                    checked={allowEdit}
                    onCheckedChange={(checked) => setAllowEdit(!!checked)}
                    className="border-2 border-primary data-[state=checked]:bg-primary"
                  />
                  <label
                    htmlFor="allowEdit"
                    className="text-sm font-mono cursor-pointer select-none text-card-foreground"
                  >
                    Allow others to edit
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="todaysDoodles"
                    checked={addToTodaysPixelArts}
                    onCheckedChange={(checked) =>
                      setAddToTodaysPixelArts(!!checked)
                    }
                    className="border-2 border-primary data-[state=checked]:bg-primary"
                  />
                  <label
                    htmlFor="todaysDoodles"
                    className="text-sm font-mono cursor-pointer select-none text-card-foreground"
                  >
                    Add to Today's Pixel Arts
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant="neon"
                className="w-full"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-5 w-5" />
                    Save Pixel Art
                  </>
                )}
              </Button>

              <Button
                variant="pixel"
                className="w-full"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PixelArtCanvas;
