"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Slider } from "@/components/ui/slider";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import { Download, Loader2, Save, Search } from "lucide-react";

import Toolbar from "../Toolbar";

import ColorPicker from "../ColorPicker2";

const PixelArtCanvas = ({ onSave, pixelArt, userId, prompt }) => {
  const [grid, setGrid] = useState([]);

  const [gridSize, setGridSize] = useState(32);

  const [sliderGridSize, setSliderGridSize] = useState(32);

  const [activeColor, setActiveColor] = useState("#000000");

  const [activeTool, setActiveTool] = useState("pen");

  const [isDrawing, setIsDrawing] = useState(false);

  const [history, setHistory] = useState([]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const [title, setTitle] = useState(pixelArt?.title || "");

  const [addToTodaysDoodles, setAddToTodaysDoodles] = useState(true);

  const [allowEdit, setAllowEdit] = useState(true);

  const [isSaving, setIsSaving] = useState(false);

  // A ref to keep track of drawing state without causing re-renders

  const activeColorRef = useRef(activeColor);

  const activeToolRef = useRef(activeTool);

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

  const handleGridResize = useCallback(
    (newSize) => {
      // We get the latest grid state using a state updater function.

      setGrid((prevGrid) => {
        const newGrid = Array.from({ length: newSize }, (_, rowIndex) =>
          Array.from({ length: newSize }, (_, colIndex) => {
            if (prevGrid[rowIndex] && prevGrid[rowIndex][colIndex]) {
              console.log(prevGrid[rowIndex][colIndex]);

              return prevGrid[rowIndex][colIndex];
            }

            return "#ffffff";
          })
        );

        // After we have the new grid, we save the state to history.

        // We pass the newGrid directly to `saveCanvasState` to ensure we save the correct version.

        saveCanvasState({ grid: newGrid, gridSize: newSize }, true);

        return newGrid;
      });

      setGridSize(newSize);
    },

    [saveCanvasState]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      handleGridResize(sliderGridSize);
    }, 200);

    return () => clearTimeout(handler);
  }, [sliderGridSize, handleGridResize]);

  // A function to create a new, empty grid

  const createEmptyGrid = useCallback(() => {
    return Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => "#ffffff")
    );
  }, []);

  useEffect(() => {
    if (pixelArt) {
      if (pixelArt.dailyPromptId) {
        setAddToTodaysDoodles(true);
      } else {
        setAddToTodaysDoodles(false);
      }

      setAllowEdit(pixelArt.editable);

      if (!pixelArt.title && prompt?.prompt) {
        setTitle(prompt.prompt);
      }

      // Load pixel art from prop

      try {
        const data = JSON.parse(pixelArt.data);

        setGrid(data.grid);

        setGridSize(data.gridSize);

        // Save initial state to history

        saveCanvasState({ grid: data.grid, gridSize: data.gridSize }, true);
      } catch (err) {
        console.error("Error parsing pixel art data:", err);

        setGrid(createEmptyGrid());
      }
    } else if (prompt?.prompt) {
      setTitle(prompt.prompt);

      setAddToTodaysDoodles(true);

      setAllowEdit(true);

      setGrid(createEmptyGrid());
    } else {
      setGrid(createEmptyGrid());
    }
  }, [pixelArt, prompt, createEmptyGrid]);

  const colors = [
    "#000000",

    "#FF0000",

    "#00FF00",

    "#0000FF",

    "#FFFF00",

    "#FF00FF",

    "#00FFFF",

    "#FFA500",

    "#800080",

    "#FFC0CB",

    "#008080",

    "#808080",

    "#2E8B57",

    "#FFD700",

    "#1E90FF",

    "#FF4500",

    "#4B0082",

    "#A52A2A",

    "#2F4F4F",

    "#191970",
  ];

  const handlePixelClick = (row, col) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((c, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return activeTool === "eraser" ? "#ffffff" : activeColor;
        }

        return c;
      })
    );

    setGrid(newGrid);
  };

  const handleFill = (startRow, startCol) => {
    const newGrid = JSON.parse(JSON.stringify(grid));

    const targetColor = newGrid[startRow][startCol];

    const fillColor = activeTool === "eraser" ? "#ffffff" : activeColor;

    if (targetColor === fillColor) return;

    const stack = [[startRow, startCol]];

    while (stack.length > 0) {
      const [row, col] = stack.pop();

      if (
        row < 0 ||
        row >= gridSize.height ||
        col < 0 ||
        col >= gridSize.width ||
        newGrid[row][col] !== targetColor
      ) {
        continue;
      }

      newGrid[row][col] = fillColor;

      stack.push([row + 1, col]);

      stack.push([row - 1, col]);

      stack.push([row, col + 1]);

      stack.push([row, col - 1]);
    }

    setGrid(newGrid);

    saveCanvasState({ grid: newGrid, gridSize: gridSize });
  };

  const handleMouseDown = (e, row, col) => {
    e.preventDefault();

    setIsDrawing(true);

    if (activeToolRef.current === "fill") {
      handleFill(row, col);
    } else {
      handlePixelClick(row, col);
    }
  };

  const handleMouseMove = (e, row, col) => {
    if (!isDrawing || activeToolRef.current === "fill") return;

    handlePixelClick(row, col);
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      setIsDrawing(false);

      saveCanvasState({ grid, gridSize });
    }
  };

  const handleUndo = () => {
    if (historyIndex <= 0) return;

    const newIndex = historyIndex - 1;

    const snapshot = history[newIndex];

    setGrid(snapshot.grid);

    setGridSize(snapshot.gridSize);

    setHistoryIndex(newIndex);
  };

  const handleRedo = () => {
    if (historyIndex >= history.length - 1) return;

    const newIndex = historyIndex + 1;

    const snapshot = history[newIndex];

    setGrid(snapshot.grid);

    setGridSize(snapshot.gridSize);

    setHistoryIndex(newIndex);
  };

  const handleClear = () => {
    const newGrid = createEmptyGrid();

    setGrid(newGrid);

    saveCanvasState({ grid: newGrid, gridSize: gridSize });
  };

  const handleDownload = () => {
    const pixelSize = 10; // Pixels per grid square

    const canvas = document.createElement("canvas");

    canvas.width = gridSize.width * pixelSize;

    canvas.height = gridSize.height * pixelSize;

    const ctx = canvas.getContext("2d");

    grid.forEach((row, rowIndex) => {
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

    link.download = `pixel-art-${new Date().toISOString().slice(0, 10)}.png`;

    link.click();
  };

  const handleSave = async () => {
    setIsSaving(true);

    const data = {
      grid,

      gridSize,
    };

    try {
      await onSave({
        data: JSON.stringify(data),

        title,

        userId,

        addToTodaysDoodles,

        editable: allowEdit,
      });
    } catch (err) {
      console.error("Failed to save pixel art:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center p-4 min-h-screen bg-gray-50">
      {/* Mobile-first: Toolbar and controls at the top */}

      <div className="flex-1 w-full lg:max-w-xs p-4 bg-white rounded-lg shadow-xl lg:mr-8 mb-6 lg:mb-0 lg:hidden">
        <h1 className="text-2xl font-bold mb-4 text-center">Pixel Pad</h1>

        <div className="mb-4">
          <Input
            type="text"
            placeholder="Enter pixel art title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-medium text-center"
          />
        </div>

        <Toolbar
          activeTool={activeTool}
          setActiveTool={setActiveTool}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          handleClear={handleClear}
          canUndo={!(historyIndex <= 0)}
          canRedo={!(historyIndex >= history.length - 1)}
          pixelArtMode
        />

        <div className="p-4 bg-gray-50 rounded-lg shadow-inner mb-4">
          <p className="text-sm font-medium mb-2">
            Grid Size: {sliderGridSize}x{sliderGridSize}
          </p>

          <Slider
            value={[sliderGridSize]}
            min={8}
            max={128}
            step={1}
            onValueChange={(val) => {
              setSliderGridSize(val[0]);
            }}
          />
        </div>

        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />

        <div className="flex flex-col gap-2 mb-6">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Checkbox
              checked={addToTodaysDoodles}
              onCheckedChange={setAddToTodaysDoodles}
            />

            <span>Add to Today’s Pixel Art</span>
          </label>

          <label className="flex items-center gap-2 text-sm font-medium">
            <Checkbox checked={allowEdit} onCheckedChange={setAllowEdit} />

            <span>Allow others to edit</span>
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSave}
            className="w-full rounded-full"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" /> Save Pixel Art
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={handleDownload}
            className="w-full rounded-full"
          >
            <Download className="mr-2 h-5 w-5" /> Download
          </Button>
        </div>
      </div>

      {/* Canvas Section */}

      <div className="flex-1 max-w-[600px] relative flex items-start justify-center p-4 bg-gray-100 rounded-lg shadow-inner order-first lg:order-none w-full">
        <div
          className="grid aspect-square border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white w-[600px] h-[600px]"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,

            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {grid.map((row, rowIndex) =>
            row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="border border-gray-300"
                style={{ backgroundColor: color }}
                onMouseDown={(e) => handleMouseDown(e, rowIndex, colIndex)}
                onMouseEnter={(e) => handleMouseMove(e, rowIndex, colIndex)}
              ></div>
            ))
          )}
        </div>
      </div>

      {/* Desktop View: Toolbar and controls on the side */}

      <div className="hidden lg:flex flex-1 w-full lg:max-w-xs p-4 bg-white rounded-lg shadow-xl lg:ml-8 mb-6 lg:mb-0 flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">Pixel Pad</h1>

        <div className="mb-4">
          <Input
            type="text"
            placeholder="Enter pixel art title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-medium text-center"
          />
        </div>

        <Toolbar
          activeTool={activeTool}
          setActiveTool={setActiveTool}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          handleClear={handleClear}
          canUndo={!(historyIndex <= 0)}
          canRedo={!(historyIndex >= history.length - 1)}
          pixelArtMode
        />

        <div className="p-4 bg-gray-50 rounded-lg shadow-inner mb-4">
          <p className="text-sm font-medium mb-2">
            Grid Size: {sliderGridSize}x{sliderGridSize}
          </p>

          <Slider
            value={[sliderGridSize]}
            min={8}
            max={128}
            step={1}
            onValueChange={(val) => {
              setSliderGridSize(val[0]);
            }}
          />
        </div>

        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />

        <div className="flex flex-col gap-2 mb-6">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Checkbox
              checked={addToTodaysDoodles}
              onCheckedChange={setAddToTodaysDoodles}
            />

            <span>Add to Today’s Pixel Art</span>
          </label>

          <label className="flex items-center gap-2 text-sm font-medium">
            <Checkbox checked={allowEdit} onCheckedChange={setAllowEdit} />

            <span>Allow others to edit</span>
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSave}
            className="w-full rounded-full"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" /> Save Pixel Art
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={handleDownload}
            className="w-full rounded-full"
          >
            <Download className="mr-2 h-5 w-5" /> Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PixelArtCanvas;
