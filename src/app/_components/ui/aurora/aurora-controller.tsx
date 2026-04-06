"use client";

import { cn } from "lib/utils";
import React, { useEffect, useRef, useState } from "react";
import {
  BLEND_MODE_OPTIONS,
  BUILT_IN_TEMPLATES,
  GRADIENT_STOP_META,
  LS_KEY,
  OVERLAY_STOPS,
  type BlendMode,
  type ColorMap,
  type PaletteSettings,
  type SavedPalette,
  type StopMap,
  loadSavedPalettes,
  palettePreviewGradient,
} from "./aurora-presets";

export interface AuroraControllerProps {
  settings: PaletteSettings;
  onSettingsChange: (settings: Partial<PaletteSettings>) => void;
}

export function AuroraController({ settings, onSettingsChange }: AuroraControllerProps) {
  const { colors, stopPositions, invertFilter, blendMode, opacity, blur } = settings;

  const [isOpen, setIsOpen] = useState(false);
  const [activeStop, setActiveStop] = useState<string | null>(null);
  const [savedPalettes, setSavedPalettes] = useState<SavedPalette[]>([]);
  const [saveNameInput, setSaveNameInput] = useState("");
  const [showSaveInput, setShowSaveInput] = useState(false);

  useEffect(() => {
    setSavedPalettes(loadSavedPalettes());
  }, []);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const stripRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<keyof StopMap | null>(null);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current || !stripRef.current) return;
      if (Math.abs(e.clientX - dragStartX.current) > 3) hasDragged.current = true;
      const { left, width } = stripRef.current.getBoundingClientRect();
      const pct = Math.round(Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100)));
      const key = dragging.current;
      onSettingsChange({
        stopPositions: { ...settingsRef.current.stopPositions, [key]: pct },
      });
    };

    const onUp = () => {
      if (!hasDragged.current && dragging.current) {
        inputRefs.current[dragging.current]?.click();
      }
      dragging.current = null;
      hasDragged.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [onSettingsChange]);

  const handleStopMouseDown = (key: keyof StopMap) => (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = key;
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    setActiveStop(key);
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  };

  const updateColor = (key: keyof ColorMap) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onSettingsChange({ colors: { ...settings.colors, [key]: e.target.value } });
  };

  const applyPalette = (p: PaletteSettings) => {
    onSettingsChange({
      colors: { ...p.colors },
      stopPositions: { ...p.stopPositions },
      invertFilter: p.invertFilter,
      blendMode: p.blendMode,
      opacity: p.opacity,
      blur: p.blur,
    });
  };

  const saveCurrentPalette = () => {
    const name = saveNameInput.trim();
    if (!name) return;
    const s = settingsRef.current;
    const palette: SavedPalette = {
      id: Date.now().toString(),
      name,
      colors: { ...s.colors },
      stopPositions: { ...s.stopPositions },
      invertFilter: s.invertFilter,
      blendMode: s.blendMode,
      opacity: s.opacity,
      blur: s.blur,
    };
    const next = [...savedPalettes, palette];
    setSavedPalettes(next);
    localStorage.setItem(LS_KEY, JSON.stringify(next));
    setSaveNameInput("");
    setShowSaveInput(false);
  };

  const deletePalette = (id: string) => {
    const next = savedPalettes.filter((p) => p.id !== id);
    setSavedPalettes(next);
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  };

  const sortedStops = [...GRADIENT_STOP_META]
    .map((s) => ({ ...s, pct: stopPositions[s.key] }))
    .sort((a, b) => a.pct - b.pct);

  const previewGradient = `linear-gradient(90deg, ${sortedStops.map((s) => `${colors[s.key]} ${s.pct}%`).join(", ")})`;

  return (
    <div className="fixed top-4 left-4 z-10 w-72 rounded-lg border border-zinc-200 bg-white/90 shadow-lg backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/90">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400"
      >
        <span>Aurora colors</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn("transition-transform", isOpen && "rotate-180")}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3 border-t border-zinc-200 px-3 py-3 dark:border-zinc-700">

          {/* ── Templates & saved palettes ── */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Palettes
            </span>

            {/* Built-in templates */}
            <div className="flex flex-wrap gap-1.5">
              {BUILT_IN_TEMPLATES.map((t) => (
                <button
                  key={t.name}
                  type="button"
                  title={t.name}
                  onClick={() => applyPalette(t)}
                  className="flex flex-col items-start gap-0.5 rounded border border-zinc-200 bg-white px-1.5 pb-1 pt-1 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-600 dark:bg-zinc-700"
                >
                  <div
                    className="h-3 w-14 rounded-sm"
                    style={{ background: palettePreviewGradient(t) }}
                  />
                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400">{t.name}</span>
                </button>
              ))}

              {/* User-saved palettes */}
              {savedPalettes.map((p) => (
                <div
                  key={p.id}
                  className="group relative flex flex-col items-start gap-0.5 rounded border border-zinc-200 bg-white px-1.5 pb-1 pt-1 shadow-sm dark:border-zinc-600 dark:bg-zinc-700"
                >
                  <button
                    type="button"
                    title={`Apply "${p.name}"`}
                    onClick={() => applyPalette(p)}
                    className="flex flex-col items-start gap-0.5"
                  >
                    <div
                      className="h-3 w-14 rounded-sm"
                      style={{ background: palettePreviewGradient(p) }}
                    />
                    <span className="text-[9px] text-zinc-500 dark:text-zinc-400">{p.name}</span>
                  </button>
                  <button
                    type="button"
                    title="Delete palette"
                    onClick={() => deletePalette(p.id)}
                    className="absolute -right-1.5 -top-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-zinc-200 text-zinc-500 hover:bg-red-100 hover:text-red-500 group-hover:flex dark:bg-zinc-600 dark:text-zinc-300"
                  >
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Save current as palette */}
            {showSaveInput ? (
              <div className="flex gap-1.5">
                <input
                  autoFocus
                  type="text"
                  value={saveNameInput}
                  onChange={(e) => setSaveNameInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveCurrentPalette();
                    if (e.key === "Escape") { setShowSaveInput(false); setSaveNameInput(""); }
                  }}
                  placeholder="Palette name…"
                  className="min-w-0 flex-1 rounded border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700 placeholder-zinc-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 dark:placeholder-zinc-500"
                />
                <button
                  type="button"
                  onClick={saveCurrentPalette}
                  disabled={!saveNameInput.trim()}
                  className="rounded bg-blue-500 px-2 py-1 text-[10px] font-medium text-white disabled:opacity-40 hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => { setShowSaveInput(false); setSaveNameInput(""); }}
                  className="rounded border border-zinc-200 px-2 py-1 text-[10px] text-zinc-500 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowSaveInput(true)}
                className="flex items-center gap-1 text-left text-[10px] text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Save current as palette
              </button>
            )}
          </div>

          {/* ── Gradient strip with draggable + clickable stop handles ── */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Gradient colors
            </span>
            <div className="relative pb-6 pt-1">
              <div
                ref={stripRef}
                className="h-5 w-full rounded-md shadow-inner"
                style={{ background: previewGradient }}
              />
              {GRADIENT_STOP_META.map(({ key, label }) => (
                <div
                  key={key}
                  style={{ left: `${stopPositions[key]}%` }}
                  className="absolute top-0 -translate-x-1/2"
                >
                  <input
                    ref={(el) => { inputRefs.current[key] = el; }}
                    type="color"
                    value={colors[key]}
                    onChange={updateColor(key)}
                    onBlur={() => setActiveStop((s) => s === key ? null : s)}
                    className="sr-only"
                  />
                  <button
                    type="button"
                    title={`${label} — drag to move, click to change color`}
                    onMouseDown={handleStopMouseDown(key)}
                    className={cn(
                      "h-5 w-5 cursor-ew-resize rounded-full border-2 border-white shadow-md ring-1 transition-[box-shadow,transform] hover:scale-110",
                      activeStop === key ? "scale-110 ring-blue-400" : "ring-black/10",
                    )}
                    style={{ background: colors[key] }}
                  />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-500">
                      {stopPositions[key]}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Overlay colors ── */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Overlay colors
            </span>
            <div className="flex gap-3">
              {OVERLAY_STOPS.map(({ key, label }) => {
                const isUnused = key === "light" && !invertFilter;
                return (
                  <label key={key} className={cn("flex cursor-pointer items-center gap-1.5", isUnused && "opacity-40")} title={isUnused ? "Unused when invert filter is off" : undefined}>
                    <div className="relative">
                      <input
                        type="color"
                        value={colors[key]}
                        onChange={updateColor(key)}
                        disabled={isUnused}
                        className="sr-only"
                      />
                      <div
                        className="h-6 w-6 rounded border-2 border-white shadow ring-1 ring-black/10"
                        style={{ background: colors[key] }}
                        onClick={(e) => !isUnused && (e.currentTarget.previousElementSibling as HTMLInputElement)?.click()}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-600 dark:text-zinc-300">{label}</span>
                      <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">{colors[key]}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* ── Invert filter toggle ── */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Invert filter (light mode)
            </span>
            <label className="flex cursor-pointer items-center gap-2">
              <div
                className={cn(
                  "relative h-5 w-9 rounded-full transition-colors",
                  invertFilter ? "bg-blue-500" : "bg-zinc-300 dark:bg-zinc-600",
                )}
                onClick={() => onSettingsChange({ invertFilter: !invertFilter })}
              >
                <div className={cn(
                  "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform",
                  invertFilter ? "translate-x-4" : "translate-x-0.5",
                )} />
              </div>
              <span className="text-xs text-zinc-600 dark:text-zinc-300">
                {invertFilter ? "On — colors show as complements" : "Off — colors render literally"}
              </span>
            </label>
          </div>

          {/* ── Blend mode ── */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              Blend mode (after layer)
            </span>
            <select
              value={blendMode}
              onChange={(e) => onSettingsChange({ blendMode: e.target.value as BlendMode })}
              className="w-full rounded border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
            >
              {BLEND_MODE_OPTIONS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* ── Opacity ── */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">Opacity</span>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">{Math.round(opacity * 100)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={Math.round(opacity * 100)}
              onChange={(e) => onSettingsChange({ opacity: Number(e.target.value) / 100 })}
              className="h-1.5 w-full cursor-pointer accent-blue-500"
            />
          </div>

          {/* ── Blur ── */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">Blur</span>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">{blur}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              step={1}
              value={blur}
              onChange={(e) => onSettingsChange({ blur: Number(e.target.value) })}
              className="h-1.5 w-full cursor-pointer accent-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={() => applyPalette(BUILT_IN_TEMPLATES[0]!)}
            className="text-left text-xs text-zinc-400 underline hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Reset to default
          </button>
        </div>
      )}
    </div>
  );
}
