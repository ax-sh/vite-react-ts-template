import { httpClient } from './http-client.ts'
import { expect } from 'vitest'

describe(httpClient.name, () => {
	it('should pass', () => {
		expect(httpClient).toBeDefined()
	})

	it('should pass get', () => {
		expect(httpClient.get).toBeDefined()
	})
	it('should pass post', () => {
		expect(httpClient.get).toBeDefined()
	})
})
