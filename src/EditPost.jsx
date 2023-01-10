import { useContext, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from './context/DataContext'
import { format } from 'date-fns'
import api from './api/posts'

const EditPost = () => {
	const { posts, setPosts } = useContext(DataContext)

	const [editTitle, setEditTitle] = useState('')
	const [editBody, setEditBody] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const post = posts.find(post => post.id === Number(id))

	useEffect(() => {
		if (post) {
			setEditTitle(post.title)
			setEditBody(post.body)
		}
	}, [])

	const handleEdit = async id => {
		const updatedPost = {
			id,
			datetime: format(new Date(), 'dd MMMM yyyy pp'),
			title: editTitle,
			body: editBody,
		}

		try {
			const response = await api.put(`/posts/${id}`, updatedPost)
			console.log(response.data)
			setPosts(
				posts.map(post => (post.id === id ? { ...response.data } : post))
			)
			setEditTitle('')
			setEditBody('')
			navigate('/')
		} catch (err) {
			console.log(`Error: ${err.message}`)
		}
	}

	return (
		<main className='NewPost'>
			{editTitle && (
				<>
					<h1>Edit Post</h1>
					<form className='newPostForm' onSubmit={e => e.preventDefault()}>
						<label htmlFor='postTitle'>Title:</label>
						<input
							type='text'
							id='postTitle'
							value={editTitle}
							onChange={e => setEditTitle(e.target.value)}
							required
						/>
						<label htmlFor='postBody'>Post:</label>
						<textarea
							id='postBody'
							value={editBody}
							onChange={e => setEditBody(e.target.value)}
							required
						/>
						<button type='submit' onClick={() => handleEdit(post.id)}>
							Submit
						</button>
					</form>
				</>
			)}

			{!editTitle && (
				<>
					<h2>Post Not Found</h2>
					<p>Well, that's disappointing</p>
					<p>
						<Link to='/'>Visit Our Homepage</Link>
					</p>
				</>
			)}
		</main>
	)
}

export default EditPost
