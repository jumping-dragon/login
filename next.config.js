/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	output: "standalone",
	async redirects() {
		return [
			{
				source: "/ui/v2/login/login",
				destination: "/login",
				permanent: false,
			},
		];
	},
};

export default config;
