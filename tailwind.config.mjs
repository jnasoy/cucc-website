/** @type {import('tailwindcss').Config} */
import fluid, {extract, fontSize, screens} from 'fluid-tailwind'
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content:{
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		extract
	},
	theme: {
		fontSize,
		screens,
		extend: {
			fontFamily:{
				serif: ['Yeseva One', ...defaultTheme.fontFamily.serif],
				sans: ['Chivo', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		fluid
	],
}