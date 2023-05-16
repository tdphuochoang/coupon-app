// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],

	css: ["@fortawesome/fontawesome-svg-core/styles.css"],
	alias: {
		"./runtimeConfig": "./runtimeConfig.browser",
	},
	vite: {
		define: {
			"window.global": {},
		},
	},
});
