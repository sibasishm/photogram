module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#2874f0',
				secondary: '#fb641b',
				dark: '#212121',
				light: '#f0f0f0',
			},
			transitionTimingFunction: {
				bloop: 'cubic-bezier(1, -0.65, 0, 2.31)',
			},
		},
	},
	variants: {
		extend: {
			scale: ['group-hover'],
		},
	},
	plugins: [],
};
