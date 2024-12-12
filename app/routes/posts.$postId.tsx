import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { Post } from '~/types/post'

async function getPostById(id: number): Promise<Post | null> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
	)
	if (!response.ok) return null

	return response.json()
}

export const loader: LoaderFunction = async ({
	params,
}: LoaderFunctionArgs) => {
	const postId = Number(params.postId)
	if (isNaN(postId)) {
		throw new Response('Invalid Post ID', { status: 400 })
	}

	const post = await getPostById(postId)
	if (!post) {
		throw new Response('Post not found', { status: 404 })
	}

	console.log(post)
	return post
}

export default function Post() {
	const post = useLoaderData<Post>()
	console.log('testです')

	return (
		<div>
			<h1 className='font-bold text-3xl'>投稿詳細</h1>
			<h2 className='text-2xl my-4'>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}
