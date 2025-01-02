/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {

			},
			keyframes: {
				'trans-right': {
					'0%, 100%': { transform: 'translateX(300px) translateY(1000px)'},
					'50%': { transform: 'translateX(0px) translateY(0px)' }
				}
			},
			animation: {
				'trans-right': 'trans-right 4.5s ease-out infinite'
			},
			blur: {
				'white-bg-blur': '30'
			}
		},
	},
	plugins: [],
}
