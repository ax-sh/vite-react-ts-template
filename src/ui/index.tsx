import axios from 'axios'

import { useQuery } from '@tanstack/react-query'

import { Post } from '../mocks'
import Loader from './Loader.tsx'

async function getPosts() {
	return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
}

export default function HttpApp() {
	const { isLoading, isSuccess, isError, data } = useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: getPosts
	})
	if (isLoading) return <Loader />
	if (isError) return <>error</>
	console.log(isSuccess, data)
	return <div>Hello</div>
}
