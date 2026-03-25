"use client";

import { useEffect } from "react";

export default function VersionLogger() {
	useEffect(() => {
		console.log(`REPLACED_DURING_BUILD`);
	}, []);

	return null;
}
