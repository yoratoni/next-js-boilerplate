import plugin from "tailwindcss/plugin"

/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["var(--font-rubik)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate"),
		// Adding child variants
		plugin(({ addVariant }) => {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
			addVariant("child-focus", "& > *:focus")
			addVariant("child-active", "& > *:active")
		}),
	],
}
