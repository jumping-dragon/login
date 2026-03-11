"use client";
import { cn } from "lib/utils";
import React, { type ReactNode, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

const BLEND_MODE_OPTIONS = [
  "difference",
  "normal",
  "screen",
  "multiply",
  "overlay",
  "color-dodge",
  "soft-light",
] as const;

type BlendMode = (typeof BLEND_MODE_OPTIONS)[number];

interface ColorMap {
  aurora1: string; aurora2: string; aurora3: string; aurora4: string; aurora5: string;
  dark: string; light: string;
}

interface StopMap {
  aurora1: number; aurora2: number; aurora3: number; aurora4: number; aurora5: number;
}

interface PaletteSettings {
  colors: ColorMap;
  stopPositions: StopMap;
  invertFilter: boolean;
  blendMode: BlendMode;
  opacity: number;
  blur: number;
}

interface SavedPalette extends PaletteSettings {
  id: string;
  name: string;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const AURORA_DEFAULTS: ColorMap = {
  aurora1: "#3b82f6",
  aurora2: "#a5b4fc",
  aurora3: "#93c5fd",
  aurora4: "#ddd6fe",
  aurora5: "#60a5fa",
  dark: "#000000",
  light: "#ffffff",
};

const DEFAULT_STOP_POSITIONS: StopMap = {
  aurora1: 10,
  aurora2: 15,
  aurora3: 20,
  aurora4: 25,
  aurora5: 30,
};

// ─── Built-in templates ───────────────────────────────────────────────────────

const BUILT_IN_TEMPLATES: ReadonlyArray<{ name: string } & PaletteSettings> = [
  {
    name: "Original",
    colors: { ...AURORA_DEFAULTS },
    stopPositions: { ...DEFAULT_STOP_POSITIONS },
    invertFilter: true,
    blendMode: "difference",
    opacity: 0.5,
    blur: 10,
  },
  {
    name: "Rainbow",
    colors: {
      aurora1: "#ff4444",
      aurora2: "#ffaa00",
      aurora3: "#44ff88",
      aurora4: "#4488ff",
      aurora5: "#aa44ff",
      dark: "#000000",
      light: "#ffffff",
    },
    stopPositions: { aurora1: 5, aurora2: 25, aurora3: 45, aurora4: 65, aurora5: 85 },
    invertFilter: false,
    blendMode: "screen",
    opacity: 0.65,
    blur: 10,
  },
];

const LS_KEY = "aurora-saved-palettes";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const GRADIENT_STOP_META: Array<{ key: keyof StopMap; label: string }> = [
  { key: "aurora1", label: "Aurora 1" },
  { key: "aurora2", label: "Aurora 2" },
  { key: "aurora3", label: "Aurora 3" },
  { key: "aurora4", label: "Aurora 4" },
  { key: "aurora5", label: "Aurora 5" },
];

const OVERLAY_STOPS: Array<{ key: "dark" | "light"; label: string }> = [
  { key: "dark", label: "Dark overlay" },
  { key: "light", label: "Light overlay" },
];

function palettePreviewGradient(settings: Pick<PaletteSettings, "colors" | "stopPositions">) {
  const stops = [...GRADIENT_STOP_META]
    .map((s) => ({ color: settings.colors[s.key], pct: settings.stopPositions[s.key] }))
    .sort((a, b) => a.pct - b.pct);
  return `linear-gradient(90deg, ${stops.map((s) => `${s.color} ${s.pct}%`).join(", ")})`;
}

function loadSavedPalettes(): SavedPalette[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as SavedPalette[]) : [];
  } catch {
    return [];
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  mainClassName?: string;
  /** Show the color controller panel (dev tool) */
  showController?: boolean;
  /**
   * Apply CSS invert filter in light mode.
   * When true (default): aurora colors are shown as their complements; white overlay becomes black bands.
   * When false: colors render literally — use this for monochromatic or direct-color palettes.
   */
  invertFilter?: boolean;
  /**
   * mix-blend-mode for the ::after overlay layer. Default: "difference".
   * Use "normal" to disable blending, "screen" for brighter output, etc.
   */
  blendMode?: BlendMode;
  /** Aurora layer opacity, 0–1. Default: 0.5 */
  opacity?: number;
  /** Aurora blur radius in px. Default: 10 */
  blur?: number;
}

export const AuroraBackground = ({
  className,
  mainClassName,
  children,
  showRadialGradient = true,
  showController = false,
  invertFilter: invertFilterProp = true,
  blendMode: blendModeProp = "difference",
  opacity: opacityProp = 0.5,
  blur: blurProp = 10,
  ...props
}: AuroraBackgroundProps) => {
  const [colors, setColors] = useState<ColorMap>(AURORA_DEFAULTS);
  const [stopPositions, setStopPositions] = useState<StopMap>(DEFAULT_STOP_POSITIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [activeStop, setActiveStop] = useState<string | null>(null);
  const [invertFilter, setInvertFilter] = useState(invertFilterProp);
  const [blendMode, setBlendMode] = useState<BlendMode>(blendModeProp);
  const [opacity, setOpacity] = useState(opacityProp);
  const [blur, setBlur] = useState(blurProp);

  const [savedPalettes, setSavedPalettes] = useState<SavedPalette[]>([]);
  const [saveNameInput, setSaveNameInput] = useState("");
  const [showSaveInput, setShowSaveInput] = useState(false);

  // Load from localStorage once on mount
  useEffect(() => { setSavedPalettes(loadSavedPalettes()); }, []);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const stripRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<keyof StopMap | null>(null);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current || !stripRef.current) return;
      if (Math.abs(e.clientX - dragStartX.current) > 3) hasDragged.current = true;
      const { left, width } = stripRef.current.getBoundingClientRect();
      const pct = Math.round(Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100)));
      setStopPositions((prev) => ({ ...prev, [dragging.current!]: pct }));
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
  }, []);

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
    setColors((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const applyPalette = (p: PaletteSettings) => {
    setColors({ ...p.colors });
    setStopPositions({ ...p.stopPositions });
    setInvertFilter(p.invertFilter);
    setBlendMode(p.blendMode);
    setOpacity(p.opacity);
    setBlur(p.blur);
  };

  const saveCurrentPalette = () => {
    const name = saveNameInput.trim();
    if (!name) return;
    const palette: SavedPalette = {
      id: Date.now().toString(),
      name,
      colors: { ...colors },
      stopPositions: { ...stopPositions },
      invertFilter,
      blendMode,
      opacity,
      blur,
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

  // Sort stops by position for a valid preview gradient
  const sortedStops = [...GRADIENT_STOP_META]
    .map((s) => ({ ...s, pct: stopPositions[s.key] }))
    .sort((a, b) => a.pct - b.pct);

  const previewGradient = `linear-gradient(90deg, ${sortedStops.map((s) => `${colors[s.key]} ${s.pct}%`).join(", ")})`;

  const auroraGradient = `repeating-linear-gradient(100deg,${colors.aurora1} ${stopPositions.aurora1}%,${colors.aurora2} ${stopPositions.aurora2}%,${colors.aurora3} ${stopPositions.aurora3}%,${colors.aurora4} ${stopPositions.aurora4}%,${colors.aurora5} ${stopPositions.aurora5}%)`;

  const overlayColor = invertFilter ? colors.light : colors.dark;
  const overlayGradientValue = `repeating-linear-gradient(100deg,${overlayColor} 0%,${overlayColor} 7%,transparent 10%,transparent 12%,${overlayColor} 16%)`;

  // Smooth-step approximation (1 - 3t²+2t³) sampled at t = 0, 0.2, 0.4, 0.6, 0.8, 1
  // over the range 10% → 72%, giving a perceptually even S-curve fade with no visible banding.
  const maskGradient = [
    "radial-gradient(ellipse at 100% 0%",
    "black 10%",
    "rgba(0,0,0,0.9) 22%",
    "rgba(0,0,0,0.65) 35%",
    "rgba(0,0,0,0.35) 47%",
    "rgba(0,0,0,0.1) 60%",
    "transparent 72%)",
  ].join(",");

  const auroraStyle = {
    "--aurora": auroraGradient,
    "--overlay-gradient": overlayGradientValue,
    "--mask-gradient": maskGradient,
    "--aurora-blend": blendMode,
    "--aurora-opacity": opacity,
    "--aurora-blur": `${blur}px`,
    "--d": colors.aurora3,
    "--blue-400": colors.aurora5,
    "--blue-500": colors.aurora1,
    "--indigo-300": colors.aurora2,
    "--violet-200": colors.aurora4,
    "--black": colors.dark,
    "--white": colors.light,
    "--transparent": "transparent",
  } as React.CSSProperties;

  return (
    <main className={mainClassName}>
      {showController && (
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
                    onClick={() => setInvertFilter((v) => !v)}
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
                  onChange={(e) => setBlendMode(e.target.value as BlendMode)}
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
                  onChange={(e) => setOpacity(Number(e.target.value) / 100)}
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
                  onChange={(e) => setBlur(Number(e.target.value))}
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
      )}
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden" style={auroraStyle}>
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--overlay-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] [opacity:var(--aurora-opacity)] blur-[var(--aurora-blur)] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--d)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--overlay-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:[mix-blend-mode:var(--aurora-blend)] after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              invertFilter && "invert",
              showRadialGradient && `[mask-image:var(--mask-gradient)]`,
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};
