import { useState, useContext } from 'react'
import DataContext from './context/DataContext'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import api from './api/posts'

const NewPost = () => {
	const [postTitle, setPostTitle] = useState('')
	const [postBody, setPostBody] = useState('')
	const { posts, setPosts } = useContext(DataContext)
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			datetime: format(new Date(), 'dd MMMM yyyy pp'),
			title: postTitle,
			body: postBody,
		}
		try {
			const response = await api.post('/posts', newPost)
			console.log(response, response.data)
			setPosts(response.data)
			setPosts([...posts, response.data])
			setPostTitle('')
			setPostBody('')
			navigate('/')
		} catch (err) {
			console.log(`Error: ${err.message}`)
		}
	}

	return (
		<main className='NewPost'>
			<h1>New Post</h1>
			<form className='newPostForm' onSubmit={handleSubmit}>
				<label htmlFor='postTitle'>Title:</label>
				<input
					type='text'
					id='postTitle'
					value={postTitle}
					onChange={e => setPostTitle(e.target.value)}
					required
				/>
				<label htmlFor='postBody'>Post:</label>
				<textarea
					id='postBody'
					value={postBody}
					onChange={e => setPostBody(e.target.value)}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</main>
	)
}

export default NewPost
