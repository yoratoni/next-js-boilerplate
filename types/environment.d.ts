import "next"

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			/**
			 * The version of the application, note that it is automatically injected via the
			 * `package.json` file, and should not be modified manually via the `.env` file.
			 */
			VERSION: string

			/**
			 * The environment of the application, can either be "development" or "production",
			 * we chose not to use `test` or `testing` as we don't find it relevant enough.
			 */
			NODE_ENV: "development" | "production"

			/**
			 * The domain of the application, used for the middleware in production, and other
			 * domain-related operations.
			 */
			NEXT_PUBLIC_DOMAIN: string

			/**
			 * Status of the application (allows to enable/disable the application),
			 * It can either be:
			 * - `enabled`: The application is enabled and available to the public.
			 * - `disabled`: The application is disabled and not available to the public.
			 * - `in-maintenance`: The application is in maintenance mode and not available to the public.
			 * - `in-development`: The application is in development mode and not available to the public.
			 */
			NEXT_PUBLIC_APP_STATUS: "enabled" | "disabled" | "in-maintenance" | "in-development"
		}
	}
}
