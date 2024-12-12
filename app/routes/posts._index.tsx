import type { LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import type { Post } from '~/types/post'

export const loader: LoaderFunction = async () => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10',
	)
	const posts: Post[] = await response.json()

	return posts
}

export default function Posts() {
	const posts = useLoaderData<typeof loader>()

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
			<div className='mt-3'>
        <Button asChild>
          <Link to='/posts/new'>
            投稿作成
          </Link>
        </Button>
			</div>
		</div>
	)
}
