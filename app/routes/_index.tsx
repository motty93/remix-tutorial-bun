import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Remix Tutorial for Bun' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<div>
			<h1 className='font-bold text-3xl'>Remix Tutorialです</h1>
      <div className="mt-3">
        <Link to='/posts' className="text-blue-600">投稿一覧へ</Link>
      </div>
		</div>
	)
}
