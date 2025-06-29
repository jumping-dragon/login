import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		ZITADEL_API_URL: z.string().url(), 
		ZITADEL_SERVICE_USER_TOKEN: z.string().min(1, "ZITADEL_SERVICE_USER_TOKEN must be set"),
		ZITADEL_ADMIN_TOKEN: z.string().min(1, "ZITADEL_ADMIN_TOKEN must be set"),
		SINK_NOTIFICATION_URL: z.string().url(),
		EMAIL_VERIFICATION: z.boolean().default(false),
		DEBUG: z.boolean().default(false),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		ZITADEL_API_URL: process.env.ZITADEL_API_URL,
		ZITADEL_SERVICE_USER_TOKEN: process.env.ZITADEL_SERVICE_USER_TOKEN,
		ZITADEL_ADMIN_TOKEN: process.env.ZITADEL_ADMIN_TOKEN,
		SINK_NOTIFICATION_URL: process.env.SINK_NOTIFICATION_URL,
		EMAIL_VERIFICATION: process.env.EMAIL_VERIFICATION,
		DEBUG: process.env.DEBUG,
		// NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
