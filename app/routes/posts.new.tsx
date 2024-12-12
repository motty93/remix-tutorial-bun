import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, redirect } from '@remix-run/react'

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	const title = formData.get('title')
	const body = formData.get('body')

	// 投稿完了
	// 本来であればprismaでDBに保存する処理を書く
	console.log(title, body)

	return redirect('/')
}

export default function NewPost() {
	return (
		<div>
			<h1 className='font-bold text-3xl'>投稿作成</h1>
			<Form method='post'>
				<input type='text' name='title' className='border-2 block' />
				<textarea name='body' className='border-2 block' />
				<button type='submit' className='border-2 p-2'>
					作成
				</button>
			</Form>
		</div>
	)
}
