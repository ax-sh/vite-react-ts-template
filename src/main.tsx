import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return
	}

	const { worker } = await import('./mocks/browser')

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start()
}

const queryClient = new QueryClient()

enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<Router>
					<App />
				</Router>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</React.StrictMode>
	)
})
