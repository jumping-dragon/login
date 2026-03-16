"use client";

import { useEffect } from "react";

export default function VersionLogger() {
	useEffect(() => {
		console.log(`v-REPLACED_DURING_BUILD`);
	}, []);

	return null;
}
