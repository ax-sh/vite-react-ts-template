import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [banner('AX-SH TEMPLATE'), VitePWA(), react(), Pages()],
	server: {
		host: true
	}
})
