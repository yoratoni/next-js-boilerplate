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

			// Status of the application (allows to enable/disable the application)
			// Can either be "enabled" | "disabled" | "in-maintenance" | "in-development"
			NEXT_PUBLIC_APP_STATUS: "enabled" | "disabled" | "in-maintenance" | "in-development"
		}
	}
}
