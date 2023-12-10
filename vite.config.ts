import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import VitePluginRadar from 'vite-plugin-radar'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VitePluginRadar({
			// Google Analytics tag injection
			analytics: {
				id: 'G-XXXXX'
			}
		}),
		banner('AX-SH TEMPLATE'),
		VitePWA(),
		react(),
		Pages()
	],
	server: {
		host: true
	}
})
