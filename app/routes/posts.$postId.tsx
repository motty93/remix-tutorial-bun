import type { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

type Post = {
	id: string
	title: string
	body: string
	userId: string
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`,
	)

	const data: Post = await response.json()
	return Response.json({ status: 'success', post: data })
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>()
	return (
		<div>
			<h1 className='font-bold text-3xl'>投稿詳細</h1>
      <h2 className='text-2xl my-4'>{post.title}</h2>
      <p>{post.body}</p>
		</div>
	)
}
