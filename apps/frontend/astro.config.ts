import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"

// Helper imports
import { seoConfig } from "./lib/seoConfig"
import svelte from "@astrojs/svelte"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
				path: "./tailwind.config.js"
			}
		}),
		sitemap(),
		compress(),
		svelte()
	],
	output: "server",
	adapter: vercel()
})
