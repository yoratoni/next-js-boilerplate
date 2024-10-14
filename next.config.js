// eslint-disable-next-line @typescript-eslint/no-require-imports
const { version } = require("./package.json")

/** @type {import("next").NextConfig} */
const nextConfig = {
	env: {
		VERSION: version,
	},
	images: {
		remotePatterns: [
			{ protocol: "http", hostname: "**" },
			{ protocol: "https", hostname: "**" },
			{ protocol: "http", hostname: "localhost" },
			{ protocol: "https", hostname: "localhost" },
		],
	},
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
