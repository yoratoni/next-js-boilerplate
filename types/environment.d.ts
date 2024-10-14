import "next"

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// Application version (from package.json, not inside .env)
			VERSION: string

			// Node environment
			NODE_ENV: "development" | "production"

			// The domain of the application
			NEXT_PUBLIC_DOMAIN: string
		}
	}
}
