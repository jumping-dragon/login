"use client";

import { cn } from "lib/utils";
import type React from "react";
import { type ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { AuroraController } from "./aurora-controller";
import {
	AURORA_DEFAULTS,
	type AuroraVariant,
	BUILT_IN_TEMPLATES,
	type BlendMode,
	type ColorMap,
	DEFAULT_STOP_POSITIONS,
	type PaletteSettings,
	type StopMap,
} from "./aurora-presets";

function resolveInitialPalette(
	preset: AuroraVariant | undefined,
	invertFilterProp: boolean,
	blendModeProp: BlendMode,
	opacityProp: number,
	blurProp: number,
): PaletteSettings {
	if (preset) {
		const template =
			BUILT_IN_TEMPLATES.find((t) => t.name === preset) ??
			BUILT_IN_TEMPLATES[0]!;
		return {
			colors: { ...template.colors },
			stopPositions: { ...template.stopPositions },
			invertFilter: template.invertFilter,
			blendMode: template.blendMode,
			opacity: template.opacity,
			blur: template.blur,
		};
	}
	return {
		colors: { ...AURORA_DEFAULTS },
		stopPositions: { ...DEFAULT_STOP_POSITIONS },
		invertFilter: invertFilterProp,
		blendMode: blendModeProp,
		opacity: opacityProp,
		blur: blurProp,
	};
}

export interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
	mainClassName?: string;
	showController?: boolean;
	/** Named variant. When provided, uses the variant's settings as initial values. */
	preset?: AuroraVariant;
	invertFilter?: boolean;
	blendMode?: BlendMode;
	opacity?: number;
	blur?: number;
}

export const AuroraBackground = ({
	className,
	mainClassName,
	children,
	showRadialGradient = true,
	showController = false,
	preset,
	invertFilter: invertFilterProp = true,
	blendMode: blendModeProp = "difference",
	opacity: opacityProp = 0.5,
	blur: blurProp = 10,
	...props
}: AuroraBackgroundProps) => {
	const initialPaletteRef = useRef<PaletteSettings | null>(null);
	if (initialPaletteRef.current === null) {
		initialPaletteRef.current = resolveInitialPalette(
			preset,
			invertFilterProp,
			blendModeProp,
			opacityProp,
			blurProp,
		);
	}
	const init = initialPaletteRef.current;

	const [colors, setColors] = useState<ColorMap>(() => ({ ...init.colors }));
	const [stopPositions, setStopPositions] = useState<StopMap>(() => ({
		...init.stopPositions,
	}));
	const [invertFilter, setInvertFilter] = useState(() => init.invertFilter);
	const [blendMode, setBlendMode] = useState<BlendMode>(() => init.blendMode);
	const [opacity, setOpacity] = useState(() => init.opacity);
	const [blur, setBlur] = useState(() => init.blur);

	const handleSettingsChange = useCallback(
		(partial: Partial<PaletteSettings>) => {
			if (partial.colors !== undefined) setColors(partial.colors);
			if (partial.stopPositions !== undefined) {
				setStopPositions((prev) => ({ ...prev, ...partial.stopPositions }));
			}
			if (partial.invertFilter !== undefined)
				setInvertFilter(partial.invertFilter);
			if (partial.blendMode !== undefined) setBlendMode(partial.blendMode);
			if (partial.opacity !== undefined) setOpacity(partial.opacity);
			if (partial.blur !== undefined) setBlur(partial.blur);
		},
		[],
	);

	const paletteSettings = useMemo<PaletteSettings>(
		() => ({
			colors,
			stopPositions,
			invertFilter,
			blendMode,
			opacity,
			blur,
		}),
		[colors, stopPositions, invertFilter, blendMode, opacity, blur],
	);

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
				<AuroraController
					settings={paletteSettings}
					onSettingsChange={handleSettingsChange}
				/>
			)}
			<div
				className={cn(
					"relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 transition-bg dark:bg-zinc-900",
					className,
				)}
				{...props}
			>
				<div className="absolute inset-0 overflow-hidden" style={auroraStyle}>
					<div
						className={cn(
							`-inset-[10px] pointer-events-none absolute blur-[var(--aurora-blur)] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--d)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--overlay-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] [opacity:var(--aurora-opacity)] after:absolute after:inset-0 after:animate-aurora after:content-[""] dark:invert-0 after:[background-attachment:fixed] after:[background-image:var(--overlay-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[mix-blend-mode:var(--aurora-blend)] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
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
