/** @type {import("next").NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		// Add environment variables here
	},
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
