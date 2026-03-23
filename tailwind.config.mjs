/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					900: 'hsl(243, 96%, 9%)',
					800: 'hsl(243, 27%, 20%)',
					700: 'hsl(243, 23%, 24%)',
					600: 'hsl(243, 23%, 30%)',
					300: 'hsl(240, 6%, 70%)',
					200: 'hsl(250, 6%, 84%)',
					0: 'hsl(0, 0%, 100%)',
				},
				orange: {
					500: 'hsl(28, 100%, 52%)',
				},
				blue: {
					500: 'hsl(233, 67%, 56%)',
					700: 'hsl(248, 70%, 36%)',
				},
			},
			fontFamily: {
				heading: ['"Bricolage Grotesque"', 'sans-serif'],
				sans: ['"DM Sans"', 'sans-serif'],
			},
			fontSize: {
				body: '18px',
			},
		},
	},
	plugins: [],
};