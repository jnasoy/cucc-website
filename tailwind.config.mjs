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
				sans: ['Lato', ...defaultTheme.fontFamily.sans],
			},
			colors:{
				'brand-color': '#FDA214',
				'brand-color-darker': '#EE8910'
			}
		},
	},
	plugins: [
		fluid
	],
}