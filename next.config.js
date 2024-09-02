/** @type {import("next").NextConfig} */
const nextConfig = {
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
