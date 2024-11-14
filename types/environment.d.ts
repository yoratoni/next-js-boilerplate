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
			 * The marker is a static public key that can be used to identify the application,
			 * it is a non-sensitive value that can be shared publicly, generated via:
			 * ```bash
			 * $ openssl rand -base64 8
			 * ```
			 */
			NEXT_PUBLIC_CGAS_MARKER: string

			Status
		}
	}
}
