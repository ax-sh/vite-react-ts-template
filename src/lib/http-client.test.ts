import { httpClient } from './http-client.ts'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const server = setupServer(
	http.get('/test', () => {
		return HttpResponse.json({ message: 'success' })
	})
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe(httpClient.name, () => {
	it('should pass', () => {
		expect(httpClient).toBeDefined()
	})

	it('should pass get', () => {
		expect(httpClient.get).toBeDefined()
	})
	it('should pass post', () => {
		expect(httpClient.post).toBeDefined()
	})

	it('should get api response', async () => {
		const response = await httpClient.get('/test')
		const data = await response.data
		expect(data).toEqual({ message: 'success' })
	})
})
