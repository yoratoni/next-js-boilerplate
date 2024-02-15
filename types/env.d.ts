/**
 * This file is used to declare the types of the environment variables.
 */
declare namespace NodeJS {
    interface ProcessEnv {
        /**
         * Read-only environment variable that is used to determine the environment in
         * which the application is running.
         */
        readonly NODE_ENV: "development" | "production";
    }
}

