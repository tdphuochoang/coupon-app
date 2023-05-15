/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],

	theme: {
		screens: {
			xs: "614px",
			sm: "1002px",
			md: "1022px",
			lg: "1092px",
			xl: "1280px",
		},

		extend: {
			colors: {
				dim: {
					25: "#B5E395",
					50: "#82B440",
					100: "#8DC267",
					150: "#5A9532",
				},
			},
		},
	},

	plugins: [],
};
