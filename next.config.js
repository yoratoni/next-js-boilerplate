/** @type {import("next").NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "http", hostname: "**" },
			{ protocol: "https", hostname: "**" },
		],
		domains: ["localhost"],
	},
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
