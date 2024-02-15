/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**"
            },
            {
                protocol: "https",
                hostname: "**"
            }
        ],
        domains: [
            "localhost"
        ]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: false
    },
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
        "@zerodevapp",
        "@web3"
    ]
};

module.exports = nextConfig;
