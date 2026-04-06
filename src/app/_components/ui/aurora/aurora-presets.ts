// ─── Types ────────────────────────────────────────────────────────────────────

export const BLEND_MODE_OPTIONS = [
	"difference",
	"normal",
	"screen",
	"multiply",
	"overlay",
	"color-dodge",
	"soft-light",
] as const;

export type BlendMode = (typeof BLEND_MODE_OPTIONS)[number];

export interface ColorMap {
	aurora1: string;
	aurora2: string;
	aurora3: string;
	aurora4: string;
	aurora5: string;
	dark: string;
	light: string;
}

export interface StopMap {
	aurora1: number;
	aurora2: number;
	aurora3: number;
	aurora4: number;
	aurora5: number;
}

export interface PaletteSettings {
	colors: ColorMap;
	stopPositions: StopMap;
	invertFilter: boolean;
	blendMode: BlendMode;
	opacity: number;
	blur: number;
}

export interface SavedPalette extends PaletteSettings {
	id: string;
	name: string;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const AURORA_DEFAULTS: ColorMap = {
	aurora1: "#3b82f6",
	aurora2: "#a5b4fc",
	aurora3: "#93c5fd",
	aurora4: "#ddd6fe",
	aurora5: "#60a5fa",
	dark: "#000000",
	light: "#ffffff",
};

export const DEFAULT_STOP_POSITIONS: StopMap = {
	aurora1: 10,
	aurora2: 15,
	aurora3: 20,
	aurora4: 25,
	aurora5: 30,
};

// ─── Built-in templates ───────────────────────────────────────────────────────

export const AURORA_VARIANT_NAMES = ["Original", "Rainbow", "0317"] as const;
export type AuroraVariant = (typeof AURORA_VARIANT_NAMES)[number];

export const BUILT_IN_TEMPLATES: ReadonlyArray<
	{ name: AuroraVariant } & PaletteSettings
> = [
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
		stopPositions: {
			aurora1: 5,
			aurora2: 25,
			aurora3: 45,
			aurora4: 65,
			aurora5: 85,
		},
		invertFilter: false,
		blendMode: "screen",
		opacity: 0.65,
		blur: 10,
	},
	{
		name: "0317",
		colors: {
			aurora1: "#255fee",
			aurora2: "#4388f6",
			aurora3: "#86bff8",
			aurora4: "#bad0fa",
			aurora5: "#0005e9",
			dark: "#000000",
			light: "#ffffff",
		},
		stopPositions: {
			aurora1: 0,
			aurora2: 13,
			aurora3: 32,
			aurora4: 57,
			aurora5: 84,
		},
		invertFilter: false,
		blendMode: "overlay",
		opacity: 0.7,
		blur: 25,
	},
];

export const LS_KEY = "aurora-saved-palettes";

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const GRADIENT_STOP_META: Array<{ key: keyof StopMap; label: string }> =
	[
		{ key: "aurora1", label: "Aurora 1" },
		{ key: "aurora2", label: "Aurora 2" },
		{ key: "aurora3", label: "Aurora 3" },
		{ key: "aurora4", label: "Aurora 4" },
		{ key: "aurora5", label: "Aurora 5" },
	];

export const OVERLAY_STOPS: Array<{ key: "dark" | "light"; label: string }> = [
	{ key: "dark", label: "Dark overlay" },
	{ key: "light", label: "Light overlay" },
];

export function palettePreviewGradient(
	settings: Pick<PaletteSettings, "colors" | "stopPositions">,
) {
	const stops = [...GRADIENT_STOP_META]
		.map((s) => ({
			color: settings.colors[s.key],
			pct: settings.stopPositions[s.key],
		}))
		.sort((a, b) => a.pct - b.pct);
	return `linear-gradient(90deg, ${stops.map((s) => `${s.color} ${s.pct}%`).join(", ")})`;
}

export function loadSavedPalettes(): SavedPalette[] {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(LS_KEY);
		return raw ? (JSON.parse(raw) as SavedPalette[]) : [];
	} catch {
		return [];
	}
}
