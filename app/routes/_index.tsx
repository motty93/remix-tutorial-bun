import type { MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export type Post = {
	id: string
	title: string
	body: string
	userId: string
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Remix Tutorial for Bun' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export const loader = async () => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10',
	)
	const data: Post[] = await response.json()

	return Response.json({ status: 'success', posts: data })
}

export default function Index() {
	const { posts } = useLoaderData<typeof loader>()
	return (
		<div>
			<h1 className='font-bold text-3xl'>投稿一覧</h1>
			<div>
				{posts.map((post: Post) => (
					<div key={post.id} className='border-b border-gray-300 py-4'>
						<Link to={`/posts/${post.id}`} className='text-blue-600'>
							{post.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
