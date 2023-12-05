import { useQuery } from '@tanstack/react-query'

import { httpClient } from '../lib/http-client.ts'
import Loader from './Loader.tsx'

const getUser = () => httpClient.get('/user').then(response => response.data)
export default function User() {
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: getUser
	})
	if (isLoading) return <Loader />
	return <h1>{data.user}</h1>
}
