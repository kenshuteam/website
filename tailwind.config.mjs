import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			minHeight: {
				"1/2": "50%",
				"3/4": "75%",
			},
		},
	},
	plugins: [typography],
};
