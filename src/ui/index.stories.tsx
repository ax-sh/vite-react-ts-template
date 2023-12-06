import { HttpResponse, delay, http } from 'msw'
import { D as DefaultBodyType } from 'msw/lib/core/RequestHandler-50ddea0c'
import { PathParams } from 'msw/lib/core/utils/matching/matchRequestUrl'

import { Meta, StoryObj } from '@storybook/react'

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import withAPIRequest from '../configs/with-api-request.tsx'
import { Post, posts } from '../mocks'
import HttpApp from './index.tsx'

const meta = {
	title: 'features/http states',
	component: HttpApp,
	decorators: [withAPIRequest]
	//👇 Enables auto-generated documentation for the component story
	// tags: ['autodocs'] //Note has problems with react query
} satisfies Meta<typeof HttpApp>

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
		handlers: [
			http.get<PathParams, DefaultBodyType, Post[]>('https://jsonplaceholder.typicode.com/posts', () =>
				HttpResponse.json(posts)
			)
		]
	}
}

export const Error: Story = {}
Error.parameters = {
	msw: {
		handlers: [http.get('https://jsonplaceholder.typicode.com/posts', () => HttpResponse.error())]
	}
}
