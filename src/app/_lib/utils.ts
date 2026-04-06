import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Convert a date to a relative time string, such as
 * "a minute ago", "in 2 hours", "yesterday", "3 months ago", etc.
 * using Intl.RelativeTimeFormat
 */
export function getRelativeTimeString(
	date: Date | number,
	lang = navigator.language,
): string | undefined {
	// Allow dates or times to be passed
	const timeMs = typeof date === "number" ? date : date.getTime();

	// Get the amount of seconds between the given date and now
	const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

	// Array reprsenting one minute, hour, day, week, month, etc in seconds
	const cutoffs = [
		60,
		3600,
		86400,
		86400 * 7,
		86400 * 30,
		86400 * 365,
		Number.POSITIVE_INFINITY,
	];

	// Array equivalent to the above but in the string representation of the units
	const units: Intl.RelativeTimeFormatUnit[] = [
		"second",
		"minute",
		"hour",
		"day",
		"week",
		"month",
		"year",
	];

	// Grab the ideal cutoff unit
	const unitIndex = cutoffs.findIndex(
		(cutoff) => cutoff > Math.abs(deltaSeconds),
	);

	// Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
	// is one day in seconds, so we can divide our seconds by this to get the # of days
	const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

	// Intl.RelativeTimeFormat do its magic
	const rtf = new Intl.RelativeTimeFormat(lang, {
		numeric: "auto",
		style: "short",
	});
	const unit = units[unitIndex];

	if (divisor && unit) {
		return rtf.format(Math.floor(deltaSeconds / divisor), unit);
	}
}

/**
 * Convert a date to a 2018-10-29 10:02:48 AM format
 * using Intl.RelativeTimeFormat
 */
export function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	};

	const formatter = new Intl.DateTimeFormat("en-US", options);
	const parts = formatter.formatToParts(date);

	const partValues: Record<string, string> = {};
	for (const part of parts) {
		partValues[part.type] = part.value;
	}

	return `${partValues.year}-${partValues.month}-${partValues.day} ${partValues.hour}:${partValues.minute}:${partValues.second} ${partValues.dayPeriod}`;
}

export function fromEntries<V>(iterable: Iterable<[string, V]>) {
	return [...iterable].reduce(
		(obj, [key, val]) => {
			obj[key] = val;
			return obj;
		},
		{} as Record<string, V>,
	);
}

export function isIpAddress(haystack: string): boolean {
	return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
		haystack,
	);
}

export function isCidr(haystack: string): boolean {
	return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))$/.test(
		haystack,
	);
}

export function isFQDN(haystack: string): boolean {
	return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
		haystack,
	);
}

