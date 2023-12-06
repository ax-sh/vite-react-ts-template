import { HttpResponse, delay, http } from 'msw'

import { Meta, StoryObj } from '@storybook/react'

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import withAPIRequest from '../configs/with-api-request.tsx'
import { Post, posts } from '../mocks'
import HttpApp from './index.tsx'

const meta = {
	title: 'features/http states',
	component: HttpApp,
	decorators: [withAPIRequest]
} satisfies Meta<typeof HttpApp>

// const defaultQueryClient = new QueryClient()

// export const DefaultBehavior = () => (
// 	<QueryClientProvider client={defaultQueryClient}>
// 		<HttpApp />
// 	</QueryClientProvider>
// )

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {}
Loading.parameters = {
	msw: {
		handlers: [http.get('https://jsonplaceholder.typicode.com/posts', () => delay('infinite'))]
	}
}
export const Data: Story = {}
Data.parameters = {
	msw: {
		handlers: [http.get<any, any, Post[]>('https://jsonplaceholder.typicode.com/posts', () => HttpResponse.json(posts))]
	}
}

export const Error: Story = {}
Error.parameters = {
	msw: {
		handlers: [http.get('https://jsonplaceholder.typicode.com/posts', () => HttpResponse.error())]
	}
}
