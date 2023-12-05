import { HttpResponse, delay, http } from 'msw'
import { setupServer } from 'msw/node'
import { expect } from 'vitest'

import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'

import { ReactQueryTestWrapper } from './query-wrapper.tsx'
import User from './user.tsx'

const server = setupServer()

describe(User.name, () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())
	it('should load component', () => {
		server.use(http.get('/user', () => HttpResponse.json()))
		render(<User />, { wrapper: ReactQueryTestWrapper })
		// expect(screen.getByRole('heading')).toBeDefined()
	})

	it('should load component data', async () => {
		server.use(
			http.get('/user', async () => {
				await delay(3000)
				return HttpResponse.json({ user: 'Jon Doe' })
			})
		)

		render(<User />, { wrapper: ReactQueryTestWrapper })
		// const loader = screen.getByTestId('loader')
		const loader = screen.queryByTestId('loader')
		// // const loader = screen.queryByTestId('loader')
		screen.logTestingPlaygroundURL()
		// await waitForElementToBeRemoved(loader)
		await waitFor(() => expect(loader).not.toBeInTheDocument())
		screen.debug()
		// expect(screen.getByRole('heading')).toHaveTextContent('Jon Doe')
	})
})
