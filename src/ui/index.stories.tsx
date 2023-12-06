import { DefaultBodyType, HttpResponse, PathParams, delay, http } from 'msw'

import { Meta, StoryObj } from '@storybook/react'

import withAPIRequest from '../configs/with-api-request.tsx'
import { Post, posts } from '../mocks'
import HttpApp from './index.tsx'

const meta = {
	title: 'Features/Http States',

	// decorators: [withAPIRequest],
	//👇 Enables auto-generated documentation for the component story
	// tags: ['autodocs'], //Note has problems with react query,
	component: HttpApp
} satisfies Meta<typeof HttpApp>

const API_ROUTE = 'https://jsonplaceholder.typicode.com/posts'

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = { decorators: [withAPIRequest] }
Loading.parameters = {
	msw: {
		handlers: [http.get(API_ROUTE, () => delay('infinite'))]
	}
}
export const Data: Story = { decorators: [withAPIRequest] }
Data.parameters = {
	msw: {
		handlers: [http.get<PathParams, DefaultBodyType, Post[]>(API_ROUTE, () => HttpResponse.json(posts))]
	}
}

export const Error: Story = { decorators: [withAPIRequest] }
Error.parameters = {
	msw: {
		handlers: [http.get(API_ROUTE, () => HttpResponse.error())]
	}
}
