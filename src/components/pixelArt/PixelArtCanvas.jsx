"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "../ui/use-toast";
import Toolbar from "./Toolbar";
import Settings from "./Settings";
import { STORAGE_KEY, VISIBILITY_STATUS } from "@/lib/utils";
import { floodFill } from "@/lib/canvasUtils";
import { Button } from "../ui/button";

const saveDraft = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const loadDraft = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
};

const MAX_GRID_SIZE = 128;

const PixelArtCanvas = ({ onSave, pixelArt, prompt }) => {
  const [fullGrid, setFullGrid] = useState([]);
  const [displayGrid, setDisplayGrid] = useState([]);
  const [gridSize, setGridSize] = useState(32);
  const [sliderGridSize, setSliderGridSize] = useState(32);
  const [activeColor, setActiveColor] = useState("#ff6b6b");
  const [activeTool, setActiveTool] = useState("brush");
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [title, setTitle] = useState(prompt?.prompt || "Untitled");
  const [submitToTodaysFeed, setSubmitToTodaysFeed] = useState(true);
  const [makePrivate, setMakePrivate] = useState(false);
  const [canRemix, setCanRemix] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isEyedropperActive, setIsEyedropperActive] = useState(false);
  const [selection, setSelection] = useState({
    mode: "idle",
    start: null,
    end: null,
    offset: { row: 0, col: 0 },
  });

  const [selectionData, setSelectionData] = useState(null);

  const panStartRef = useRef({ x: 0, y: 0 });
  const panOriginRef = useRef({ x: 0, y: 0 });
  const activeColorRef = useRef(activeColor);
  const activeToolRef = useRef(activeTool);
  const undoInProgressRef = useRef(false);
  const gridRef = useRef(null);
  const containerRef = useRef(null);
  const fullGridRef = useRef(fullGrid);
  const lastHoverCellRef = useRef({ row: 0, col: 0 });
  const lastSelectionBoxRef = useRef(null);
  const baseGridRef = useRef(null);

  useEffect(() => {
    fullGridRef.current = fullGrid;
  }, [fullGrid]);

  useEffect(() => {
    const draft = loadDraft();
    if (!draft) {
      const emptyFullGrid = createEmptyGrid(MAX_GRID_SIZE);
      setFullGrid(emptyFullGrid);
      setGridSize(32);
      setSliderGridSize(32);
      saveCanvasState({ grid: emptyFullGrid, gridSize: 32 }, true);
    } else {
      setFullGrid(draft.fullGrid);
      setGridSize(draft.gridSize);
      setSliderGridSize(draft.gridSize);
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
      Array.from({ length: size }, () => null)
    );
  }, []);

  const handleGridResize = useCallback((newSize) => {
    setGridSize(newSize);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleGridResize(sliderGridSize);
    }, 0);
    return () => clearTimeout(handler);
  }, [sliderGridSize]);

  useEffect(() => {
    if (pixelArt) {
      if (pixelArt.dailyPromptId) {
        setSubmitToTodaysFeed(true);
      } else {
        setSubmitToTodaysFeed(false);
      }
      setCanRemix(pixelArt.canRemix);
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
        console.error("Error parsing Pixel Art data:", err);
        const emptyGrid = createEmptyGrid(gridSize);
        setFullGrid(emptyGrid);
        saveCanvasState({ grid: emptyGrid, gridSize: gridSize }, true);
      }
    } else if (prompt?.prompt) {
      setTitle(prompt.prompt);
      setSubmitToTodaysFeed(true);
      setCanRemix(true);
    }
  }, [pixelArt, prompt]);

  useEffect(() => {
    const newDisplayGrid = fullGrid
      .slice(0, gridSize)
      .map((row) => row.slice(0, gridSize));
    setDisplayGrid(newDisplayGrid);
  }, [fullGrid, gridSize]);

  const handlePixelClick = (row, col) => {
    setFullGrid((prev) => {
      const next = prev.map((r) => [...r]);

      const newColor =
        activeToolRef.current === "eraser" ? "#ffffff" : activeColorRef.current;

      if (next[row][col] === newColor) return prev;

      next[row][col] = newColor;
      return next;
    });
  };
  const handleFill = (startRow, startCol) => {
    const fillColor =
      activeToolRef.current === "eraser" ? "#ffffff" : activeColorRef.current;

    const baseGrid = fullGridRef.current;

    const filledGrid = floodFill({
      grid: baseGrid,
      startRow,
      startCol,
      gridSize,
      fillColor,
    });

    if (!filledGrid) return;

    saveCanvasState({
      grid: filledGrid,
      gridSize,
    });

    setFullGrid(filledGrid);
  };

  const handlePointerDown = (e, row, col) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    if (isEyedropperActive) {
      let color = fullGrid[row][col];
      if (!color) {
        color = (row + col) % 2 === 0 ? "#f0f0f0" : "#ffffff";
      }

      setActiveColor(color);
      activeColorRef.current = color;
      setIsEyedropperActive(false);
      return;
    }

    if (activeTool === "select") {
      if (
        selection.mode === "selected" &&
        isInsideSelection(row, col, selection)
      ) {
        setSelection((prev) => ({
          ...prev,
          mode: "moving",
          offset: {
            row: row - prev.start.row,
            col: col - prev.start.col,
          },
        }));
        const box = normalizeSelection(selection);
        if (!box || !selectionData) return;

        // 1️⃣ Create base grid snapshot
        const base = fullGrid.map((r) => [...r]);

        // 2️⃣ Remove selected pixels from base grid
        selectionData.forEach((rowData, r) => {
          rowData.forEach((color, c) => {
            if (color == null) return;

            const tr = box.top + r;
            const tc = box.left + c;

            if (tr >= 0 && tr < gridSize && tc >= 0 && tc < gridSize) {
              base[tr][tc] = null;
            }
          });
        });

        baseGridRef.current = base;

        // 3️⃣ Store initial box for offsets
        lastSelectionBoxRef.current = box;

        return;
      }

      lastHoverCellRef.current = { row, col };

      setSelection({
        mode: "selecting",
        start: { row, col },
        end: { row, col },
      });

      return;
    }

    if (activeTool === "fill") {
      handleFill(row, col);
    } else {
      setIsDrawing(true);
      handlePixelClick(row, col);
    }
  };

  const handlePointerMove = (e) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor((x / rect.width) * gridSize);
    const row = Math.floor((y / rect.height) * gridSize);

    if (activeTool === "select") {
      if (selection.mode === "selecting") {
        setSelection((prev) => ({
          ...prev,
          end: { row, col },
        }));
        return;
      }
      if (selection.mode === "moving" && selection.offset && selectionData) {
        const box = normalizeSelection(selection);
        if (!box) return;

        const newTop = row - selection.offset.row;
        const newLeft = col - selection.offset.col;

        const newBox = {
          top: newTop,
          left: newLeft,
          bottom: newTop + (box.bottom - box.top),
          right: newLeft + (box.right - box.left),
        };

        setFullGrid(() => {
          if (!baseGridRef.current || !selectionData) return fullGrid;

          const next = baseGridRef.current.map((r) => [...r]);

          // Draw selectionData at new position (non-null only)
          selectionData.forEach((rowData, r) => {
            rowData.forEach((color, c) => {
              if (color == null) return;

              const tr = newTop + r;
              const tc = newLeft + c;

              if (tr >= 0 && tr < gridSize && tc >= 0 && tc < gridSize) {
                next[tr][tc] = color;
              }
            });
          });

          return next;
        });

        lastSelectionBoxRef.current = newBox;

        setSelection((prev) => ({
          ...prev,
          start: { row: newTop, col: newLeft },
          end: { row: newBox.bottom, col: newBox.right },
        }));

        return;
      }
    }

    if (!isDrawing || activeTool === "fill") return;

    if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
      handlePixelClick(row, col);
    }
  };

  const handlePointerUp = (e) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (activeTool === "select") {
      if (selection.mode === "selecting") {
        setSelection((prev) => ({
          ...prev,
          mode: "selected",
        }));

        const box = normalizeSelection(selection);
        if (!box) return;

        const data = fullGrid
          .slice(box.top, box.bottom + 1)
          .map((row) => row.slice(box.left, box.right + 1));

        setSelectionData(data);
        return;
      }
      if (selection.mode === "moving") {
        saveCanvasState({
          grid: fullGridRef.current,
          gridSize,
        });

        baseGridRef.current = null;
        lastSelectionBoxRef.current = null;

        setSelection((prev) => ({
          ...prev,
          mode: "selected",
          offset: undefined,
        }));
      }
      return;
    }

    if (isEyedropperActive) return;

    if (!isDrawing) return;

    setIsDrawing(false);
    saveCanvasState({ grid: fullGrid, gridSize: sliderGridSize });
  };

  const getSnappedPan = useCallback(
    (x, y, nextZoom = zoom) => {
      if (!containerRef.current || !gridRef.current) {
        return { x, y };
      }

      const container = containerRef.current.getBoundingClientRect();

      const baseSize = gridRef.current.offsetWidth;
      const scaledSize = baseSize * nextZoom;

      // If canvas is smaller than viewport → CENTER IT
      if (scaledSize <= container.width) {
        x = 0;
      } else {
        const minX = -(scaledSize - container.width) / 2;
        const maxX = (scaledSize - container.width) / 2;
        x = Math.min(maxX, Math.max(minX, x));
      }

      if (scaledSize <= container.height) {
        y = 0;
      } else {
        const minY = -(scaledSize - container.height) / 2;
        const maxY = (scaledSize - container.height) / 2;
        y = Math.min(maxY, Math.max(minY, y));
      }

      return { x, y };
    },
    [zoom]
  );

  const handleCanvasPointerDown = (e) => {
    if (activeTool !== "pan") return;

    setIsPanning(true);
    panStartRef.current = {
      x: e.clientX - panOffset.x,
      y: e.clientY - panOffset.y,
    };

    gridRef.current?.setPointerCapture(e.pointerId);
  };

  const handleCanvasPointerMove = (e) => {
    if (!isPanning || activeTool !== "pan") return;

    e.preventDefault();

    const nextX = e.clientX - panStartRef.current.x;
    const nextY = e.clientY - panStartRef.current.y;

    setPanOffset(getSnappedPan(nextX, nextY));
  };

  const handleCanvasPointerUp = (e) => {
    if (!isPanning) return;

    setIsPanning(false);
    try {
      gridRef.current?.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // select tool methods

  const normalizeSelection = () => {
    if (!selection.start || !selection.end) return null;

    return {
      top: Math.min(selection.start.row, selection.end.row),
      left: Math.min(selection.start.col, selection.end.col),
      bottom: Math.max(selection.start.row, selection.end.row),
      right: Math.max(selection.start.col, selection.end.col),
    };
  };

  const isInsideSelection = (row, col, sel) => {
    const box = normalizeSelection(sel);
    if (!box) return false;

    return (
      row >= box.top && row <= box.bottom && col >= box.left && col <= box.right
    );
  };

  const getSelectionBorders = (row, col, sel) => {
    const { top, left, bottom, right } = sel;

    if (row < top || row > bottom || col < left || col > right) {
      return null;
    }

    return {
      top: row === top,
      bottom: row === bottom,
      left: col === left,
      right: col === right,
    };
  };

  const getSelectionBorderStyle = (row, col, sel) => {
    const borders = getSelectionBorders(row, col, sel);
    if (!borders) return {};

    const color = "#3b82f6";
    const style = "1px dashed " + color;

    return {
      borderTop: borders.top ? style : "1px solid transparent",
      borderBottom: borders.bottom ? style : "1px solid transparent",
      borderLeft: borders.left ? style : "1px solid transparent",
      borderRight: borders.right ? style : "1px solid transparent",
    };
  };

  const getPixelColor = (row, col) => {
    if (selection.mode === "selected" && selectionData) {
      const box = normalizeSelection();
      if (!box) return fullGrid[row][col];

      const { top, left, bottom, right } = box;

      if (row >= top && row <= bottom && col >= left && col <= right) {
        const sr = row - top;
        const sc = col - left;
        const color = selectionData[sr]?.[sc];

        // 👇 KEY CHANGE: treat null as transparent
        if (color != null) {
          return color;
        }
      }
    }

    return fullGrid[row][col];
  };

  const handleCopy = () => {
    if (selection.mode !== "selected") return;

    const box = normalizeSelection(selection);
    if (!box) return;

    const data = fullGrid
      .slice(box.top, box.bottom + 1)
      .map((row) => row.slice(box.left, box.right + 1));

    setSelectionData(data);
  };

  const handleCut = () => {
    if (selection.mode !== "selected") return;

    const box = normalizeSelection(selection);
    if (!box) return;

    const data = fullGrid
      .slice(box.top, box.bottom + 1)
      .map((row) => row.slice(box.left, box.right + 1));

    setSelectionData(data);

    const nextGrid = fullGrid.map((r) => [...r]);

    for (let r = box.top; r <= box.bottom; r++) {
      for (let c = box.left; c <= box.right; c++) {
        nextGrid[r][c] = null;
      }
    }

    saveCanvasState({ grid: nextGrid, gridSize });
    setFullGrid(nextGrid);

    setSelection({
      mode: "idle",
      start: null,
      end: null,
    });
  };

  const handlePaste = () => {
    if (!selectionData) return;

    // const { row, col } = lastHoverCellRef.current;

    setSelection({
      mode: "selected",
      start: { row: 0, col: 0 },
      end: {
        row: selectionData.length - 1,
        col: selectionData[0].length - 1,
      },
      offset: { row: 0, col: 0 },
    });
  };

  const handleZoomChange = (nextZoom) => {
    setPanOffset((prev) => {
      const scale = nextZoom / zoom;

      return getSnappedPan(prev.x * scale, prev.y * scale, nextZoom);
    });

    setZoom(nextZoom);
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
    const newGrid = createEmptyGrid(MAX_GRID_SIZE);
    setFullGrid(newGrid);
    saveCanvasState({ grid: newGrid, gridSize: sliderGridSize }, true);
    setSelection({
      mode: "idle",
      start: null,
      end: null,
      offset: { row: 0, col: 0 },
    });
  };

  const handleDownload = () => {
    if (!fullGrid || fullGrid.length === 0) return;

    const pixelSize = 10;
    const size = sliderGridSize; // only use the visible grid size
    const canvas = document.createElement("canvas");
    canvas.width = size * pixelSize;
    canvas.height = size * pixelSize;
    const ctx = canvas.getContext("2d");

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const color = fullGrid[row][col] ?? "#ffffff";
        ctx.fillStyle = color;
        ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
      }
    }

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `pixel-art-${Date.now()}.png`;
    link.click();

    toast({
      title: "Pixel Art Downloaded",
      description: "Your Pixel Art has been downloaded.",
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
          ctx.fillStyle = color || "#ffffff";
          ctx.fillRect(
            colIndex * pixelSize,
            rowIndex * pixelSize,
            pixelSize,
            pixelSize
          );
        });
      });

      const galleryPreviewUrl = canvas.toDataURL("image/png");

      await onSave({
        title: title,
        data: JSON.stringify(croppedGrid),
        gridSize,
        imageUrl: galleryPreviewUrl,
        canRemix: canRemix,
        visibilityStatus: makePrivate
          ? VISIBILITY_STATUS.PRIVATE
          : VISIBILITY_STATUS.PUBLIC,
        dailyPromptId: submitToTodaysFeed ? prompt?.id : null,
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

  // update cursor based on tool
  useEffect(() => {
    if (!gridRef.current) return;

    const el = gridRef.current;

    if (activeTool !== "select") {
      setSelection({
        mode: "idle",
        start: null,
        end: null,
      });
    }

    if (isEyedropperActive) {
      el.style.cursor = "copy";
      return;
    }

    switch (activeTool) {
      case "select":
        el.style.cursor = "crosshair";
        break;

      case "pan":
        el.style.cursor = isPanning ? "grabbing" : "grab";
        break;

      case "eraser":
        el.style.cursor = "not-allowed";
        break;

      case "fill":
        el.style.cursor = "cell";
        break;

      case "brush":
      default:
        el.style.cursor = "crosshair";
        break;
    }
  }, [isEyedropperActive, activeTool]);

  // keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "i":
          e.preventDefault();
          if (isEyedropperActive) {
            setIsEyedropperActive(false);
            setActiveTool("brush");
          } else {
            setIsEyedropperActive(true);
          }
          break;

        case "escape":
          e.preventDefault();
          setIsEyedropperActive(false);
          setActiveTool("brush");
          //TODO add if condition
          setSelection(null);
          setIsDraggingSelection(false);
          break;

        case "b":
          e.preventDefault();
          setIsEyedropperActive(false);
          setActiveTool("brush");
          break;

        case "f":
          e.preventDefault();
          setIsEyedropperActive(false);
          setActiveTool("fill");
          break;

        case "e":
          e.preventDefault();
          setIsEyedropperActive(false);
          setActiveTool("eraser");
          break;

        case "p":
          e.preventDefault();
          setIsEyedropperActive(false);
          setActiveTool("pan");
          break;

        case "s":
          setActiveTool("select");
          break;

        case "c":
          if (e.metaKey || e.ctrlKey) handleCopy();
          break;

        case "x":
          if (e.metaKey || e.ctrlKey) handleCut();
          break;

        case "v":
          if (e.metaKey || e.ctrlKey) handlePaste();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        className="pixel-card mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-3 gap-2 md:gap-6 items-stretch">
          {activeTool === "select" && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background border rounded-lg p-2 shadow">
              <Button size="sm" variant={"pixel"} onClick={handleCopy}>Copy</Button>
              <Button size="sm" variant={"pixel"} onClick={handleCut}>Cut</Button>
              <Button size="sm" variant={"pixel"} onClick={handlePaste}>Paste</Button>
              <Button size="sm" variant={"pixel"}
                onClick={() =>
                  setSelection({ mode: "idle", start: null, end: null })
                }
              >
                Cancel
              </Button>
            </div>
          )}

          {/* MOBILE TITLE */}
          <div className="lg:hidden sticky top-0 z-10 bg-background border-b border-border px-3 py-2">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled Pixel Art"
              className="font-mono text-sm h-9"
            />
          </div>
          {/* Main Canvas */}
          <div className="lg:col-span-2">
            <div className="canvas-card bg-card p-2 md:p-4 max-w-[600px] h-full">
              <div
                ref={containerRef}
                className="border-4 border-border bg-white rounded-none overflow-hidden h-full touch-none overscroll-none"
              >
                <div
                  ref={gridRef}
                  className="grid rounded-lg shadow-md overflow-hidden bg-white h-full touch-none aspect-square"
                  style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                    transform: `
                      translate(${panOffset.x}px, ${panOffset.y}px)
                      scale(${zoom})
                    `,
                    transformOrigin: "center",
                    cursor: activeTool === "pan" ? "grab" : "crosshair",
                  }}
                  onPointerDown={
                    activeTool === "pan" ? handleCanvasPointerDown : undefined
                  }
                  onPointerMove={
                    activeTool === "pan"
                      ? handleCanvasPointerMove
                      : handlePointerMove
                  }
                  onPointerUp={
                    activeTool === "pan"
                      ? handleCanvasPointerUp
                      : handlePointerUp
                  }
                  onPointerLeave={
                    activeTool === "pan"
                      ? handleCanvasPointerUp
                      : handlePointerUp
                  }
                >
                  {displayGrid.map((row, rowIndex) =>
                    row.map((color, colIndex) => {
                      // const selectionBox =
                      //   selection.mode !== "idle" &&
                      //   selection.start &&
                      //   selection.end
                      //     ? normalizeSelection(selection.start, selection.end)
                      //     : null;
                      const selectionBox = selection
                        ? normalizeSelection(selection)
                        : null;
                      const isSelected =
                        selection &&
                        rowIndex >=
                          Math.min(selection.startRow, selection.endRow) &&
                        rowIndex <=
                          Math.max(selection.startRow, selection.endRow) &&
                        colIndex >=
                          Math.min(selection.startCol, selection.endCol) &&
                        colIndex <=
                          Math.max(selection.startCol, selection.endCol);

                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className="touch-none select-none"
                          style={{
                            backgroundColor:
                              getPixelColor(rowIndex, colIndex) ??
                              ((rowIndex + colIndex) % 2 === 0
                                ? "#f0f0f0"
                                : "#ffffff"),
                            ...(selectionBox
                              ? getSelectionBorderStyle(
                                  rowIndex,
                                  colIndex,
                                  selectionBox
                                )
                              : {}),
                          }}
                          onPointerDown={
                            activeTool !== "pan"
                              ? (e) => handlePointerDown(e, rowIndex, colIndex)
                              : undefined
                          }
                        />
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Scrollable) */}
          <div className="flex flex-col h-full max-h-[600px] overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-1">
              <Toolbar
                title={title}
                setTitle={setTitle}
                activeTool={activeTool}
                onToolChange={setActiveTool}
                onUndo={handleUndo}
                onRedo={handleRedo}
                onClear={handleClear}
                historyIndex={historyIndex}
                historyLength={history.length}
                sliderGridSize={sliderGridSize}
                setSliderGridSize={setSliderGridSize}
                zoom={zoom}
                handleZoomChange={handleZoomChange}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
                isEyedropperActive={isEyedropperActive}
                setIsEyedropperActive={setIsEyedropperActive}
              />

              <Separator />

              <Settings
                canRemix={canRemix}
                setCanRemix={setCanRemix}
                submitToTodaysFeed={submitToTodaysFeed}
                setSubmitToTodaysFeed={setSubmitToTodaysFeed}
                makePrivate={makePrivate}
                setMakePrivate={setMakePrivate}
                onSave={handleSave}
                onDownload={handleDownload}
                isSaving={isSaving}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PixelArtCanvas;