export function isURL(haystack: string): boolean {
	try {
		const url = new URL(haystack);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (_) {
		return false;
	}
}

export function parseTargetList(haystack: string) {
	return haystack.split(/\r?\n/).reduce(
		(a, e) => {
			if (isIpAddress(e)) a.ip += 1;
			if (isCidr(e)) a.cidr += 1;
			if (isFQDN(e)) a.domain += 1;
			if (isURL(e)) a.url += 1;
			return a;
		},
		{
			ip: 0,
			cidr: 0,
			domain: 0,
			url: 0,
		},
	);
}

const units: Record<string, string> = {
	ip: "IPs",
	cidr: "CIDRs",
	domain: "Domains",
	url: "URLs",
} as const;

export function parseTargetListToLabel(haystack: string) {
	const fileListMetrics = parseTargetList(haystack);
	return fileListMetricsLabel(fileListMetrics);
}

export function fileListMetricsLabel(fileListMetrics: Record<string, number>) {
	return Object.entries(fileListMetrics)
		.filter(([k, v]) => v > 0)
		.map(([k, v]) => `${v} ${units[k]}`)
		.join(", ");
}

export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 🏁 Returns an unicode-emoji-flag-icon for a two digit country code or a locale (eg. en-US)
 * - Supports 239 countries
 *
 * @param {String} countryCode - the country code to display a flag for (eg. US)
 * @param {String} [fallback=🏳] - fallback icon when no matching flag has been found
 * @param {Object} [countryFlagData] - an object of country code : flag
 */
export function emojiFlag(
	countryCode: string,
	fallback = "🏳",
	countryFlagData: Record<string, string> = {
		AD: "🇦🇩",
		AE: "🇦🇪",
		AF: "🇦🇫",
		AG: "🇦🇬",
		AI: "🇦🇮",
		AL: "🇦🇱",
		AM: "🇦🇲",
		AO: "🇦🇴",
		AQ: "🇦🇶",
		AR: "🇦🇷",
		AS: "🇦🇸",
		AT: "🇦🇹",
		AU: "🇦🇺",
		AW: "🇦🇼",
		AX: "🇦🇽",
		AZ: "🇦🇿",
		BA: "🇧🇦",
		BB: "🇧🇧",
		BD: "🇧🇩",
		BE: "🇧🇪",
		BF: "🇧🇫",
		BG: "🇧🇬",
		BH: "🇧🇭",
		BI: "🇧🇮",
		BJ: "🇧🇯",
		BL: "🇧🇱",
		BM: "🇧🇲",
		BN: "🇧🇳",
		BO: "🇧🇴",
		BQ: "🇧🇶",
		BR: "🇧🇷",
		BS: "🇧🇸",
		BT: "🇧🇹",
		BV: "🇧🇻",
		BW: "🇧🇼",
		BY: "🇧🇾",
		BZ: "🇧🇿",
		CA: "🇨🇦",
		CC: "🇨🇨",
		CD: "🇨🇩",
		CF: "🇨🇫",
		CG: "🇨🇬",
		CH: "🇨🇭",
		CI: "🇨🇮",
		CK: "🇨🇰",
		CL: "🇨🇱",
		CM: "🇨🇲",
		CN: "🇨🇳",
		CO: "🇨🇴",
		CR: "🇨🇷",
		CU: "🇨🇺",
		CV: "🇨🇻",
		CW: "🇨🇼",
		CX: "🇨🇽",
		CY: "🇨🇾",
		CZ: "🇨🇿",
		DE: "🇩🇪",
		DJ: "🇩🇯",
		DK: "🇩🇰",
		DM: "🇩🇲",
		DO: "🇩🇴",
		DZ: "🇩🇿",
		EC: "🇪🇨",
		EE: "🇪🇪",
		EG: "🇪🇬",
		EH: "🇪🇭",
		ER: "🇪🇷",
		ES: "🇪🇸",
		ET: "🇪🇹",
		FI: "🇫🇮",
		FJ: "🇫🇯",
		FK: "🇫🇰",
		FM: "🇫🇲",
		FO: "🇫🇴",
		FR: "🇫🇷",
		GA: "🇬🇦",
		GB: "🇬🇧",
		GD: "🇬🇩",
		GE: "🇬🇪",
		GF: "🇬🇫",
		GG: "🇬🇬",
		GH: "🇬🇭",
		GI: "🇬🇮",
		GL: "🇬🇱",
		GM: "🇬🇲",
		GN: "🇬🇳",
		GP: "🇬🇵",
		GQ: "🇬🇶",
		GR: "🇬🇷",
		GS: "🇬🇸",
		GT: "🇬🇹",
		GU: "🇬🇺",
		GW: "🇬🇼",
		GY: "🇬🇾",
		HK: "🇭🇰",
		HM: "🇭🇲",
		HN: "🇭🇳",
		HR: "🇭🇷",
		HT: "🇭🇹",
		HU: "🇭🇺",
		ID: "🇮🇩",
		IE: "🇮🇪",
		IL: "🇮🇱",
		IM: "🇮🇲",
		IN: "🇮🇳",
		IO: "🇮🇴",
		IQ: "🇮🇶",
		IR: "🇮🇷",
		IS: "🇮🇸",
		IT: "🇮🇹",
		JE: "🇯🇪",
		JM: "🇯🇲",
		JO: "🇯🇴",
		JP: "🇯🇵",
		KE: "🇰🇪",
		KG: "🇰🇬",
		KH: "🇰🇭",
		KI: "🇰🇮",
		KM: "🇰🇲",
		KN: "🇰🇳",
		KP: "🇰🇵",
		KR: "🇰🇷",
		KW: "🇰🇼",
		KY: "🇰🇾",
		KZ: "🇰🇿",
		LA: "🇱🇦",
		LB: "🇱🇧",
		LC: "🇱🇨",
		LI: "🇱🇮",
		LK: "🇱🇰",
		LR: "🇱🇷",
		LS: "🇱🇸",
		LT: "🇱🇹",
		LU: "🇱🇺",
		LV: "🇱🇻",
		LY: "🇱🇾",
		MA: "🇲🇦",
		MC: "🇲🇨",
		MD: "🇲🇩",
		ME: "🇲🇪",
		MF: "🇲🇫",
		MG: "🇲🇬",
		MH: "🇲🇭",
		MK: "🇲🇰",
		ML: "🇲🇱",
		MM: "🇲🇲",
		MN: "🇲🇳",
		MO: "🇲🇴",
		MP: "🇲🇵",
		MQ: "🇲🇶",
		MR: "🇲🇷",
		MS: "🇲🇸",
		MT: "🇲🇹",
		MU: "🇲🇺",
		MV: "🇲🇻",
		MW: "🇲🇼",
		MX: "🇲🇽",
		MY: "🇲🇾",
		MZ: "🇲🇿",
		NA: "🇳🇦",
		NC: "🇳🇨",
		NE: "🇳🇪",
		NF: "🇳🇫",
		NG: "🇳🇬",
		NI: "🇳🇮",
		NL: "🇳🇱",
		NO: "🇳🇴",
		NP: "🇳🇵",
		NR: "🇳🇷",
		NU: "🇳🇺",
		NZ: "🇳🇿",
		OM: "🇴🇲",
		PA: "🇵🇦",
		PE: "🇵🇪",
		PF: "🇵🇫",
		PG: "🇵🇬",
		PH: "🇵🇭",
		PK: "🇵🇰",
		PL: "🇵🇱",
		PM: "🇵🇲",
		PN: "🇵🇳",
		PR: "🇵🇷",
		PS: "🇵🇸",
		PT: "🇵🇹",
		PW: "🇵🇼",
		PY: "🇵🇾",
		QA: "🇶🇦",
		RE: "🇷🇪",
		RO: "🇷🇴",
		RS: "🇷🇸",
		RU: "🇷🇺",
		RW: "🇷🇼",
		SA: "🇸🇦",
		SB: "🇸🇧",
		SC: "🇸🇨",
		SD: "🇸🇩",
		SE: "🇸🇪",
		SG: "🇸🇬",
		SH: "🇸🇭",
		SI: "🇸🇮",
		SJ: "🇸🇯",
		SK: "🇸🇰",
		SL: "🇸🇱",
		SM: "🇸🇲",
		SN: "🇸🇳",
		SO: "🇸🇴",
		SR: "🇸🇷",
		SS: "🇸🇸",
		ST: "🇸🇹",
		SV: "🇸🇻",
		SX: "🇸🇽",
		SY: "🇸🇾",
		SZ: "🇸🇿",
		TC: "🇹🇨",
		TD: "🇹🇩",
		TF: "🇹🇫",
		TG: "🇹🇬",
		TH: "🇹🇭",
		TJ: "🇹🇯",
		TK: "🇹🇰",
		TL: "🇹🇱",
		TM: "🇹🇲",
		TN: "🇹🇳",
		TO: "🇹🇴",
		TR: "🇹🇷",
		TT: "🇹🇹",
		TV: "🇹🇻",
		TW: "🇹🇼",
		TZ: "🇹🇿",
		UA: "🇺🇦",
		UG: "🇺🇬",
		UM: "🇺🇲",
		US: "🇺🇸",
		UY: "🇺🇾",
		UZ: "🇺🇿",
		VA: "🇻🇦",
		VC: "🇻🇨",
		VE: "🇻🇪",
		VG: "🇻🇬",
		VI: "🇻🇮",
		VN: "🇻🇳",
		VU: "🇻🇺",
		WF: "🇼🇫",
		WS: "🇼🇸",
		XK: "🇽🇰",
		YE: "🇾🇪",
		YT: "🇾🇹",
		ZA: "🇿🇦",
		ZM: "🇿🇲",
	},
) {
	const arr = countryCode.split("-");
	if (arr[0]) {
		return countryFlagData[arr[0].toUpperCase()] ?? fallback;
	}
}

export function getBranchNameAndSHA(haystack: string): [string, string] {
	const branchB64 = haystack.startsWith("s3/")
		? `${haystack.split("/")[2]}`
		: haystack;
	const [base64BranchName, shortSha] = branchB64.split("-");

	if (!base64BranchName || !shortSha) {
		throw new Error("error parsing");
	}

	const branchName = atob(base64BranchName);
	return [branchName, shortSha];
}

export function getBranchLabel(
	branchNameOrArray: string[] | string,
	shortSha?: string,
): string {
	if (Array.isArray(branchNameOrArray)) {
		const branchNameShortSha = branchNameOrArray;
		return `${branchNameShortSha[0]} (#${branchNameShortSha[1]})`;
	} else {
		const branchName = branchNameOrArray;
		if (branchName !== undefined && shortSha !== undefined) {
			return `${branchName} (#${shortSha})`;
		} else {
			return branchName; // Or handle the undefined case appropriately, maybe throw an error?
		}
	}
}

export function formatBytes(bytes: number, decimals = 2, asObj = false) {
	const { value, unit } = formatBytesObj(bytes, decimals);
	return `${value} ${unit}`;
}

export function formatBytesObj(bytes: number, decimals = 2) {
	if (!+bytes)
		return {
			value: 0,
			unit: "Bytes",
		};

	const k = 1000;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return {
		value: Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
		unit: sizes[i],
	};
}

export enum ReconScope {
	ApexDomains = "apexDomains",
	Ips = "ips",
	Domains = "domains",
}

export function stringToReconScope(input: string): ReconScope {
	if (Object.values(ReconScope).includes(input as ReconScope)) {
		return input as ReconScope;
	}
	throw new Error("recon scope invalid");
}

export function getTimezoneOffsetString(
	timeZone: string,
	referenceDate = new Date(),
): string {
	// Method 1: Try using timeZoneName: 'shortOffset' (more direct and often more reliable)
	try {
		const offsetFormatter = new Intl.DateTimeFormat("en-US", {
			// 'en-US' locale is arbitrary for this
			timeZone,
			timeZoneName: "shortOffset",
		});
		const parts = offsetFormatter.formatToParts(referenceDate);
		const offsetPart = parts.find((part) => part.type === "timeZoneName");

		if (offsetPart?.value) {
			// offsetPart.value is typically like "GMT-4", "GMT+5:30", "GMT+12" or just "GMT" for UTC
			const offsetString = offsetPart.value.replace("GMT", "UTC");

			if (offsetString === "UTC") {
				// For Etc/UTC, it might just return "GMT" -> "UTC"
				return "UTC+00:00";
			}

			// Regex to match UTC[+-]H, UTC[+-]HH, UTC[+-]H:MM, UTC[+-]HH:MM
			// For example: UTC-4, UTC+05:30, UTC+12
			const match = offsetString.match(/^(UTC)([+-])(\d{1,2})(?::(\d{2}))?$/);
			if (match) {
				const [, prefix, sign, hoursStr, minutesStr] = match;
				const hours = String(hoursStr).padStart(2, "0");
				const minutes = minutesStr ? String(minutesStr).padStart(2, "0") : "00";
				return `${prefix}${sign}${hours}:${minutes}`;
			}
			// If format is not recognized (e.g., "PST" or something unexpected),
			// let it fall through to the calculation method.
			// console.warn(`Unexpected shortOffset format for ${timeZone}: ${offsetPart.value}. Falling back to calculation.`);
		}
	} catch (e) {
		// If Intl.DateTimeFormat with shortOffset fails for some reason, fall back.
		// console.warn(`Intl.DateTimeFormat with shortOffset failed for ${timeZone}: ${(e as Error).message}. Falling back to calculation.`);
	}

	// Method 2: Original calculation method, but improved (fallback)
	try {
		const formatterOptions = {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric", // <<< --- ADDED 'second'
			hourCycle: "h23",
			timeZone: timeZone,
		} as const;
		const formatter = new Intl.DateTimeFormat("en-US", formatterOptions);
		const parts = formatter.formatToParts(referenceDate);

		const getPartValue = (
			partType: keyof Intl.DateTimeFormatPartTypesRegistry,
		): number => {
			const part = parts.find((p) => p.type === partType);
			if (!part) {
				throw new Error(
					`Required date part "${partType}" not found for timezone "${timeZone}".`,
				);
			}
			const value = Number.parseInt(part.value, 10);
			if (isNaN(value)) {
				// Guard against Intl returning non-numeric for some reason
				throw new Error(
					`Parsed date part "${partType}" is NaN for timezone "${timeZone}". Value: "${part.value}"`,
				);
			}
			return value;
		};

		const year = getPartValue("year");
		const month = getPartValue("month"); // 1-indexed
		const day = getPartValue("day");
		const hour = getPartValue("hour");
		const minute = getPartValue("minute");
		const second = getPartValue("second"); // <<< --- GET 'second'

		// Construct a UTC timestamp from the wall-clock time components in the target timezone
		const wallTimeInTargetZoneAsUtcMs = Date.UTC(
			year,
			month - 1,
			day,
			hour,
			minute,
			second,
		);
		// Get the actual UTC timestamp of the reference date
		const actualUtcMs = referenceDate.getTime();

		// The difference represents the offset
		const offsetMilliseconds = wallTimeInTargetZoneAsUtcMs - actualUtcMs;

		// Round to the nearest minute. With seconds included in Date.UTC, this should be very close to a whole minute.
		const totalOffsetMinutes = Math.round(offsetMilliseconds / (60 * 1000));

		if (isNaN(totalOffsetMinutes)) {
			// This might happen if Date.UTC returns NaN (e.g., invalid date components)
			// or if any part parsing failed and threw, though getPartValue now throws earlier.
			console.warn(
				`Could not calculate offset for timezone: ${timeZone} using calculation method. Defaulting to UTC+00:00.`,
			);
			return "UTC+00:00";
		}

		const sign = totalOffsetMinutes < 0 ? "-" : "+";
		const absOffsetMinutes = Math.abs(totalOffsetMinutes);
		const offsetHours = Math.floor(absOffsetMinutes / 60);
		const offsetMins = absOffsetMinutes % 60;

		return `UTC${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMins).padStart(2, "0")}`;
	} catch (error) {
		// This catch block is for errors in the calculation method itself.
		// The original function's fallback (using 'timeZoneName: short') was not ideal for offsets.
		// console.error(`Error calculating timezone offset for ${timeZone}:`, error);
		return "UTC??:??"; // Ultimate fallback if both methods fail
	}
}

export function isValidTimeFormat(time: string): boolean {
	const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
	return timeRegex.test(time);
}

export function dateAtTimezone(
	date: Date,
	ianatz: string,
	additionalOptions?: Intl.DateTimeFormatOptions,
) {
	const options: Intl.DateTimeFormatOptions = {
		timeZone: ianatz,
		dateStyle: "full",
		timeStyle: "long",
		...additionalOptions,
	} as const;
	const formatter = new Intl.DateTimeFormat([], options);
	return formatter.format(date);
}
